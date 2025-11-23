import { Supported } from "./generalTypes";

export type AiPrompts = {
  date_created?: string | null;
  date_updated?: string | null;
  description?: string | null;
  id: string;
  messages?: unknown | null;
  meta_header_ai_prompts: string;
  name?: string | null;
  sort?: number | null;
  status: string;
  system_prompt?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Languages = {
  code: string;
  direction?: string | null;
  name?: string | null;
};

export type BlockButtonTranslations = {
  block_button_id?: BlockButton | null;
  id: number;
  label?: string | null;
  languages_code?: string | Languages | null;
};

export type BlockMainBanner = {
  background_image?: string | DirectusFiles | null;
  "header-qnr8cf": string;
  id: string;
  image_alt?: string | null;
  main_title?: string | null;
  sort?: number | null;
  translations: BlockMainBannerTranslations[];
};

export type BlockGalleryShowcase = {
  "header-8mre2l": string;
  id: string;
  images: GalleryImageItem[];
  pretitle?: string | null;
  sort?: number | null;
  title_line_one?: string | null;
  title_line_two?: string | null;
  translations: BlockGalleryShowcaseTranslations[];
};

export type GalleryImageItem = {
  alt_text?: string | null;
  id: string;
  image_file?: string | DirectusFiles | null;
  image_id?: string | BlockGalleryShowcase | null;
  sort?: number | null;
  translations: GalleryImageItemTranslations[];
};

export type BlockExtendedContact = {
  background_image?: string | DirectusFiles | null;
  background_image_alt?: string | null;
  "header-kkhx7y": string;
  headline_highlight_word?: string | null;
  headline_highlight_word_2?: string | null;
  headline_line_1?: string | null;
  headline_line_2?: string | null;
  id: string;
  main_link?: string | BlockButton | null;
  sort?: number | null;
  translations: BlockExtendedContactTranslations[];
};

export type BlockExtendedContactTranslations = {
  background_image_alt?: string | null;
  block_extended_contact_id?: string | BlockExtendedContact | null;
  headline_highlight_word?: string | null;
  headline_highlight_word_2?: string | null;
  headline_line_1?: string | null;
  headline_line_2?: string | null;
  id: number;
  languages_code?: string | Languages | null;
};

export type GalleryImageItemTranslations = {
  alt_text?: string | null;
  gallery_image_item_id?: string | GalleryImageItem | null;
  id: number;
  languages_code?: string | Languages | null;
};

export type BlockGalleryShowcaseTranslations = {
  block_gallery_showcase_id?: string | BlockGalleryShowcase | null;
  id: number;
  languages_code?: string | Languages | null;
  pretitle?: string | null;
  title_line_one?: string | null;
  title_line_two?: string | null;
};

export type BlockMainBannerTranslations = {
  block_main_banner_id?: string | BlockMainBanner | null;
  id: number;
  image_src?: string | null;
  languages_code?: string | Languages | null;
  main_title?: string | null;
};

export type BlockButton = {
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  label?: string | null;
  page?: Pages | null;
  post?: Posts | null;
  sort?: number | null;
  type?: string | null;
  url?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
  variant?: string | null;
  translations: BlockButtonTranslations[];
};

export type BlockButtonGroup = {
  buttons: string[];
  contact_buttons?: BlockButton[];
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  sort?: number | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type FeatureCard = {
  card_type?: string | null;
  featured_id?: BlockFeatures | null;
  id: string;
  main_icon?: DirectusFiles | null;
  main_text?: string | null;
  main_title?: string | null;
  sort?: number | null;
  translations: FeatureCardTranslations[];
};

export type FeatureCardTranslations = {
  feature_card_id?: FeatureCard | null;
  id: number;
  languages_code?: string | Languages | null;
  main_text?: string | null;
  main_title?: string | null;
};

export type BlockFeatures = {
  feature_image?: DirectusFiles | null;
  featured_card_id: FeatureCard[] | string[];
  id: string;
  sort?: number | null;
  featured_image_src?: string | null;
  translations: BlockFeaturesTranslations[];
};

export type BlockFeaturesTranslations = {
  block_features_id?: BlockFeatures | null;
  featured_image_src?: string | null;
  id: number;
  languages_code?: string | Languages | null;
};

export type BlockHeroStoryTranslations = {
  block_hero_story_id?: string | BlockHeroStory | null;
  description?: string | null;
  id: number;
  image_alt?: string | null;
  languages_code?: string | Languages | null;
  title_line_1?: string | null;
  title_line_2?: string | null;
  title_line_3?: string | null;
};

export type BlockHeroStory = {
  description?: string | null;
  featured_image?: string | DirectusFiles | null;
  featured_video_mp4?: string | DirectusFiles | null;
  featured_video_webm?: string | DirectusFiles | null;
  "header-l6jprl": string;
  id: string;
  image_alt?: string | null;
  sort?: number | null;
  title_line_1?: string | null;
  title_line_2?: string | null;
  title_line_3?: string | null;
  translations: BlockHeroStoryTranslations[];
};

export type BlockForm = {
  date_created?: string | null;
  date_updated?: string | null;
  form?: string | Forms | null;
  headline?: string | null;
  id: string;
  meta_header_block_form: string;
  tagline?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type BlockGallery = {
  date_created?: string | null;
  date_updated?: string | null;
  headline?: string | null;
  id: string;
  items: BlockGalleryItems[];
  meta_header_block_gallery: string;
  tagline?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type BlockGalleryItems = {
  block_gallery?: string | BlockGallery | null;
  date_created?: string | null;
  date_updated?: string | null;
  directus_file?: string | DirectusFiles | null;
  id: string;
  sort?: number | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type BlockStepsTranslations = {
  block_steps_id?: number | BlockSteps | null;
  id: number;
  languages_code?: string | Languages | null;
  section_title?: string | null;
  tag_text?: string | null;
};

export type BlockStepCardTranslations = {
  block_step_card_id?: number | BlockStepCard | null;
  card_text?: string | null;
  card_title?: string | null;
  id: number;
  languages_code?: string | Languages | null;
};

export type BlockSteps = {
  "header-tktaek": string;
  id: number;
  section_title?: string | null;
  sort?: number | null;
  steps: BlockStepCard[] | string[];
  tag_text?: string | null;
  translations: BlockStepsTranslations[];
};

export type BlockContact = {
  background_image?: string | DirectusFiles | null;
  background_image_mobile?: string | DirectusFiles | null;
  button_group: string;
  description?: string | null;
  "header-vhcm3p": string;
  id: string;
  image_group: string;
  image_src?: string | null;
  main_title?: string | null;
  translations: BlockContactTranslations[];
};

export type BlockContactTranslations = {
  block_contact_id?: string | BlockContact | null;
  description?: string | null;
  id: number;
  image_src?: string | null;
  languages_code?: string | Languages | null;
  main_title?: string | null;
};

export type BlockStepCard = {
  card_text?: string | null;
  card_title?: string | null;
  id: number;
  sort?: number | null;
  step_card?: number | BlockSteps | null;
  translations: BlockStepCardTranslations[];
};

export type BlockHeroTranslations = {
  block_hero_id?: BlockHero | null;
  description?: string | null;
  id: number;
  languages_code?: string | Languages | null;
  headline: string | null;
  tagline: string | null;
};

export type BlockHero = {
  button_group?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  description?: string | null;
  headline?: string | null;
  id: string;
  translations: BlockHeroTranslations[];
  image?: string | DirectusFiles | null;
  meta_header_block_hero: string;
  tagline?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
  video_background?: DirectusFiles | null;
  video_background_webp?: DirectusFiles | null;
};

export type BlockPosts = {
  collection?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  headline?: string | null;
  id: string;
  limit?: number | null;
  meta_header_block_posts: string;
  tagline?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type BlockPricing = {
  date_created?: string | null;
  date_updated?: string | null;
  headline?: string | null;
  id: string;
  meta_header_block_pricing: string;
  pricing_cards: BlockPricingCards[];
  tagline?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type BlockPricingCards = {
  badge?: string | null;
  button?: string | BlockButton | null;
  date_created?: string | null;
  date_updated?: string | null;
  description?: string | null;
  features?: unknown | null;
  id: string;
  is_highlighted?: boolean | null;
  price?: string | null;
  pricing?: string | BlockPricing | null;
  sort?: number | null;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type BlockRichtext = {
  alignment?: string | null;
  content?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  headline?: string | null;
  id: string;
  meta_header_block_richtext: string;
  tagline?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type DirectusAccess = {
  id: string;
  policy: string | DirectusPolicies;
  role?: string | DirectusRoles | null;
  sort?: number | null;
  user?: string | DirectusUsers | null;
};

export type DirectusActivity = {
  action: string;
  collection: string;
  id: number;
  ip?: string | null;
  item: string;
  origin?: string | null;
  revisions: DirectusRevisions[];
  timestamp: string;
  user?: string | DirectusUsers | null;
  user_agent?: string | null;
};

export type DirectusCollections = {
  accountability?: string | null;
  archive_app_filter: boolean;
  archive_field?: string | null;
  archive_value?: string | null;
  collapse: string;
  collection: string;
  color?: string | null;
  display_template?: string | null;
  group?: string | DirectusCollections | null;
  hidden: boolean;
  icon?: string | null;
  item_duplication_fields?: unknown | null;
  note?: string | null;
  preview_url?: string | null;
  singleton: boolean;
  sort?: number | null;
  sort_field?: string | null;
  translations?: unknown | null;
  unarchive_value?: string | null;
  versioning: boolean;
};

export type DirectusComments = {
  collection: string | DirectusCollections;
  comment: string;
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  item: string;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type DirectusDashboards = {
  color?: string | null;
  date_created?: string | null;
  icon: string;
  id: string;
  name: string;
  note?: string | null;
  panels: DirectusPanels[];
  user_created?: string | DirectusUsers | null;
};

export type DirectusExtensions = {
  bundle?: string | null;
  enabled: boolean;
  folder: string;
  id: string;
  source: string;
};

export type DirectusFields = {
  collection: string | DirectusCollections;
  conditions?: unknown | null;
  display?: string | null;
  display_options?: unknown | null;
  field: string;
  group?: string | DirectusFields | null;
  hidden: boolean;
  id: number;
  interface?: string | null;
  note?: string | null;
  options?: unknown | null;
  readonly: boolean;
  required?: boolean | null;
  sort?: number | null;
  special?: unknown | null;
  translations?: unknown | null;
  validation?: unknown | null;
  validation_message?: string | null;
  width?: string | null;
};

export type DirectusFiles = {
  charset?: string | null;
  created_on: string;
  description?: string | null;
  duration?: number | null;
  embed?: string | null;
  filename_disk?: string | null;
  filename_download: string;
  filesize?: number | null;
  focal_point_x?: number | null;
  focal_point_y?: number | null;
  folder?: string | DirectusFolders | null;
  height?: number | null;
  id: string;
  location?: string | null;
  metadata?: unknown | null;
  modified_by?: string | DirectusUsers | null;
  modified_on: string;
  storage: string;
  tags?: unknown | null;
  title?: string | null;
  tus_data?: unknown | null;
  tus_id?: string | null;
  type?: string | null;
  uploaded_by?: string | DirectusUsers | null;
  uploaded_on?: string | null;
  width?: number | null;
};

export type DirectusFlows = {
  accountability?: string | null;
  color?: string | null;
  date_created?: string | null;
  description?: string | null;
  icon?: string | null;
  id: string;
  name: string;
  operation?: string | DirectusOperations | null;
  operations: DirectusOperations[];
  options?: unknown | null;
  status: string;
  trigger?: string | null;
  user_created?: string | DirectusUsers | null;
};

export type DirectusFolders = {
  id: string;
  name: string;
  parent?: string | DirectusFolders | null;
};

export type DirectusMigrations = {
  name: string;
  timestamp?: string | null;
  version: string;
};

export type DirectusNotifications = {
  collection?: string | null;
  id: number;
  item?: string | null;
  message?: string | null;
  recipient: string | DirectusUsers;
  sender?: string | DirectusUsers | null;
  status?: string | null;
  subject: string;
  timestamp?: string | null;
};

export type DirectusOperations = {
  date_created?: string | null;
  flow: string | DirectusFlows;
  id: string;
  key: string;
  name?: string | null;
  options?: unknown | null;
  position_x: number;
  position_y: number;
  reject?: string | DirectusOperations | null;
  resolve?: string | DirectusOperations | null;
  type: string;
  user_created?: string | DirectusUsers | null;
};

export type DirectusPanels = {
  color?: string | null;
  dashboard: string | DirectusDashboards;
  date_created?: string | null;
  height: number;
  icon?: string | null;
  id: string;
  name?: string | null;
  note?: string | null;
  options?: unknown | null;
  position_x: number;
  position_y: number;
  show_header: boolean;
  type: string;
  user_created?: string | DirectusUsers | null;
  width: number;
};

export type DirectusPermissions = {
  action: string;
  collection: string;
  fields?: unknown | null;
  id: number;
  permissions?: unknown | null;
  policy: string | DirectusPolicies;
  presets?: unknown | null;
  validation?: unknown | null;
};

export type DirectusPolicies = {
  admin_access: boolean;
  app_access: boolean;
  description?: string | null;
  enforce_tfa: boolean;
  icon: string;
  id: string;
  ip_access?: unknown | null;
  name: string;
  permissions: DirectusPermissions[];
  roles: DirectusAccess[];
  users: DirectusAccess[];
};

export type DirectusPresets = {
  bookmark?: string | null;
  collection?: string | null;
  color?: string | null;
  filter?: unknown | null;
  icon?: string | null;
  id: number;
  layout?: string | null;
  layout_options?: unknown | null;
  layout_query?: unknown | null;
  refresh_interval?: number | null;
  role?: string | DirectusRoles | null;
  search?: string | null;
  user?: string | DirectusUsers | null;
};

export type DirectusRelations = {
  id: number;
  junction_field?: string | null;
  many_collection: string;
  many_field: string;
  one_allowed_collections?: unknown | null;
  one_collection?: string | null;
  one_collection_field?: string | null;
  one_deselect_action: string;
  one_field?: string | null;
  sort_field?: string | null;
};

export type DirectusRevisions = {
  activity: number | DirectusActivity;
  collection: string;
  data?: unknown | null;
  delta?: unknown | null;
  id: number;
  item: string;
  parent?: number | DirectusRevisions | null;
  version?: string | DirectusVersions | null;
};

export type DirectusRoles = {
  children: DirectusRoles[];
  description?: string | null;
  icon: string;
  id: string;
  name: string;
  parent?: string | DirectusRoles | null;
  policies: DirectusAccess[];
  users: DirectusUsers[];
  users_group: string;
};

export type DirectusSessions = {
  expires: string;
  ip?: string | null;
  next_token?: string | null;
  origin?: string | null;
  share?: string | DirectusShares | null;
  token: string;
  user?: string | DirectusUsers | null;
  user_agent?: string | null;
};

export type DirectusSettings = {
  accepted_terms?: boolean | null;
  ai_group: string;
  auth_login_attempts?: number | null;
  auth_password_policy?: string | null;
  basemaps?: unknown | null;
  command_palette_settings?: unknown | null;
  custom_aspect_ratios?: unknown | null;
  custom_css?: string | null;
  default_appearance: string;
  default_language: string;
  default_theme_dark?: string | null;
  default_theme_light?: string | null;
  id: number;
  mapbox_key?: string | null;
  mcp_allow_deletes: boolean;
  mcp_enabled: boolean;
  mcp_prompts_collection?: string | null;
  mcp_prompts_collection_validation: string;
  mcp_system_prompt?: string | null;
  mcp_system_prompt_enabled: boolean;
  module_bar?: unknown | null;
  project_color: string;
  project_descriptor?: string | null;
  project_id?: string | null;
  project_logo?: string | DirectusFiles | null;
  project_name: string;
  project_url?: string | null;
  public_background?: string | DirectusFiles | null;
  public_favicon?: string | DirectusFiles | null;
  public_foreground?: string | DirectusFiles | null;
  public_note?: string | null;
  public_registration: boolean;
  public_registration_email_filter?: unknown | null;
  public_registration_role?: string | DirectusRoles | null;
  public_registration_verify_email: boolean;
  report_bug_url?: string | null;
  report_error_url?: string | null;
  report_feature_url?: string | null;
  storage_asset_presets?: unknown | null;
  storage_asset_transform?: string | null;
  storage_default_folder?: string | DirectusFolders | null;
  theme_dark_overrides?: unknown | null;
  theme_light_overrides?: unknown | null;
  theming_group: string;
  visual_editor_urls?: unknown | null;
};

export type DirectusShares = {
  collection: string | DirectusCollections;
  date_created?: string | null;
  date_end?: string | null;
  date_start?: string | null;
  id: string;
  item: string;
  max_uses?: number | null;
  name?: string | null;
  password?: string | null;
  role?: string | DirectusRoles | null;
  times_used?: number | null;
  user_created?: string | DirectusUsers | null;
};

export type DirectusTranslations = {
  id: string;
  key: string;
  language: string;
  value: string;
};

export type DirectusUsers = {
  appearance?: string | null;
  auth_data?: unknown | null;
  avatar?: string | DirectusFiles | null;
  description?: string | null;
  email?: string | null;
  email_notifications?: boolean | null;
  external_identifier?: string | null;
  first_name?: string | null;
  id: string;
  language?: string | null;
  last_access?: string | null;
  last_name?: string | null;
  last_page?: string | null;
  location?: string | null;
  password?: string | null;
  policies: DirectusAccess[];
  posts: Posts[];
  provider: string;
  role?: string | DirectusRoles | null;
  status: string;
  tags?: unknown | null;
  text_direction: string;
  tfa_secret?: string | null;
  theme_dark?: string | null;
  theme_dark_overrides?: unknown | null;
  theme_light?: string | null;
  theme_light_overrides?: unknown | null;
  title?: string | null;
  token?: string | null;
};

export type DirectusVersions = {
  collection: string | DirectusCollections;
  date_created?: string | null;
  date_updated?: string | null;
  delta?: unknown | null;
  hash?: string | null;
  id: string;
  item: string;
  key: string;
  name?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type DirectusWebhooks = {
  actions: unknown;
  collections: unknown;
  data: boolean;
  headers?: unknown | null;
  id: number;
  method: string;
  migrated_flow?: string | DirectusFlows | null;
  name: string;
  status: string;
  url: string;
  was_active_before_deprecation: boolean;
};

export type FormFields = {
  choices?: unknown | null;
  date_created?: string | null;
  date_updated?: string | null;
  form?: string | Forms | null;
  help?: string | null;
  id: string;
  label?: string | null;
  name?: string | null;
  placeholder?: string | null;
  required?: boolean | null;
  sort?: number | null;
  type?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
  validation?: string | null;
  width?: string | null;
};

export type FormSubmissionValues = {
  field?: string | FormFields | null;
  file?: string | DirectusFiles | null;
  form_submission?: string | FormSubmissions | null;
  id: string;
  sort?: number | null;
  timestamp?: string | null;
  value?: string | null;
};

export type FormSubmissions = {
  form?: string | Forms | null;
  id: string;
  meta_header_form_submissions: string;
  timestamp?: string | null;
  values: FormSubmissionValues[];
};

export type Forms = {
  date_created?: string | null;
  date_updated?: string | null;
  emails?: unknown | null;
  fields: FormFields[];
  id: string;
  is_active?: boolean | null;
  meta_emails: string;
  meta_fields: string;
  meta_header_forms: string;
  meta_submissions: string;
  meta_tabs: string;
  on_success?: string | null;
  sort?: number | null;
  submissions: FormSubmissions[];
  submit_label?: string | null;
  success_message?: string | null;
  success_redirect_url?: string | null;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Globals = {
  accent_color?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  description?: string | null;
  directus_url?: string | null;
  favicon?: string | DirectusFiles | null;
  available_languages?: Supported[] | null;
  id: string;
  logo?: string | DirectusFiles | null;
  logo_dark_mode?: string | DirectusFiles | null;
  meta_credentials: string;
  meta_header_globals: string;
  openai_api_key?: string | null;
  social_links?: unknown | null;
  tagline?: string | null;
  title?: string | null;
  url?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Navigation = {
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  is_active?: boolean | null;
  items: NavigationItems[];
  meta_header_navigation: string;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type NavigationItems = {
  children: NavigationItems[];
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  navigation?: string | Navigation | null;
  page?: string | Pages | null;
  parent?: string | NavigationItems | null;
  post?: string | Posts | null;
  sort?: number | null;
  title?: string | null;
  type?: string | null;
  url?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
  translations: NavigationItemsTranslations[];
};

export type NavigationItemsTranslations = {
  id: number;
  languages_code?: string | Languages | null;
  navigation_items_id?: string | NavigationItems | null;
  title?: string | null;
};

export type PagesTranslations = {
  id: number;
  languages_code?: string | Languages | null;
  pages_id?: string | Pages | null;
  permalink?: string | null;
};

export type PageBlocks = {
  background?: string | null;
  collection?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  hide_block?: boolean | null;
  id: string;
  item?:
    | BlockHero
    | null
    | BlockFeatures
    | BlockSteps
    | BlockContact
    | BlockMainBanner
    | BlockHeroStory
    | BlockGalleryShowcase
    | BlockExtendedContact;
  page?: string | Pages | null;
  sort?: number | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Pages = {
  blocks: PageBlocks[];
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  meta_content: string;
  meta_header_pages: string;
  meta_m2a_button: string;
  meta_seo: string;
  meta_tabs: string;
  permalink?: string | null;
  published_at?: string | null;
  seo?: unknown | null;
  sort?: number | null;
  status: string;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
  translations: PagesTranslations[];
};

export type Posts = {
  author?: string | DirectusUsers | null;
  content?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  description?: string | null;
  id: string;
  image?: string | DirectusFiles | null;
  meta_content: string;
  meta_header_content: string;
  meta_header_image: string;
  meta_header_posts: string;
  meta_seo: string;
  meta_tabs: string;
  published_at?: string | null;
  seo?: unknown | null;
  slug?: string | null;
  sort?: number | null;
  status: string;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Redirects = {
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  meta_header_redirects: string;
  note?: string | null;
  response_code?: string | null;
  url_from?: string | null;
  url_to?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type CustomDirectusTypes = {
  ai_prompts: AiPrompts[];
  block_button: BlockButton[];
  block_button_group: BlockButtonGroup[];
  block_form: BlockForm[];
  block_gallery: BlockGallery[];
  block_gallery_items: BlockGalleryItems[];
  block_hero: BlockHero[];
  block_hero_translations: BlockHeroTranslations[];
  block_features: BlockFeatures[];
  block_features_translations: BlockFeaturesTranslations[];
  block_posts: BlockPosts[];
  block_pricing: BlockPricing[];
  block_pricing_cards: BlockPricingCards[];
  block_richtext: BlockRichtext[];
  directus_access: DirectusAccess[];
  directus_activity: DirectusActivity[];
  directus_collections: DirectusCollections[];
  directus_comments: DirectusComments[];
  directus_dashboards: DirectusDashboards[];
  directus_extensions: DirectusExtensions[];
  directus_fields: DirectusFields[];
  directus_files: DirectusFiles[];
  directus_flows: DirectusFlows[];
  directus_folders: DirectusFolders[];
  directus_migrations: DirectusMigrations[];
  directus_notifications: DirectusNotifications[];
  directus_operations: DirectusOperations[];
  directus_panels: DirectusPanels[];
  directus_permissions: DirectusPermissions[];
  directus_policies: DirectusPolicies[];
  directus_presets: DirectusPresets[];
  directus_relations: DirectusRelations[];
  directus_revisions: DirectusRevisions[];
  directus_roles: DirectusRoles[];
  directus_sessions: DirectusSessions[];
  directus_settings: DirectusSettings;
  directus_shares: DirectusShares[];
  directus_translations: DirectusTranslations[];
  directus_users: DirectusUsers[];
  directus_versions: DirectusVersions[];
  directus_webhooks: DirectusWebhooks[];
  form_fields: FormFields[];
  form_submission_values: FormSubmissionValues[];
  form_submissions: FormSubmissions[];
  forms: Forms[];
  globals: Globals;
  navigation: Navigation[];
  navigation_items: NavigationItems[];
  page_blocks: PageBlocks[];
  pages: Pages[];
  pages_translations: PagesTranslations[];
  posts: Posts[];
  redirects: Redirects[];
  languages: Languages[];
  block_button_translations: BlockButtonTranslations[];
  feature_card: FeatureCard[];
  feature_card_translations: FeatureCardTranslations[];
  block_steps: BlockSteps[];
  block_steps_translations: BlockStepsTranslations[];
  block_step_card: BlockStepCard[];
  block_step_card_translations: BlockStepCardTranslations[];
  block_contact: BlockContact[];
  block_contact_translations: BlockContactTranslations[];
  block_main_banner: BlockMainBanner[];
  block_main_banner_translations: BlockMainBannerTranslations[];
  block_hero_story: BlockHeroStory[];
  block_hero_story_translations: BlockHeroStoryTranslations[];
  gallery_image_item: GalleryImageItem[];
  gallery_image_item_translations: GalleryImageItemTranslations[];
  block_gallery_showcase: BlockGalleryShowcase[];
  block_gallery_showcase_translations: BlockGalleryShowcaseTranslations[];
  block_extended_contact: BlockExtendedContact[];
  block_extended_contact_translations: BlockExtendedContactTranslations[];
  navigation_items_translations: NavigationItemsTranslations[];
};
