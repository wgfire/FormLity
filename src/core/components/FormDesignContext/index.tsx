import { FlityDesignContext } from "@/core/context";
import { FlityDesignState } from "@/core/context/types";
import { useMemo } from "react";
import { useImmer } from "use-immer";
import { defaultPanelSpace } from "./config/defaultPanel";
export const FormDesignContext: React.FC<React.PropsWithChildren> = (props) => {
  const value = useMemo<FlityDesignState>(() => {
    return {
      panelSpace: defaultPanelSpace,
      components: {},
    };
  }, []);

  const [state, setState] = useImmer<FlityDesignState>(value);

  return (
    <FlityDesignContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {props.children}
    </FlityDesignContext.Provider>
  );
};
