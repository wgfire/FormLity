import React from "react";
import { FormState, useFlitySateContext } from "../context";
import { useMount } from "ahooks";

export const  useFlitySate = (update: FormState) => {
  const { state, setState } = useFlitySateContext();

  const stateRef = React.useRef<FormState>(state);
  useMount(() => {
    setState((draft) => {
      Object.assign(draft, update);
      stateRef.current = { ...state, ...update };
    });
  });
  return {
    state,
    setState,
  };
};
