export interface TuneConstant {
  units?: string;
  value: string | number;
}

export interface TuneConstants {
  [name: string]: TuneConstant;
}

export interface Tune {
  constants: TuneConstants;
}
