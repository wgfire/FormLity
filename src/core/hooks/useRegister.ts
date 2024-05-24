import { useFlityDesignContext } from "../context";
import { IRegister } from "../context/types";

export const useRegister = (options: IRegister[]) => {
  const { setState } = useFlityDesignContext();

  options.forEach((item) => {
    setState((draft) => {
      draft.registerComponent.push(item);
    });
  });
};
