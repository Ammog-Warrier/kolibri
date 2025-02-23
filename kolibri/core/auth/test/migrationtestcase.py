from django.db import connection
from django.db.migrations.executor import MigrationExecutor
from django.db.migrations.recorder import MigrationRecorder
from django.test import TransactionTestCase


# Modified from https://www.caktusgroup.com/blog/2016/02/02/writing-unit-tests-django-migrations/


class TestMigrations(TransactionTestCase):

    migrate_from = None
    migrate_to = None
    app = None

    @classmethod
    def setUpClass(cls):
        super(TestMigrations, cls).setUpClass()

        # get the latest migration before starting
        latest_migration = MigrationRecorder.Migration.objects.filter(
            app=cls.app
        ).last()
        cls.latest_migration = (cls.app, latest_migration.name)

    def setUp(self):
        assert (
            self.migrate_from and self.migrate_to
        ), "TestCase '{}' must define migrate_from and migrate_to properties".format(
            type(self).__name__
        )

        migrate_from = [(self.app, self.migrate_from)]
        migrate_to = [(self.app, self.migrate_to)]
        executor = MigrationExecutor(connection)
        old_apps = executor.loader.project_state(migrate_from).apps

        # Reverse to the original migration
        executor.migrate(migrate_from)

        self.setUpBeforeMigration(old_apps)

        # Run the migration to test
        executor = MigrationExecutor(connection)
        executor.loader.build_graph()  # reload.
        executor.migrate(migrate_to)

        self.apps = executor.loader.project_state(migrate_to).apps

    def setUpBeforeMigration(self, apps):
        pass

    @classmethod
    def tearDownClass(cls):
        # revert migration back to latest migration
        executor = MigrationExecutor(connection)
        executor.loader.build_graph()
        executor.migrate([cls.latest_migration])

        super(TestMigrations, cls).tearDownClass()
