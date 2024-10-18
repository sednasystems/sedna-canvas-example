type ActionIdentifier = string;

type SubmitAction = {
  action: 'submit';
};

type ResetAction = {
  action: 'reset';
};

type CustomAction = {
  action: 'custom';
};

type InsertContentAction = {
  action: 'insertContent';
} & (
  | {
      src: string;
    }
  | {
      content: string;
    }
);

type InsertAttachmentAction = {
  action: 'insertAttachment';
  src: string;
};

type OpenModalAction = {
  action: 'openModal';
  surfaceId: string;
};

type CloseModalAction = {
  action: 'closeModal';
};

type State = Record<string, undefined | null | string | number | boolean | string[]>;

type ReferenceData = Record<string, Record<string, unknown> | Record<string, unknown>[]>;

export type CanvasRequestBody = {
  appId: string;
  version: '2024-06-01';
  user: {
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    defaultTeamId: string;
    teams: {
      id: string;
      name: string;
      foreignKey: string | null;
      href: string;
    }[];
    emailAddress: string | null;
    ssoEmail: string | null;
    href: string;
  };
  company: {
    id: string;
    name: string;
    identifier: string;
  };
  context: {
    display:
      | 'GLOBAL'
      | 'MESSAGE_READ'
      | 'MESSAGE_COMPOSE'
      | 'PULSE_POSITION'
      | 'PULSE_CARGO'
      | 'PULSE_POSITION_FIXTURE_WORKSPACE'
      | 'PULSE_CARGO_FIXTURE_WORKSPACE'
      | 'CRM_PERSON'
      | 'CRM_DEPARTMENT'
      | 'CRM_COMPANY'
      | 'CRM_CONTACT_GROUP';
    entity:
      | {
          id: string;
          type: 'MESSAGE';
          subject: string | null;
          snippet: string | null;
          from: string | null;
          to: string[];
          cc: string[];
          bcc: string[];
          jobReferences: {
            id: string;
            name: string | null;
            foreignKey: string | null;
            type: string;
            attributes: {
              [k: string]: unknown;
            };
            source: string | null;
            href: string;
          }[];
          categories: {
            id: string;
            name: string;
            label: string | null;
            href: string;
          }[];
          teams: {
            id: string;
            name: string;
            foreignKey: string | null;
            href: string;
          }[];
          href: string;
        }
      | {
          id: string;
          type: 'PULSE_POSITION';
          vessel: {
            id: string;
            name: string;
            imo: string | null;
          };
          area: {
            id: string;
            name: string;
            type: string | null;
            geo: string | null;
          };
          openDate: {
            from: string;
            to: string;
          } | null;
          currentDwtInMt: number;
          customColumns: {
            [k: string]: {
              value: null | string | number | boolean;
              link?: string;
              popover?: string;
            };
          } | null;
          href: string;
        }
      | {
          id: string;
          type: 'PULSE_CARGO';
          loadAreas: {
            id: string;
            name: string;
            type: string | null;
            geo: string | null;
          }[];
          dischargeAreas: {
            id: string;
            name: string;
            type: string | null;
            geo: string | null;
          }[];
          loadDate: {
            from: string;
            to: string;
          } | null;
          size: {
            from?: number;
            to?: number;
          } | null;
          cargo: string | null;
          charterer: string | null;
          charterType: null | 'TIME' | 'VOYAGE' | 'UNKNOWN';
          customColumns: {
            [k: string]: {
              value: null | string | number | boolean;
              link?: string;
              popover?: string;
            };
          } | null;
          href: string;
        }
      | {
          id: string;
          type: 'PULSE_POSITION_FIXTURE_WORKSPACE';
          name: string;
          userIds: string[];
          cargoIds: string[];
          href: string;
        }
      | {
          id: string;
          type: 'PULSE_CARGO_FIXTURE_WORKSPACE';
          name: string;
          userIds: string[];
          positionIds: string[];
          href: string;
        }
      | {
          id: string;
          type?: 'CRM_PERSON';
          href: string;
        }
      | {
          id: string;
          type?: 'CRM_DEPARTMENT';
          href: string;
        }
      | {
          id: string;
          type?: 'CRM_COMPANY';
          href: string;
        }
      | {
          id: string;
          type?: 'CRM_CONTACT_GROUP';
          href: string;
        }
      | null;
  };
  state?: State;
  referenceData?: ReferenceData;
  action?: ActionIdentifier;
};

export type Panel = {
  type: 'panel';
  id: string;
  blocks: Block[];
};

export type Modal = {
  type: 'modal';
  id: string;
  defaultOpen?: boolean;
  wide?: boolean;
  blocks: Block[];
};

export type Dashboard = {
  type: 'dashboard';
  id: string;
  blocks: Block[];
};

export type Card = {
  type: 'card';
  id: string;
  blocks: Block[];
};

type Surface = Panel | Modal | Dashboard | Card;

type Header = {
  type: 'header';
  title?: string;
  elements?: BlockElement[];
};

type Footer = {
  type: 'footer';
  elements: BlockElement[];
};

type Tabs = {
  type: 'tabs';
  id: string;
  tabItems: {
    label: string;
    id: string;
    blocks: Block[];
  }[];
};

type Row = {
  type: 'row';
  justify?: 'left' | 'center' | 'right';
  elements: BlockElement[];
};

type Section = {
  type: 'section';
  collapsible?: boolean;
  title?: string;
  columns?: number;
  columnSpan?: number;
  justify?: 'left' | 'center' | 'right';
  elements: (SectionBlock | BlockElement)[];
};

type Divider = {
  type: 'divider';
};

type Iframe = {
  type: 'iframe';
  src: string;
};

type Block = Header | Footer | Row | Tabs | Section | Divider | Iframe;

type Option = {
  label: string;
  value: string;
};

type FilterButton = {
  type: 'filterButtons';
  label: string;
  id: string;
  options: Option[];
};

type FilterDropdown = {
  type: 'filterDropdown';
  label?: string;
  id: string;
  placeholder?: string;
  options: Option[];
};

type TextArea = {
  type: 'textArea';
  label?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
};

type TextInput = {
  type: 'textInput';
  label?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  maxLength?: number;
};

type NumericInput = {
  type: 'numericInput';
  label?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
};

type HiddenInput = {
  type: 'hiddenInput';
  id: string;
};

type Select = {
  type: 'select';
  label?: string;
  id: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
};

type MultiSelect = {
  type: 'multiSelect';
  label?: string;
  id: string;
  options: Option[];
  placeholder?: string;
  required?: boolean;
  minSelection?: number;
  maxSelection?: number;
};

type DatePicker = {
  type: 'datePicker';
  label?: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  minDate?: string;
  maxDate?: string;
};

type Checkbox = {
  type: 'checkbox';
  label: string;
  id: string;
};

type CheckboxGroup = {
  type: 'checkboxGroup';
  label: string;
  id: string;
  options: Option[];
};

type Table = {
  type: 'table';
  id: string;
  columnDefinitions: ColumnDefinition[];
  data: TableRowData[];
};

type TableInteraction =
  | CustomAction
  | InsertContentAction
  | InsertAttachmentAction
  | OpenModalAction
  | LinkNonAction;

export type TableAction =
  | {
      label?: string;
      options: (DropdownOption &
        TableInteraction & {
          /**
           * The key to access a boolean value in the row data that determines if the action is disabled
           */
          accessor?: string;
        })[];
    }
  | ({
      id: string;
      label: string;
      /**
       * The key to access a boolean value in the row data that determines if the action is disabled
       */
      accessor?: string;
    } & TableInteraction)
  | ({
      id: string;
      icon: Icon['name'];
      /**
       * The key to access a boolean value in the row data that determines if the action is disabled
       */
      accessor?: string;
    } & TableInteraction);

type ColumnDefinition =
  | {
      header?: string;
      /**
       * The key to access the value in the row data
       */
      accessor: string;
      type?: 'string' | 'number' | 'date' | 'boolean' | 'dateTime';
      align?: 'left' | 'center' | 'right';
      /**
       * The min width of the column in pixels
       */
      minWidth?: number;
      /**
       * The min width of the column in pixels
       */
      maxWidth?: number;
    }
  | {
      type: 'checkbox';
    }
  | {
      type: 'actions';
      minWidth?: number;
      actions: TableAction[];
    };

type TableRowData = {
  id: string;
  [key: string]: string | number | boolean | null;
};

type Text = {
  type: 'text';
  variant?: 'primary' | 'secondary' | 'disabled' | 'error';
  typeface?: 'header1' | 'header2' | 'header3' | 'paragraph' | 'caption' | 'label';
  content: string;
};

type Markdown = {
  type: 'markdown';
  content: string;
};

type File = {
  type: 'file';
  id: string;
  name: string;
  src: string;
  fileType:
    | 'pdf'
    | 'doc'
    | 'docx'
    | 'ppt'
    | 'pptx'
    | 'xls'
    | 'xlsx'
    | 'eml'
    | 'jpg'
    | 'jpeg'
    | 'png'
    | 'txt'
    | 'zip'
    | 'csv';
};

type Alert = {
  type: 'alert';
  message: string;
  variant: 'info' | 'warning' | 'error';
};

type Image = {
  type: 'image';
  src: string;
  description?: string;
};

type LinkNonAction = {
  action?: never;
  href: string;
};

type Interaction =
  | SubmitAction
  | ResetAction
  | CustomAction
  | InsertContentAction
  | InsertAttachmentAction
  | OpenModalAction
  | CloseModalAction
  | LinkNonAction;

type Button = {
  type: 'button';
  label: string;
  id: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  leftIcon?: Icon['name'];
} & Interaction;

type IconButton = {
  type: 'iconButton';
  icon: Icon['name'];
  id: string;
} & Interaction;

type Dropdown = {
  type: 'dropdown';
  label?: string;
  icon?: Icon['name'];
  options: (DropdownOption & Interaction)[];
};

type DropdownOption = {
  id: string;
  label: string;
};

type Icon = {
  type: 'icon';
  name:
    | 'addOutline'
    | 'archiveAll'
    | 'archive'
    | 'arrowDownward'
    | 'arrowLeft'
    | 'arrowRight'
    | 'arrowUpward'
    | 'alignCenter'
    | 'alignJustify'
    | 'alignLeft'
    | 'alignRight'
    | 'asset'
    | 'attachment'
    | 'background'
    | 'barChartHorizontal'
    | 'bold'
    | 'bookmarkAdd'
    | 'bookmark'
    | 'bookmarkStar'
    | 'broadcast'
    | 'bucket'
    | 'bulletedList'
    | 'calendar'
    | 'calendarEvent'
    | 'category'
    | 'check'
    | 'checkDouble'
    | 'chevronDown'
    | 'chevronLeft'
    | 'chevronRight'
    | 'chevronUp'
    | 'code'
    | 'codeView'
    | 'collapseList'
    | 'comment'
    | 'contacts'
    | 'copyFill'
    | 'copyLine'
    | 'clear'
    | 'data'
    | 'defaultFile'
    | 'delete'
    | 'desktop'
    | 'docImage'
    | 'download'
    | 'drafts'
    | 'dragDrop'
    | 'draggable'
    | 'duplicate'
    | 'edit'
    | 'excel'
    | 'expandList'
    | 'externalLink'
    | 'fileEmail'
    | 'filter'
    | 'follow'
    | 'fontFamily'
    | 'fontSize'
    | 'formatClear'
    | 'formatColor'
    | 'forward'
    | 'gift'
    | 'graduationCap'
    | 'guides'
    | 'headingOne'
    | 'headingTwo'
    | 'important'
    | 'inbox'
    | 'info'
    | 'insertHr'
    | 'insertLink'
    | 'insertSnippet'
    | 'insertTable'
    | 'id'
    | 'italic'
    | 'job'
    | 'link'
    | 'lock'
    | 'message'
    | 'moreHoriz'
    | 'moreVertical'
    | 'mailMute'
    | 'newFeatures'
    | 'notifications'
    | 'notificationStrikethrough'
    | 'numberedList'
    | 'openLink'
    | 'outbox'
    | 'pin'
    | 'pdf'
    | 'people'
    | 'person'
    | 'phone'
    | 'powerpoint'
    | 'printOutline'
    | 'read'
    | 'refresh'
    | 'reply'
    | 'replyAll'
    | 'save'
    | 'search'
    | 'seen'
    | 'send'
    | 'settings'
    | 'share'
    | 'ship'
    | 'sortAsc'
    | 'sort'
    | 'starFilled'
    | 'starOutline'
    | 'strikethrough'
    | 'subtract'
    | 'table'
    | 'tablet'
    | 'tag'
    | 'text'
    | 'time'
    | 'tenant'
    | 'unarchive'
    | 'underline'
    | 'unfollow'
    | 'unimportant'
    | 'unlock'
    | 'upload'
    | 'unpin'
    | 'verified'
    | 'warning'
    | 'word'
    | 'workflows'
    | 'zip';
};

type BlockElement =
  | FilterButton
  | FilterDropdown
  | TextArea
  | TextInput
  | NumericInput
  | Select
  | MultiSelect
  | DatePicker
  | Checkbox
  | CheckboxGroup
  | HiddenInput
  | Table
  | Text
  | Markdown
  | File
  | Alert
  | Image
  | Button
  | IconButton
  | Dropdown
  | Icon;

type SectionBlock = Section | Divider | Row;

type MessageMutationEntity = {
  type: 'MESSAGE';
  id: string;
  subject?: string | null;
  to?: string[];
  cc?: string[];
  bcc?: string[];
};

type Notification = {
  id: string;
  message: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  button?: {
    id: string;
    label: string;
  } & (LinkNonAction | CustomAction);
};

type ValidationErrors = Record<string, string | undefined>;

export type CanvasResponseBody = {
  surfaces: Surface[];
  state?: State;
  referenceData?: ReferenceData;
  notifications?: Notification[];
  validationErrors?: ValidationErrors;
  stale?: {
    type:
      | 'MESSAGE'
      | 'PULSE_POSITION'
      | 'PULSE_CARGO'
      | 'PULSE_POSITION_FIXTURE_WORKSPACE'
      | 'PULSE_CARGO_FIXTURE_WORKSPACE'
      | 'CRM_PERSON'
      | 'CRM_DEPARTMENT'
      | 'CRM_COMPANY'
      | 'CRM_CONTACT_GROUP';
    id: string;
  }[];
  mutation?: {
    entity: MessageMutationEntity;
  };
};
