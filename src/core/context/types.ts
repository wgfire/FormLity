import { ReactFC, Schema } from "@formily/react";
import { MemoExoticComponent } from "react";
import { Updater } from "use-immer";
import { ConfigSchemaType } from "../components/FormDesignContext/config/defaultPanel";
import { DeviceType } from "@/global";
import { JSXComponent } from "@formily/core";
export interface IFormSchema extends Omit<Schema, "properties"> {
  key: string;
  properties: IFormSchema;
  [key: string]: unknown;
}
export interface FormState {
  selectFieldSchema: IFormSchema | null;
  mode: DeviceType | null;
  readOnly: boolean;
  editable: boolean;
  designEnable: boolean;
  formSchema: IFormSchema;
  previewFormSchema?: IFormSchema;
  history: {
    historyStack: IFormSchema[];
    historyIndex: number;
    undoStack: IFormSchema[];
    maxCount: number;
  };
}
export interface FlityStateContextProps {
  state: FormState;
  setState: Updater<FormState>;
  emptyStatus: boolean;
}

export type RegisterComponent =
  | React.ReactElement
  | JSXComponent
  | MemoExoticComponent<ReactFC<unknown>>;

export interface IRegister {
  name: string;
  component: RegisterComponent;
  icon?: string | React.ReactElement;
  settingsSchema?: Schema;
  customPreview?: boolean;
  [key: string]: any;
}
export interface FlityDesignState {
  panelSpace: ConfigSchemaType[];
  registerComponent: IRegister[];
}
/**
 * @description 用于扩展设计器的上下文
 */
export interface FlityDesignContextProps {
  state: FlityDesignState;
  setState: Updater<FlityDesignState>;
}
