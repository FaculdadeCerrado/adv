export interface Source {
  title: string;
  uri: string;
}

export interface NewsResult {
  content: string;
  sources: Source[];
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}