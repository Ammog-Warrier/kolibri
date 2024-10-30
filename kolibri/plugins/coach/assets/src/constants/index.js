import { LessonsPageNames } from './lessonsConstants';

export const PageNames = {
  HOME_PAGE: 'HomePage', // make sure this matches the Coach 'Home' page name
  REPORTS_PAGE: 'REPORTS_PAGE',
  PLAN_PAGE: 'PLAN_PAGE',
  COACH_CLASS_LIST_PAGE: 'COACH_CLASS_LIST_PAGE',
  NEW_COACH_PAGES: 'NEW_COACH_PAGES',
  EXAMS: 'EXAMS',
  EXAM_CREATION_ROOT: 'EXAM_CREATION_ROOT',
  EXAM_SUMMARY: 'EXAM_SUMMARY',

  /** Newly added routes */
  QUIZ_SECTION_EDITOR: 'QUIZ_SECTION_EDITOR',
  QUIZ_REPLACE_QUESTIONS: 'QUIZ_REPLACE_QUESTIONS',
  QUIZ_SELECT_RESOURCES: 'QUIZ_SELECT_RESOURCES',
  QUIZ_SELECT_PRACTICE_QUIZ: 'QUIZ_SELECT_PRACTICE_QUIZ',
  QUIZ_SECTION_ORDER: 'QUIZ_SECTION_ORDER',
  BOOK_MARKED_RESOURCES: 'BOOK_MARKED_RESOURCES',

  EXAM_REPORT: 'EXAM_REPORT',
  EXAM_REPORT_DETAIL: 'EXAM_REPORT_DETAIL',
  EXAM_REPORT_DETAIL_ROOT: 'EXAM_REPORT_DETAIL_ROOT',
  REPORTS_LESSON_EXERCISE_LEARNER_PAGE_ROOT: 'REPORTS_LESSON_EXERCISE_LEARNER_PAGE_ROOT',
  REPORTS_GROUP_REPORT_LESSON_EXERCISE_LEARNER_PAGE_ROOT:
    'REPORTS_GROUP_REPORT_LESSON_EXERCISE_LEARNER_PAGE_ROOT',
  REPORTS_LEARNER_ACTIVITY_EXERCISE_PAGE_ROOT: 'REPORTS_LEARNER_ACTIVITY_EXERCISE_PAGE_ROOT',
  REPORTS_LEARNER_REPORT_LESSON_EXERCISE_PAGE_ROOT:
    'REPORTS_LEARNER_REPORT_LESSON_EXERCISE_PAGE_ROOT',
  REPORTS_LESSON_LEARNER_EXERCISE_PAGE_ROOT: 'REPORTS_LESSON_LEARNER_EXERCISE_PAGE_ROOT',
  REPORTS_GROUP_LEARNER_REPORT_QUIZ_PAGE_ROOT: 'REPORTS_GROUP_LEARNER_REPORT_QUIZ_PAGE_ROOT',
  REPORTS_GROUP_REPORT_QUIZ_LEARNER_PAGE_ROOT: 'REPORTS_GROUP_REPORT_QUIZ_LEARNER_PAGE_ROOT',
  REPORTS_LEARNER_REPORT_QUIZ_PAGE_ROOT: 'REPORTS_LEARNER_REPORT_QUIZ_PAGE_ROOT',
  REPORTS_QUIZ_LEARNER_PAGE_ROOT: 'REPORTS_QUIZ_LEARNER_PAGE_ROOT',
  REPORTS_LESSON_EXERCISE_QUESTION_PAGE_ROOT: 'REPORTS_LESSON_EXERCISE_QUESTION_PAGE_ROOT',
  REPORTS_GROUP_REPORT_LESSON_EXERCISE_QUESTION_PAGE_ROOT:
    'REPORTS_GROUP_REPORT_LESSON_EXERCISE_QUESTION_PAGE_ROOT',
  REPORTS_GROUP_REPORT_QUIZ_QUESTION_PAGE_ROOT: 'REPORTS_GROUP_REPORT_QUIZ_QUESTION_PAGE_ROOT',
  REPORTS_QUIZ_QUESTION_PAGE_ROOT: 'REPORTS_QUIZ_QUESTION_PAGE_ROOT',
  LESSON_EDIT_DETAILS: 'LESSON_EDIT_DETAILS',
  LESSON_SELECT_RESOURCES: 'LESSON_SELECT_RESOURCES',
  LESSON_PREVIEW_SELECTED_RESOURCES: 'LESSON_PREVIEW_SELECTED_RESOURCES',
  LESSON_PREVIEW_RESOURCE: 'LESSON_PREVIEW_RESOURCE',

  LEARNERS_ROOT: 'LEARNERS_ROOT',

  GROUPS_ROOT: 'GROUPS_ROOT',
};

export const GroupModals = {
  ABOUT_GROUP: 'ABOUT_GROUP',
  CREATE_GROUP: 'CREATE_GROUP',
  RENAME_GROUP: 'RENAME_GROUP',
  DELETE_GROUP: 'DELETE_GROUP',
};

export const ViewMoreButtonStates = {
  LOADING: 'LOADING',
  HAS_MORE: 'HAS_MORE',
  NO_MORE: 'NO_MORE',
  ERROR: 'ERROR',
};

export const pageNameToModuleMap = {
  [PageNames.EXAM_REPORT_DETAIL]: 'examReportDetail',
  [LessonsPageNames.LESSONS_ROOT]: 'lessonsRoot',
  [LessonsPageNames.RESOURCE_USER_REPORT]: 'exerciseDetail',
  // Omitting modules for resource selection, exam creation, and preview to prevent
  // default module state resetting behavior.
};
