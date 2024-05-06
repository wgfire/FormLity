import { useFlityStateContext } from "../context";
import { useRef } from "react";
import { findSchemaParentByKey } from "../utils/find";
import { IFormSchema } from "@/global";

export const useDelete = () => {
  const ref = useRef<((schema: IFormSchema) => void) | null>(null);
  const { state, setState } = useFlityStateContext();
  ref.current = (schema: IFormSchema): void => {
    setState((draft) => {
      const parent = findSchemaParentByKey(draft.formSchema! as unknown as IFormSchema, schema.key);
      delete parent?.properties[schema.key];
      if (state.selectFieldSchema?.key === schema.key) {
        draft.selectFieldSchema = null;
      }
    });
  };
  return { run: ref.current };
};
