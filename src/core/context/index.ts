import { createContext, useContext } from "react";
import { FlitySateContextProps, FLityDesignContextProps } from "./types";
export * from "./types";

export const FlitySateContext = createContext<FlitySateContextProps>({});

export const FLityDesignContext = createContext<FLityDesignContextProps>({});

export const useFlitySateContext = () => {
  return useContext(FlitySateContext);
};
export default FlitySateContext;
