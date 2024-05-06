import { createContext, useContext } from "react";
import { FlityStateContextProps, FlityDesignContextProps } from "./types";


export const FlityStateContext = createContext<FlityStateContextProps>(
  {} as unknown as FlityStateContextProps
);

export const FlityDesignContext = createContext<FlityDesignContextProps>({} as unknown as FlityDesignContextProps);

export const useFlityStateContext = () => {
  return useContext(FlityStateContext);
};
export const useFlityDesignContext = () => {
  return useContext(FlityDesignContext);
};
export default FlityStateContext;
