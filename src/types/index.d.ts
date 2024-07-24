export interface Issue {
  id: number;
  status: string;
  designer: string;
  date_created: string;
  date_finished: string;
  date_finished_by_designer: string;
  date_started_by_designer: string;
  date_updated: string;
  project: string;
  received_from_client: number;
  send_to_account_manager: number;
  send_to_designer: number;
  send_to_project_manager: number;
  summary: string;
}

export interface IssuesState {
  issuesData: Issue[];
  isLoadingIssuesData: boolean;
  errorIssuesData: boolean;
  errorMessageIssuesData: string;
}

export interface Designers {
  count: number;
  next: string;
  previous?: null;
  results: Result[];
}

export interface Result {
  avatar: string;
  email: string;
  issues: Issue[];
  thumbnails: Thumbnails;
}

export interface Thumbnails {
  avatar: string;
  avatar_2x: string;
  avatar_webp?: string;
  avatar_webp_2x?: string;
}

export interface DesignersState {
  designersData: Result[];
  isLoadingDesignersData: boolean;
  errorDesignersData: boolean;
  errorMessageDesignersData: string;
}

export interface CommentsState {
  commentsData: Comments[];
  isLoadingCommentsData: boolean;
  errorCommentsData: boolean;
  errorMessageCommentsData: string;
}

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
}

export interface Comments {
  id: number;
  issue: string;
  date_created: string;
  message: string;
  designer: Designer;
}

export interface Designer {
  avatar: string;
  username: string;
  thumbnails: Thumbnails;
}
