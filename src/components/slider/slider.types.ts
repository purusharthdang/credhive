export interface SliderTypes {
    min: number;
    max: number;
    step: number;
    onChange: (value: number) => void;
    title: string
  }