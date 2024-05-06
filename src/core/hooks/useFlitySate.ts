import React from "react";
import { FormState, useFlityStateContext } from "../context";
import { useMount } from "ahooks";

export const useFlitySate = (update: FormState) => {
  const { state, setState } = useFlityStateContext();

  const stateRef = React.useRef<FormState>(state);
  useMount(() => {
    setState((draft) => {
      update.formSchema = update.formSchema || {
        type: "object",
        "x-data": {
          isContainer: true,
          isRoot: true,
        },
        key: "root",
        properties: {},
      };
      Object.assign(draft, update);
      stateRef.current = { ...state, ...update };
    });
  });
  return {
    state,
    setState,
  };
};
