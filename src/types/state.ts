import { Logs } from './logs';
import { Config } from './config';
import { Tune } from './tune';

export interface ConfigState extends Config {}

export interface TuneState extends Tune {}

export interface LogsState extends Logs {}

export interface UIState {
  sidebarCollapsed: boolean;
}

export interface StatusState {
  text: string | null;
}

export interface AppState {
  tune: TuneState;
  config: ConfigState;
  logs: LogsState,
  ui: UIState;
  status: StatusState;
}

export interface UpdateTunePayload {
  name: string;
  value: string | number;
}
