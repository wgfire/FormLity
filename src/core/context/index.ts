import { createContext, useContext } from "react";
import { Updater } from "use-immer";
import { Schema } from "@formily/react";

export interface IFormSchema extends Schema {
  key: string;
}

export interface FormState {
  selectFieldSchema: IFormSchema | null;
  mode: "pc" | "mobile";
  readOnly: boolean;
  editable: boolean;
  designEnable: boolean;
  formSchema: IFormSchema;
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

export const FormDesignContext = createContext<IFormDesignContextData>(
  {} as any
);

export const useFormDesignContext = () => {
  return useContext(FormDesignContext);
};
export default FormDesignContext;
