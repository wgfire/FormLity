import { FlityDesignContext, FlityDesignState } from "@/core/context";
import { useMemo } from "react";
import { useImmer } from "use-immer";

export const FormDesignContext: React.FC<React.PropsWithChildren> = (props) => {
  const value = useMemo<FlityDesignState>(() => {
    return {
      panelSpace: null,
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
