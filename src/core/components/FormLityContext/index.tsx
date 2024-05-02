import { useImmer } from "use-immer";
import FlitySateContext, { FormState, IFormSchema } from "../../context";
import { mockSchema } from "../../../ui/FormDesign/mockSchema";
import { useMemo } from "react";
import { useDeepCompareEffect } from "ahooks";

export interface FormLityContextProps {
  onChange?: (schema: IFormSchema) => void;
  schema?: IFormSchema;
}
export const FormLityContext: React.FC<React.PropsWithChildren<FormLityContextProps>> = (props) => {
  const { schema } = props;
  const value = useMemo<FormState>(() => {
    return {
      selectFieldSchema: null,
      mode: "pc", //pc mobile
      readOnly: false, // 是否只读
      editable: true, // 是否可编辑
      designEnable: true, // 是否启用设计器
      formSchema: schema || (mockSchema as unknown as IFormSchema), // 这里使用new Schema来创造实例，immer不会触发重渲染 所以更新的时候还是要用新对象
      history: {
        historyStack: [],
        historyIndex: -1,
        undoStack: [],
        maxCount: 10,
      },
    };
  }, [schema]);

  const [state, setState] = useImmer<FormState>(value);
  const emptyStatus = useMemo(() => {
    return Object.keys(state.formSchema.properties!).length === 0;
  }, [state.formSchema]);
  useDeepCompareEffect(() => {
    props?.onChange?.(state.formSchema);
  }, [state.formSchema]);

  return (
    <FlitySateContext.Provider
      value={{
        state,
        setState,
        emptyStatus,
      }}
    >
      {props.children}
    </FlitySateContext.Provider>
  );
};
