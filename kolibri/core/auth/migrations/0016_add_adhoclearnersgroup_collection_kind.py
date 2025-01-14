# -*- coding: utf-8 -*-
# Generated by Django 1.11.23 on 2019-12-09 12:34
from django.db import migrations
from django.db import models


class Migration(migrations.Migration):

    dependencies = [("kolibriauth", "0015_facilitydataset_registered")]

    operations = [
        migrations.CreateModel(
            name="AdHocGroup",
            fields=[],
            options={"proxy": True, "indexes": []},
            bases=("kolibriauth.collection",),
        ),
        migrations.AlterField(
            model_name="collection",
            name="kind",
            field=models.CharField(
                choices=[
                    ("facility", "Facility"),
                    ("classroom", "Classroom"),
                    ("learnergroup", "Learner group"),
                    ("adhoclearnersgroup", "Ad hoc learners group"),
                ],
                max_length=20,
            ),
        ),
    ]
