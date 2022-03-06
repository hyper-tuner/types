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

export interface TuneWithDetails extends Tune {
  details: {
    author: string;
    tuneComment: string;
    writeDate: string;
    fileFormat: string;
    firmwareInfo: string;
    nPages: number;
    signature: string;
  };
}
