import { useDeepCompareEffect } from "ahooks";
import { useFlityDesignContext } from "../context";
import { IRegister } from "../context/types";

export const useRegister = (options: IRegister[]) => {
  const { setState, state } = useFlityDesignContext();
  useDeepCompareEffect(() => {
    setState((draft) => {
      draft.registerComponent = [...state.registerComponent, ...options];
    });
  },[options]);
};
