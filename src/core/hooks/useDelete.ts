import { IFormSchema, useFormDesignContext } from "../context";
import { useRef } from "react";
import { findSchemaParentByKey } from "../utils/find";

export const useDelete = () => {
  const ref = useRef<((schema: IFormSchema) => void) | null>(null);
  const { state, setState } = useFormDesignContext();
  ref.current = (schema: IFormSchema): void => {
    setState((draft) => {
      const parent = findSchemaParentByKey(draft.formSchema, schema);
      delete parent.properties[schema.key];
      if (state.selectFieldSchema?.key === schema.key) {
        draft.selectFieldSchema = null;
      }
    });
  };
  return { run: ref.current };
};
