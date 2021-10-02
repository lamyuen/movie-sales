import { Observable } from 'rxjs';

export type Control = TextBox | ComboBox | AutoComplete | DatePicker | CheckBox;

export interface ControlBase {
  name: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface ValueText {
  value: string;
  text: string;
}

export type ValueList =
  | string[]
  | ValueText[]
  | Observable<string[]>
  | Observable<ValueText[]>;

export interface TextBox extends ControlBase {
  type: 'text-box';
  isPassword?: boolean;
}

export interface ComboBox extends ControlBase {
  type: 'combo-box';
  valueList: ValueList;
}

export interface AutoComplete extends ControlBase {
  type: 'auto-complete';
  valueList: ValueList;
  notFound: (text: string) => boolean;
}

export interface DatePicker extends ControlBase {
  type: 'date-picker';
}

export interface CheckBox extends ControlBase {
  type: 'check-box';
}
