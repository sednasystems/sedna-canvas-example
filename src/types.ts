export type SurfaceName = 'panel' | 'dashboard' | 'modal' | 'card';

export type DataGridState = {
  sorting?: { id: string; desc?: boolean }[];
  selectedRows?: string[];
  page?: number;
  pageSize?: number;
  filters?: Record<string, string>;
};

export type State = Record<
  string,
  undefined | null | string | number | boolean | string[] | DataGridState
>;

export type ControlsErrors = Record<string, string | undefined>;

type DataGridData = {
  total?: number;
  data: Record<string, unknown>[];
};

type OptionsData = {
  options: Option[];
};

export type ReferenceData = Record<string, DataGridData | OptionsData>;

export type ActionType =
  | 'submit'
  | 'reset'
  | 'custom'
  | 'insertContent'
  | 'insertAttachment'
  | 'openModal'
  | 'closeModal'
  | 'filter';

export type Surface = Panel | Modal | Dashboard | Card;

export type Panel = {
  type: 'panel';
  id: string;
  blocks: (Header | Section | Footer | Divider | Tabs | Iframe)[];
};

export type Modal = {
  type: 'modal';
  id: string;
  defaultOpen?: boolean;
  wide?: boolean;
  blocks: (Header | Section | Footer | Divider | Tabs | Iframe)[];
};

export type Dashboard = {
  type: 'dashboard';
  id: string;
  blocks: (Header | Section | Footer | Divider | Tabs | Iframe)[];
};

export type Card = {
  type: 'card';
  id: string;
  blocks: (Header | Section | Footer | Divider | Tabs | Iframe)[];
};

export type Block = Header | Row | Section | Footer | Divider | Tabs | Iframe;

export type Header = {
  type: 'header';
  title?: string;
  elements?: (FilterDropdown | FilterButtons)[];
};

export type Footer = {
  type: 'footer';
  elements?: (Text | Button)[];
};

export type Row = {
  type: 'row';
  columnSpan?: ColumnCount;
  justify?: 'left' | 'center' | 'right' | 'between';
  elements: BlockElement[];
};

export type ColumnCount = 1 | 2 | 3 | 4 | 5 | 6;

export type Section = {
  type: 'section';
  id?: string;
  columns?: ColumnCount;
  columnSpan?: ColumnCount;
  justify?: 'left' | 'center' | 'right';
  elements: (BlockElement | SectionBlock)[];
} & (
  | {
      collapsible: boolean;
      title: string;
    }
  | {
      collapsible?: never;
      title?: string;
    }
);

export type Tabs = {
  type: 'tabs';
  id: string;
  tabItems: {
    label: string;
    id: string;
    blocks: (Row | Section | Divider | Iframe)[];
  }[];
};

export type Divider = {
  type: 'divider';
  variant?: 'primary' | 'secondary';
};

export type Iframe = {
  type: 'iframe';
  src: string;
  height?: number;
};

export type BlockElement =
  | FilterDropdown
  | FilterButtons
  | Button
  | IconButton
  | Dropdown
  | TextInput
  | TextArea
  | NumericInput
  | Select
  | MultiSelect
  | DatePicker
  | Checkbox
  | CheckboxGroup
  | HiddenInput
  | Text
  | Markdown
  | Table
  | DataGrid
  | File
  | Alert
  | Image
  | Tag;

export type FormFieldElement =
  | FilterDropdown
  | FilterButtons
  | TextInput
  | TextArea
  | NumericInput
  | Select
  | MultiSelect
  | DatePicker
  | Checkbox
  | CheckboxGroup
  | HiddenInput
  | Table
  | DataGrid;

export type SectionBlock = Section | Divider | Row;

export type Option = { label: string; value: string };

export type Text = {
  type: 'text';
  variant?: 'primary' | 'secondary' | 'disabled' | 'error';
  typeface?: 'header1' | 'header2' | 'header3' | 'paragraph' | 'label' | 'caption';
  content: string;
};

export type Markdown = {
  type: 'markdown';
  content: string;
};

type ButtonActionProperties =
  | {
      action: 'reset' | 'closeModal';
    }
  | {
      action: 'submit' | 'custom';
      id: string;
    }
  | ({
      action: 'insertContent';
    } & (
      | {
          src: string;
          content?: never;
        }
      | {
          src?: never;
          content: string;
        }
    ))
  | {
      action: 'insertAttachment';
      src: string;
    }
  | {
      action: 'openModal';
      surfaceId: string;
    }
  | {
      action?: never;
      href: string;
    };

export type Button = {
  type: 'button';
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  leftIcon?: IconName;
} & ButtonActionProperties;

export type IconButton = {
  type: 'iconButton';
  icon: IconName;
} & ButtonActionProperties;

export type Dropdown = {
  type: 'dropdown';
  label?: string;
  icon?: IconName;
  placement?: 'start' | 'end';
  options: DropdownOption[];
};

export type DropdownOption = {
  label: string;
} & ButtonActionProperties;

export type FilterButtons = {
  type: 'filterButtons';
  label?: string;
  id: string;
  options: Option[];
};

type LabelAndOrPlaceholder =
  | {
      label: string;
      placeholder?: string;
    }
  | {
      label?: string;
      placeholder: string;
    };

export type FilterDropdown = {
  type: 'filterDropdown';
  id: string;
  options: Option[];
} & LabelAndOrPlaceholder;

export type TextInput = {
  type: 'textInput';
  id: string;
  required?: boolean;
  maxLength?: number;
} & LabelAndOrPlaceholder;

export type TextArea = {
  type: 'textArea';
  id: string;
  required?: boolean;
  maxLength?: number;
  rows?: number;
  resizeable?: boolean;
} & LabelAndOrPlaceholder;

export type NumericInput = {
  type: 'numericInput';
  id: string;
  required?: boolean;
  min?: number;
  max?: number;
} & LabelAndOrPlaceholder;

export type HiddenInput = {
  type: 'hiddenInput';
  id: string;
};

export type Select = {
  type: 'select';
  id: string;
  required?: boolean;
  options: Option[];
} & LabelAndOrPlaceholder;

export type MultiSelect = {
  type: 'multiSelect';
  id: string;
  options: Option[];
  minSelection?: number;
  maxSelection?: number;
} & LabelAndOrPlaceholder;

export type DatePicker = {
  type: 'datePicker';
  id: string;
  required?: boolean;
  minDate?: string;
  maxDate?: string;
} & LabelAndOrPlaceholder;

export type Checkbox = {
  type: 'checkbox';
  label: string;
  id: string;
};

export type CheckboxGroup = {
  type: 'checkboxGroup';
  label: string;
  id: string;
  options: Option[];
};

type TableColumnProperties = {
  header?: string;
  accessor: string;
  align?: 'left' | 'center' | 'right';
  minWidth?: number;
  maxWidth?: number;
};

type DataGridColumnProperties = TableColumnProperties & {
  sortable?: boolean;
  sortDescFirst?: boolean;
  filterable?: boolean;
};

export type DataGrid = {
  type: 'dataGrid';
  id: string;
  columnDefinitions: (
    | (DataGridColumnProperties & {
        type?: 'string' | 'number' | 'date' | 'boolean' | 'dateTime';
      })
    | (DataGridColumnProperties & {
        type: 'tag';
        variant?: Tag['variant'];
      })
    | {
        type: 'checkbox';
        pinned?: boolean;
        header?: never;
        accessor?: never;
        align?: never;
        minWidth?: never;
        maxWidth?: never;
      }
    | {
        type: 'actions';
        minWidth?: number;
        actions: DataGridRowAction[];
        pinned?: boolean;
        header?: never;
        accessor?: never;
        align?: never;
        maxWidth?: never;
      }
  )[];
  data: (Record<string, unknown> & {
    id: string;
  })[];
};

export type Table = {
  type: 'table';
  id: string;
  columnDefinitions: (
    | (TableColumnProperties & {
        type?: 'string' | 'number' | 'date' | 'boolean' | 'dateTime';
      })
    | {
        type: 'checkbox';
        pinned?: boolean;
        header?: never;
        accessor?: never;
        align?: never;
        minWidth?: never;
        maxWidth?: never;
      }
    | {
        type: 'actions';
        pinned?: boolean;
        minWidth?: number;
        actions: DataGridRowAction[];
        header?: never;
        accessor?: never;
        align?: never;
        maxWidth?: never;
      }
    | (TableColumnProperties & {
        type: 'tag';
        variant?: Tag['variant'];
      })
  )[];
  data: (Record<string, unknown> & {
    id: string;
  })[];
};

export type DataGridRowAction = {
  accessor?: string;
} & (
  | {
      label?: string;
      action?: never;
      href?: never;
      options: (DropdownOption & {
        accessor?: string;
      })[];
    }
  | ({
      label: string;
      icon?: never;
      options?: never;
    } & ButtonActionProperties)
  | ({
      icon: IconName;
      label?: never;
      options?: never;
    } & ButtonActionProperties)
);

export type File = {
  type: 'file';
  id: string;
  name: string;
  src: string;
  fileType: string;
};

export type Alert = {
  type: 'alert';
  message: string;
  variant?: 'info' | 'warning' | 'error';
};

export type Image = {
  type: 'image';
  src: string;
  description?: string;
};

export type Tag = {
  type: 'tag';
  label: string;
  variant?: 'default' | 'job' | 'category' | 'person' | 'team' | 'asset' | 'private';
  href?: string;
};

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
  action?: string;
};

type MessageMutationEntity = {
  type: 'MESSAGE';
  id: string;
  subject?: string | null;
  to?: string[];
  cc?: string[];
  bcc?: string[];
  body?: string | null;
};

type Notification = {
  id: string;
  message: string;
  level: 'INFO' | 'WARNING' | 'ERROR';
  button?:
    | {
        id: string;
        label: string;
        action: 'custom';
      }
    | {
        label: string;
        href: string;
      };
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

type IconName =
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
