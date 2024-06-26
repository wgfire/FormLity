import { IFormProps, createForm } from "@formily/core";
import { FormProvider } from "@formily/react";
import { Suspense, forwardRef, useImperativeHandle, useMemo } from "react";
import { Empty, Form as AntForm } from "@feb/kk-design";
import { Form as AntMForm } from "antd-mobile";
import { useFlityStateContext } from "../../context";

import { useLazySchemaField } from "../../hooks/useLazySchemaField";

import styles from "./index.module.less";
import clsx from "clsx";

import { ModeWrapper } from "@/ui/WorkSpace/components/ModeWrapper";
import { FormItem } from "@/decorator/components/FormItem";
import { useSchemaPreview } from "@/core/hooks/useSchemaPreview";
import { useUpdateEffect } from "ahooks";
import PreviewComponents from "@/components/PreviewText/index";
import { FormGrid } from "@/decorator/components/FormGrid";
export interface IFormLityRenderProps {
  initialValues?: object;
  layout?: "vertical" | "horizontal";
}
export const FormLityPreview: React.FC<IFormLityRenderProps> = forwardRef(
  (props, ref) => {
    const { state, emptyStatus } = useFlityStateContext();
    const { run } = useSchemaPreview();
    const empty = emptyStatus;
    const { mode, designEnable } = state;
    const { layout = "vertical" } = props;
    const initialValues = props.initialValues ?? {};
    const { SchemaField, isLoading } = useLazySchemaField(
      { FormItem, FormGrid, ...PreviewComponents },
      state.mode
    );

    useUpdateEffect(() => {
      run();
    }, [state.readOnly]);

    const designForm = useMemo(() => {
      return createForm({
        pattern: "readPretty",
        initialValues: initialValues,
        data: {
          designEnable: designEnable,
          mode: mode,
        },
      } as IFormProps & { data: object });
    }, [mode]);

    useImperativeHandle(ref, () => ({
      designForm: designForm,
    }));

    const Form = useMemo(() => {
      // kkdesign的表单移动端水平布局失效
      return mode === "pc" ? AntForm : AntMForm;
    }, [mode]);
    return (
      <div id="FormLityPreview" className={clsx(styles.render)}>
        <Suspense fallback={<div>加载中...</div>}>
          <ModeWrapper mode={state.mode} preview={true}>
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
