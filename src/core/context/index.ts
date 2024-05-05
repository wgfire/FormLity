import { createContext, useContext } from "react";
import { FlitySateContextProps, FlityDesignContextProps } from "./types";
export * from "./types";

export const FlitySateContext = createContext<FlitySateContextProps >({} as unknown as FlitySateContextProps);

export const FlityDesignContext = createContext<FlityDesignContextProps>({});

export const useFlitySateContext = () => {
  return useContext(FlitySateContext);
};
export default FlitySateContext;
