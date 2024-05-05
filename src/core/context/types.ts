import { Schema } from "@formily/react";
import { Updater } from "use-immer";
export interface IFormSchema extends Omit<Schema, "properties"> {
  key: string;
  properties: IFormSchema;
}
export interface FormState {
  selectFieldSchema: IFormSchema | null;
  mode: "pc" | "mobile";
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
export interface FlitySateContextProps {
  state: FormState;
  setState: Updater<FormState>;
  emptyStatus: boolean;
}

/**
 * @description 用于扩展设计器的上下文
 */
export interface FlityDesignContextProps {
  panelSpace?: any;
}
