
import { ReactFC, Schema, SchemaReactComponents } from "@formily/react";
import { MemoExoticComponent } from "react";
import { Updater } from "use-immer";
export interface IFormSchema extends Omit<Schema, "properties"> {
  key: string;
  properties: IFormSchema;
  [key: string]: unknown;
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
export interface FlityStateContextProps {
  state: FormState;
  setState: Updater<FormState>;
  emptyStatus: boolean;
}

export type RegisterComponent =
  | React.ReactElement
  | MemoExoticComponent<ReactFC<unknown>>;
export interface FlityDesignState {
  panelSpace: any;
  components: SchemaReactComponents;
}
/**
 * @description 用于扩展设计器的上下文
 */
export interface FlityDesignContextProps {
  state: FlityDesignState;
  setState: Updater<FlityDesignState>;
}
