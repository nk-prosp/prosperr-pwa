export const ErrorMsg = {
  INVALID_EMAIL: 'Invalid email!',
  LOWERCASE_PASSWORD:
    'The password must contain at least 1 lowercase alphabetical character',
  UPPERCASE_PASSWORD:
    'The password must contain at least 1 uppercase alphabetical character',
  NUMERIC_PASSWORD: 'The password must contain at least 1 numeric character',
  SPECIAL_CHARACTER: 'The password must contain at least one special character',
  WRONG_EMAIL: 'Your email might be wrong',
  PASSWORD_LENGTH_ERROR: 'Password should be atleast 6 characters long',
  EMPTY_NAME: 'Name cannot be empty',
  EMPTY_VERIFICATIONCODE: 'Verification Code cannot be empty',
  OBJECTIVE_MOVE_TO_KRS: "Objective can't be moved under one of its KRs.",
  OBJECTIVE_MOVE_TO_SAME_PARENT:
    "Objective can't be moved under the same parent.",
  EMPTY_EMAIL: 'Enter valid email',
  UNSAVED_CHANGES: 'You have unsaved changes.',
  SAME_OBJECTIVE_LINK_ERROR:
    'The objective has already been linked to this objective',
  OBJECTIVE_IS_IN_KRS_ERROR: "Objective can't be linked to one of its KRs.",
  OBJECTIVE_TO_LINK_IS_PARENT_ERROR: "Objective can't be linked to the parent.",
  METRIC_START_AND_TARGET_MANDATORY:
    'Start and target are mandatory for a metric.',
  NEED_METRIC_NAME: 'Need a metric name',
  DUPLICATE_METRIC:
    'A metric with same name already exists. Please create a different input metric.',
  SAME_VALUE: 'Metric start value and target value cannot be same',
  SAME_MILESTONE_VALUES: "Both values can't be same",
  SAME_MILESTONE_DATES: "Both dates can't be same",
  MILESTONE_VALUE_OUT_OF_RANGE:
    'Milestone values should lie between start and target values',
  MILESTONE_DATES_OUT_OF_RANGE:
    'Milestone dates should lie between start and due date'
};

export const SubscribeStatus = {
  FOLLOW: 'Follow',
  UNFOLLOW: 'Unfollow'
};

export const ObjectiveActionTypes = {
  CHECK_IN: 'CHECK-IN',
  COMMENT: 'COMMENT',
  CHANGE_QUARTER: 'CHANGE_QUARTER'
};

export const PasswordLength = '6';

export const CheckInTextMaxLength = 600;

export const ActivityType = {
  CREATE_OBJECTIVE: 'CREATE_OBJECTIVE',
  OBJECTIVE_COMMENT: 'OBJECTIVE_COMMENT',
  OBJECTIVE_TYPE: 'OBJECTIVE_TYPE',
  OBJECTIVE_DESCRIPTION: 'OBJECTIVE_DESCRIPTION',
  OBJECTIVE_COMPLETION_STATUS: 'OBJECTIVE_COMPLETION_STATUS',
  OBJECTIVE_TITLE: 'OBJECTIVE_TITLE',
  OBJECTIVE_OKR_CYCLE: 'OBJECTIVE_OKR_CYCLE',
  OBJECTIVE_OWNER: 'OBJECTIVE_OWNER',
  OBJECTIVE_CHECK_IN: 'OBJECTIVE_CHECKIN',
  ADD_OBJECTIVE_CHECKIN: 'ADD_OBJECTIVE_CHECKIN',
  UPDATE_OBJECTIVE_CHECKIN: 'UPDATE_OBJECTIVE_CHECKIN',
  DELETE_OBJECTIVE_CHECKIN: 'DELETE_OBJECTIVE_CHECKIN',
  OBJECTIVE_PROGRESS: 'OBJECTIVE_PROGRESS',
  OBJECTIVE_STATUS: 'OBJECTIVE_STATUS',
  ADD_OBJECTIVE_TAGS: 'ADD_OBJECTIVE_TAGS',
  REMOVE_OBJECTIVE_TAGS: 'REMOVE_OBJECTIVE_TAGS',
  OBJECTIVE_PARENT_DELETED: 'OBJECTIVE_PARENT_DELETED',
  OBJECTIVE_TYPE_AFTER_PARENT_DELETION: 'OBJECTIVE_TYPE_AFTER_PARENT_DELETION',
  ALIGN_OBJECTIVE: 'ALIGN_OBJECTIVE',
  OBJECTIVE_DUE_DATE: 'OBJECTIVE_DUE_DATE',
  OBJECTIVE_START_DATE: 'OBJECTIVE_START_DATE',
  OBJECTIVE_CREATION_BY_DUPLICATION: 'OBJECTIVE_CREATION_BY_DUPLICATION',
  OBJECTIVE_DUPLICATION: 'OBJECTIVE_DUPLICATION',
  ADD_METRIC: 'ADD_METRIC',
  UPDATE_METRIC: 'UPDATE_METRIC',
  DELETE_METRIC: 'DELETE_METRIC',
  ADD_MILESTONE: 'ADD_MILESTONE',
  UPDATE_MILESTONE: 'UPDATE_MILESTONE',
  DELETE_MILESTONE: 'DELETE_MILESTONE'
};

export const ActivityTypeValue = {
  NEEDS_WORK: 'Needs Work',
  NOT_STARTED: 'Not Started',
  NEGOTIATION: 'Negotiation',
  OFF_TRACK: 'Off Track',
  REJECTED: 'rejected',
  ACCEPTED: 'Accepted',
  ON_TRACK: 'On Track',
  ACHIEVED: '🎉 Achieved',
  DROPPED: 'Dropped',
  COMPANY: 'Company Objective',
  NON_ALIGNED: 'Non Aligned',
  NOT_ACHIEVED: 'Not Achieved',
  ADD_METRIC: 'ADD_METRIC',
  UPDATE_METRIC: 'UPDATE_METRIC'
};

export const ObjectiveCycleStatus = {
  EXPIRED: 'EXPIRED',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export const UserStatus = {
  REVOKED: 'REVOKED',
  INVALID: 'INVALID',
  ACTIVE: 'ACTIVE',
  PENDING: 'PENDING'
};

export const UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export const ActionKey = {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export const StorageKey = {
  ORG_NAME: 'ORG_NAME',
  ORG_ID: 'ORG_ID',
  ORG_INFO: 'ORG_INFO',
  SUB_DOMAIN: 'SUB_DOMAIN',
  USER_INFO: 'USER_INFO',
  PRODUCT_ID: 'PRODUCT_ID',
  ACCESS_TOKEN: 'ACCESS_TOKEN',
  REQUESTER_USER_ID: 'REQUESTER_USER_ID',
  IS_GOOGLED_SIGNED: 'IS_GOOGLED_SIGNED',
  USER_ORGS: 'USER_ORGS',
  REDIRECT_URL: 'REDIRECT_URL'
};

export const ObjectiveStatus = {
  NEEDS_WORK: 'NEEDS_WORK',
  NOT_STARTED: 'NOT_STARTED',
  NEGOTIATION: 'NEGOTIATION',
  OFF_TRACK: 'OFF_TRACK',
  REJECTED: 'REJECTED',
  ACCEPTED: 'ACCEPTED',
  ON_TRACK: 'ON_TRACK',
  ACHIEVED: 'ACHIEVED',
  DROPPED: 'DROPPED',
  COMPANY: 'COMPANY',
  NON_ALIGNED: 'NON_ALIGNED',
  NOT_ACHIEVED: 'NOT_ACHIEVED'
};

export const FilterStatusTypes = [
  {
    name: 'Not Started',
    id: ObjectiveStatus.NOT_STARTED
  },
  {
    name: 'Off Track',
    id: ObjectiveStatus.OFF_TRACK
  },
  {
    name: 'Needs Work',
    id: ObjectiveStatus.NEEDS_WORK
  },
  {
    name: 'On Track',
    id: ObjectiveStatus.ON_TRACK
  },
  {
    name: 'Dropped',
    id: ObjectiveStatus.DROPPED
  },
  {
    name: '🎉 Achieved',
    id: ObjectiveStatus.ACHIEVED
  },
  {
    name: 'Not Achieved',
    id: ObjectiveStatus.NOT_ACHIEVED
  }
];

export const FilterObjectiveTypes = [
  {
    name: 'Company objectives',
    id: 'COMPANY'
  },
  {
    name: 'Non-aligned objectives',
    id: 'NON_ALIGNED'
  }
];

export const FilterLabelTypes = [
  {
    heading: 'Starred Objectives',
    name: 'Show all starred objectives',
    label: 'Starred', // used in filter chips
    id: '1bf296d3-153e-4cd9-96fc-e26b29d29565'
  }
  // to be used with private objectives
  // {
  //   heading: 'Private Objectives',
  //   name: 'Show my private objectives',
  //   id: '',
  // }
];

export const FilterNegotiationStatus = [
  {
    name: 'Accepted State',
    label: 'Accepted',
    id: 'ACCEPTED'
  },
  {
    name: 'Negotiation State',
    label: 'In negotiation',
    id: 'NEGOTIATION'
  },
  {
    name: 'Declined State',
    label: 'Declined',
    id: 'REJECTED'
  }
];

export const QueryParam = {
  OBJECTIVE_CYCLE: 'oc',
  SELECTED_TEAM: 'tm',
  SELECTED_OBJECTIVE: 'ob'
};

export const ToastActionText = {
  REFRESH: 'Refresh',
  VIEW: 'View',
  UNDO: 'Undo'
};

export const ToastActionType = {
  HIGHLIGHT_OBJECTIVE: 'HIGHLIGHT_OBJECTIVE',
  REFRESH_PAGE: 'REFRESH_PAGE',
  REFRESH_OBJECTIVES: 'REFRESH_OBJECTIVES',
  VIEW_OBJECTIVE_DETAILS: 'VIEW_OBJECTIVE_DETAILS'
};

export const HeaderLeftTabs = [
  {
    label: 'My Objectives',
    tag_id: '8b97e974-13c6-4c71-b225-6c9d52ac3100'
  },
  {
    label: 'My Starred',
    tag_id: '1bf296d3-153e-4cd9-96fc-e26b29d29565'
  },
  {
    label: 'All Objectives',
    tag_id: '0c5ac74d-394f-420f-8932-5d10a71d9a78'
  }
];

export const HeaderMenus = [
  {
    path: 'settings',
    text: 'Account',
    icon: 'person'
  },
  {
    path: 'people',
    text: 'People',
    icon: 'twoPeople'
  }
];

export const ObjectiveActions = [
  {
    text: 'View Details',
    type: 'text',
    id: 'view'
  },
  {
    text: 'Copy to Quarter',
    type: 'dropDown',
    id: 'copyToQuarter',
    disableText: 'Copy already exists'
  },
  {
    text: 'Comment',
    type: 'text',
    id: 'comment'
  },
  {
    text: 'Paste Objective',
    type: 'text',
    id: 'paste'
  },
  {
    text: 'Move Objective',
    type: 'text',
    id: 'move'
  },
  {
    text: 'Link to Objective... ',
    type: 'text',
    id: 'link',
    isSectionBreakerRequired: true
  },
  {
    text: 'Link here as key result',
    type: 'text',
    id: 'link-here'
  },
  {
    text: 'Delete',
    type: 'text',
    id: 'delete',
    color: '#df2e2e',
    isSectionBreakerRequired: true
  }
];

export const LinkedObjectiveActions = [
  // disabled this for now as implementation is not done
  // {
  //   text: 'Go to original',
  //   type: 'text',
  //   id: 'goToOriginal'
  // },

  // not needed in the linked objectives for now
  // {
  //   text: 'View Linked Objectives',
  //   type: 'text',
  //   id: 'viewLinkedObjectives'
  // },
  {
    text: 'View Details',
    type: 'text',
    id: 'view'
  },
  {
    text: 'Comment',
    type: 'text',
    id: 'comment'
  },
  {
    text: 'Move',
    type: 'text',
    id: 'move'
  },
  {
    text: 'Unlink',
    type: 'text',
    id: 'unlink'
  }
];

export const ObjectiveDetailViewActions = [
  {
    text: 'Edit',
    type: 'text',
    id: 'edit'
  },
  {
    text: 'Copy to Quarter',
    type: 'dropDown',
    id: 'copyToQuarter',
    disableText: 'Copy already exists'
  },
  {
    text: 'Move Objective',
    type: 'text',
    id: 'moveObjective',
    disableText:
      'Objective can be moved only when viewed within the same quarter. Please change your quarter to move the objective.'
  },
  {
    text: 'Link to Objective... ',
    type: 'text',
    id: 'link',
    isSectionBreakerRequired: true
  },
  {
    text: 'Delete',
    type: 'text',
    id: 'delete',
    color: '#df2e2e'
  }
];

export const copyToQuarterOptions = [
  {
    text: 'Copy this objective only',
    id: 0
  },
  {
    text: 'Copy objective and its key results',
    id: 1
  },
  {
    text: 'Copy objective and entire key result tree',
    id: -1
  }
];

export const ActiveMemberAdminActions = [
  {
    text: 'Make Workspace Admin',
    type: 'text',
    id: 'change_role'
  },
  {
    text: 'Remove User',
    type: 'text',
    id: 'delete_user'
  }
];

export const RemoveAdminUserActions = [
  {
    text: 'Remove Admin Rights',
    type: 'text',
    id: 'change_role'
  },
  {
    text: 'Remove User',
    type: 'text',
    id: 'delete_user'
  }
];

export const PendingMemberAdminActions = [
  {
    text: 'Make Admin',
    type: 'text',
    id: 'change_role'
  },
  {
    text: 'Reinvite',
    type: 'text',
    id: 'reinvite'
  },
  {
    text: 'Revoke Invitation',
    type: 'text',
    id: 'revoke_invitation'
  }
];

export const PendingMemberRemoveAdminUserActions = [
  {
    text: 'Remove Admin Rights',
    type: 'text',
    id: 'change_role'
  },
  {
    text: 'Reinvite',
    type: 'text',
    id: 'reinvite'
  },
  {
    text: 'Revoke Invitation',
    type: 'text',
    id: 'revoke_invitation'
  }
];

export const DateConversionType = {
  HOUR_AND_DATE: 'HOUR_AND_DATE',
  TIME_AGO: 'TIME_AGO',
  DATE_AND_YEAR: 'DATE_AND_YEAR'
};

export const ObjectiveDescPlaceholder =
  'Add links to working documents like dashboards, google sheets or JIRA tickets.';

export const wordLimit = {
  ZERO: 'ZERO',
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  FULL: 'FULL',
  OVER: 'OVER'
};

export const exportCsvHeaders = {
  IS_ALIGNED_TO: 'Is/Aligned to',
  TITLE: 'Title',
  PARENT_OBJECTIVE_TITLE: 'Parent Objective Title',
  METRIC: 'Metric',
  STATE: 'State',
  OWNER: 'Owner',
  TEAMS: 'Teams',
  METRIC_NAME: 'Metric Name',
  START_VALUE: 'Start Value',
  TARGET_VALUE: 'Target Value',
  CURRENT_VALUE: 'Current Value',
  MILESTONE_1_DATE: 'Milestone 1 Date',
  MILESTONE_1_VALUE: 'Milestone 1 Value',
  MILESTONE_2_DATE: 'Milestone 2 Date',
  MILESTONE_2_VALUE: 'Milestone 2 Value',
  PROGRESS: 'Progress %',
  STATUS: 'Status',
  OBJECTIVE_ID: 'Objective Id',
  PARENT_OBJECTIVE_ID: 'Parent Objective Id',
  START_DATE: 'Start Date',
  DUE_DATE: 'Due Date',
  LAST_UPDATED_TIME: 'Last Updated Time',
  LAST_CHECK_IN: 'Last Check In'
};

export const AlertActionTypes = {
  SUCCESS: 'success',
  LOADING: 'loading',
  FIXED: 'fixed',
  ALERT: 'alert',
  ERROR: 'error'
};

export const FirebaseKeys = {
  api_error_code_mapping: 'api_error_code_mapping',
  objective_listing_type: 'objective_listing_type',
  app_insight_dashboard: 'app_insight_dashboard',
  restrict_email_login: 'restrict_email_login',
  slack_integration: 'slack_integration',
  feature_config: 'feature_config',
  feature_search: 'feature_search',
  common_config: 'common_config',
  view_dashboard: 'view_dashboard'
};

export const PaginationType = {
  PAGINATE: 'PAGINATE',
  LOAD_MORE: 'LOAD_MORE',
  DEFAULT: 'DEFAULT'
};

export const HelpDropDownLinks = [
  {
    label: 'Getting Started',
    link: 'https://xto10x.gitbook.io/getting-started-on-10xgoals/'
  },
  {
    label: 'FAQs',
    link:
      'https://xto10x.gitbook.io/getting-started-on-10xgoals/help-and-support/faqs'
  },
  {
    label: 'OKR Playbook',
    link:
      'https://xto10x.gitbook.io/getting-started-on-10xgoals/okr-champion-guide/driving-okr-adoption-across-the-org'
  }
];

export const AuthenticatedUserPaths = [
  '/orgs',
  '/home',
  '/dashboard',
  '/people',
  '/account',
  '/settings'
];

export const UnAuthenticatedUserPaths = [
  '/login',
  '/forgot-password',
  '/sign-up',
  '/reset-password',
  '/sign-up-invite',
  '/signin',
  '/'
];

export const UrlOrgDomainExceptions = [
  'login',
  'forgot-password',
  'sign-up',
  'signup',
  'reset-password',
  'sign-up-invite',
  'signin'
];

export const SidebarVisibilityPaths = [
  '/home',
  '/dashboard',
  '/people',
  '/account',
  '/settings'
];

export const NotificationPreferenceTypes = [
  {
    id: 'OBJECTIVE_CORE_ACTIVITY',
    text: 'Creating, editing & deleting objectives'
  },
  { id: 'MENTIONS', text: 'Direct mentions & comments' },
  { id: 'ACKNOWLEDGEMENTS', text: 'Acknowledgement of Accept/Decline' },
  { id: 'OBJECTIVE_UPDATES', text: 'Updates on objectives & key results' },
  {
    id: 'OBJECTIVE_OTHERS',
    text: 'Others'
  }
];

export const KeyCodes = {
  escape: 27,
  enter: 13,
  space: 32,
  arrowDown: 40,
  arrowUp: 38
};

export const FeatureInfoMapping = {
  LINK_OBJECTIVE: {
    img: 'link-info-img',
    heading: 'Linking to an objective',
    description:
      'Linking is easy - You’ve already picked the objective you want to link. Now find the objective you want to link to and click on “Link here as key result” from the 3-dot menu.',
    externalLink:
      'https://xto10x.gitbook.io/getting-started-on-10xgoals/multiple-alignment/'
  }
};

export const UserTaskStatus = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED'
};

export const DisabledTextObjectiveActions = {
  MOVE_IN_PROGRESS: 'Move is in progress',
  LINK_IN_PROGRESS: 'Linking is in progress'
};

export const TaskPanelInfoText = {
  EMPTY_TASKS_TEXT:
    'You can assign action items to anyone via mentioned comments.',
  EMPTY_OPEN_TASK_ASSIGNED_BY_USER_TEXT:
    'None of the task assigned by you are in open state',
  EMPTY_CLOSED_TASK_ASSIGNED_BY_USER_TEXT:
    'None of the task assigned by you are in closed state',
  EMPTY_OPEN_TASK_ASSIGNED_TO_USER_TEXT:
    'No Open tasks are currently assigned to you',
  EMPTY_CLOSED_TASK_ASSIGNED_TO_USER_TEXT:
    'No closed tasks are currently under  you',
  LEARN_MORE_LINK:
    'https://xto10x.gitbook.io/getting-started-on-10xgoals/action-task-board'
};

export const AccountLeftTabs = {
  Profile: {
    text: 'Profile',
    id: 'profile'
  },
  Notifications: {
    text: 'Notifications',
    id: 'notifications'
  },
  Integrations: {
    text: 'Integrations',
    id: 'integrations'
  }
};

export const ViewDashboardActionTypes = {
  BY_OBJECTIVE_NEGOTIATION_STATE: 'objective-state',
  BY_OBJECTIVE_OVERDUE_WITH_LEVELS: 'objective-overdue-with-levels',
  BY_OBJECTIVE_ALIGNMENT_TYPE: 'objective-count-by-type',
  BY_OBJECTIVE_LAST_UPDATED_TIME: 'objective-last-updated-details',
  BY_OBJECTIVE_COMPLETION_STATE: 'objective-completion-state',
  BY_OBJECTIVE_PERCENTAGE_PROGRESS_STATE: 'objective-progress-buckets'
};

export const ViewDashboardGraphTitles = {
  BY_OBJECTIVE_NEGOTIATION_STATE: 'OKRs awaiting acceptance',
  BY_OBJECTIVE_OVERDUE_WITH_LEVELS: 'objective-overdue-with-levels',
  BY_OBJECTIVE_ALIGNMENT_TYPE: 'OKRs aligned to company',
  BY_OBJECTIVE_LAST_UPDATED_TIME: 'OKRs not updated in 15 days',
  BY_OBJECTIVE_COMPLETION_STATE: 'OKRs by Status',
  BY_OBJECTIVE_PERCENTAGE_PROGRESS_STATE: 'OKRs by Progress'
};

export const ViewDashboardActionFilterMapping = {
  BY_OBJECTIVE_NEGOTIATION_STATE: 'negotiation_states', // negotiation
  BY_OBJECTIVE_ALIGNMENT_TYPE: 'objectives',
  BY_OBJECTIVE_OVERDUE_WITH_LEVELS: 'due_date',
  BY_OBJECTIVE_LAST_UPDATED_TIME: 'notUpdatedDaysPassed',
  BY_OBJECTIVE_COMPLETION_STATE: 'status',
  BY_OBJECTIVE_PERCENTAGE_PROGRESS_STATE: 'progress_percentage'
};

export const ViewDashboardCircularProgressColorMapping = {
  BY_OBJECTIVE_ALIGNMENT_TYPE: [
    { from: 86, to: 100, color: '#1db510' },
    { from: 65, to: 85, color: '#f9b312' },
    { from: 0, to: 64, color: '#eb5757' }
  ],
  BY_OBJECTIVE_NEGOTIATION_STATE: [
    { from: 0, to: 10, color: '#1db510' },
    { from: 11, to: 30, color: '#f9b312' },
    { from: 31, to: 100, color: '#eb5757' }
  ],
  BY_OBJECTIVE_LAST_UPDATED_TIME: [
    { from: 0, to: 10, color: '#1db510' },
    { from: 11, to: 30, color: '#f9b312' },
    { from: 31, to: 100, color: '#eb5757' }
  ]
};

export const FilterOptions = [
  {
    name: 'Review',
    id: 'review'
  },
  {
    name: 'Status',
    id: 'status'
  },
  {
    name: 'Progress',
    id: 'progress'
  },
  {
    name: 'Teams',
    id: 'teams'
  },
  {
    name: 'Owners',
    id: 'owners'
  },
  {
    name: 'Negotiation State',
    id: 'negotiation_state'
  },
  {
    name: 'Personal',
    id: 'personal'
  }
];

export const SidebarDropDowns = {
  NOTIFICATION: 'NOTIFICATION',
  USER_ACCOUNT: 'USER_ACCOUNT',
  TASK_BOARD: 'TASK_BOARD'
  // TODO : Add for HELP dropdown too
};

export const ViewDashboardCircularProgressColors = [
  '#eb5757',
  '#f9b312',
  '##95a3fb',
  '#1db510'
];
