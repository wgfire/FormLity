/**
 * 键盘监听事件
 */

import { useCallback, useEffect } from "react";
import { useDelete } from "./useDelete";
import { useFlitySateContext } from "../context";

export const useKeycodeEvent = () => {
  const { run: deleteKey } = useDelete();
  const { state } = useFlitySateContext();

  const onKeydown = useCallback(
    (e) => {
      if (e.key === "Backspace" || e.keyCode === 8) {
        if (state.selectFieldSchema) {
          deleteKey(state.selectFieldSchema);
        }
      }
    },
    [deleteKey, state.selectFieldSchema]
  );
  useEffect(() => {
    window.addEventListener("keydown", onKeydown, false);
    return () => {
      window.removeEventListener("keydown", onKeydown, false);
    };
  }, [onKeydown]);
};
