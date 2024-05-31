import { IFormProps, createForm, onFormValuesChange } from "@formily/core";
import { FormProvider } from "@formily/react";
import {
  Suspense,
  forwardRef,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";
import { Empty, Form as AntForm } from "@feb/kk-design";
import { Form as AntMForm } from "antd-mobile";
import styles from "./index.module.less";
import { useFlityStateContext } from "../../context";

import { useLazySchemaField } from "../../hooks/useLazySchemaField";

import clsx from "clsx";

import { ModeWrapper } from "@/ui/WorkSpace/components/ModeWrapper";
import { FormItem } from "@/decorator/components/FormItem";
import { FormGrid } from "@/decorator/components/FormGrid";

export interface IFormLityRenderProps {
  initialValues?: object;
  layout?: "vertical" | "horizontal";
  onValuesChange?: (values: object) => void;
}
export const FormLityRender: React.FC<IFormLityRenderProps> = forwardRef(
  (props, ref) => {
    const { state, emptyStatus } = useFlityStateContext();
    const formRef = useRef(null);

    const empty = emptyStatus;
    const { mode, designEnable, readOnly } = state;
    const { onValuesChange, layout = "vertical" } = props;
    const initialValues = props.initialValues ?? {};

    const Form = useMemo(() => {
      return mode === "pc" ? AntForm : AntMForm;
    }, [mode]);

    const { SchemaField, isLoading } = useLazySchemaField(
      { FormItem, FormGrid },
      mode
    );

    const designForm = useMemo(() => {
      return createForm({
        pattern: "editable",
        initialValues: initialValues,
        data: {
          designEnable: designEnable,
          mode: mode,
        },
        effects() {
          onFormValuesChange((form) => {
            console.log(form.values, "form.values");
            onValuesChange?.(form.values);
            // form.setValues(form.values);
          });
        },
      } as IFormProps & { data: object });
    }, [initialValues, designEnable, mode]);

    useImperativeHandle(ref, () => ({
      designForm: formRef.current,
    }));


    return (
      <div id="FormLityRender" className={clsx(styles.render)}>
        <Suspense fallback={<div>加载中...</div>}>
          <ModeWrapper mode={state.mode} preview={!designEnable && !readOnly}>
            {empty ? (
              <Empty
                description="暂无数据"
                style={{ marginTop: "100px", width: "100%" }}
              />
            ) : (
              <>
                <FormProvider form={designForm}>
                  <Form
                    layout={layout}
                    style={{ width: "100%" }}
                    ref={formRef}
                    className={styles.form}
                    initialValues={initialValues}
                  >
                    {isLoading ? null : (
                      <SchemaField schema={state.formSchema} />
                    )}
                  </Form>
                </FormProvider>
              </>
            )}
          </ModeWrapper>
        </Suspense>
      </div>
    );
  }
);
