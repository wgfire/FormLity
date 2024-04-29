import { createContext, useContext } from "react";
import { Updater } from "use-immer";
import { Schema } from "@formily/react";

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
export interface IFormDesignContextData {
  state: FormState;
  setState: Updater<FormState>;
  emptyStatus: boolean;
}

export const FormDesignContext = createContext<IFormDesignContextData>({} as any);

export const useFormDesignContext = () => {
  return useContext(FormDesignContext);
};
export default FormDesignContext;
