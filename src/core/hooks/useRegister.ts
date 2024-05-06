import { Schema } from "@formily/react";
import { useFlityDesignContext } from "../context";

export interface IRegister {
  name: string;
  component: React.ReactElement;
  icon: string | React.ReactElement;
  settingsSchema?: Schema;
  [key: string]: any;
}

export const useRegister = (options: IRegister[]) => {
  const {  setState } = useFlityDesignContext();

  options.forEach((item) => {
    const { name, component } = item;
    setState((draft) => {
      draft.components[name] = component;
    })
  });
};
