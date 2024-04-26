import { useCallback, useState } from "react";
import { IFormSchema, useFormDesignContext } from "../context";

import { useUpdateEffect } from "ahooks";

/**
 * Push a new schema into the history stack and update the historyIndex.
 * The history stack is capped at maxCount items.
 *
 * @param {import("./context").FormDesignContextData["formSchema"]} schema New schema to push into the history stack.
 * @returns {void}
 */

export const useHistorySchema = () => {
  const { state, setState } = useFormDesignContext();
  const formSchemaString = JSON.stringify(state.formSchema);
  const [isUndoRedo, setIsUndoRedo] = useState(false);
  const { maxCount, historyStack, historyIndex, undoStack } = state.history;

  const clearUndoStack = useCallback(() => {
    setState((draft) => {
      draft.history.undoStack = [];
    });
  }, []);

  const pushHistory = useCallback(
    (schema: IFormSchema) => {
      setState((draft) => {
        const history = draft.history;

        if (history.historyStack.length === history.maxCount) {
          history.historyStack.shift();
        } else {
          clearUndoStack();
        }

        history.historyStack.push(schema);
        history.historyIndex++;
      });
    },
    [setState, clearUndoStack]
  );

  // Function to handle undo operation
  const onUndo = useCallback(() => {
    setState((draft) => {
      const history = draft.history;
      if (history.historyStack.length > 1) {
        draft.history.undoStack.push(draft.formSchema);
        history.historyIndex--;
        draft.formSchema = history.historyStack[history.historyIndex];
      } else {
        draft.formSchema = history.historyStack[0];
      }
    });
  }, [setState]);

  const onRedo = useCallback(() => {
    setState((draft) => {
      const history = draft.history;
      if (
        history.historyIndex < history.historyStack.length - 1 ||
        history.undoStack.length > 0
      ) {
        if (history.undoStack.length > 0) {
          draft.formSchema = draft.history.undoStack.pop()!!;
        } else {
          history.historyIndex++;
          draft.formSchema = history.historyStack[history.historyIndex];
        }
      }
    });
  }, [setState]);

  useUpdateEffect(() => {
    console.log(historyIndex, historyStack, "history stack updated");
  }, [historyIndex, historyStack]);

  useUpdateEffect(() => {
    if (!isUndoRedo) {
      pushHistory(state.formSchema);
    }
  }, [formSchemaString, pushHistory, isUndoRedo]);

  // Wrap undo and redo functions to set the flag
  const wrappedOnUndo = useCallback(() => {
    setIsUndoRedo(true);
    onUndo();
    setIsUndoRedo(false);
  }, [onUndo]);

  const wrappedOnRedo = useCallback(() => {
    setIsUndoRedo(true);
    onRedo();
    setIsUndoRedo(false);
  }, [onRedo]);

  return { onUndo: wrappedOnUndo, onRedo: wrappedOnRedo };
};
