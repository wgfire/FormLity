import { IFormProps, createForm, onFormValuesChange } from "@formily/core";
import { FormProvider } from "@formily/react";
import { Suspense, forwardRef, useImperativeHandle, useState } from "react";
import { Empty, Form } from "@feb/kk-design";

import styles from "./index.module.less";
import { useFlityStateContext } from "../../context";

import { useLazySchemaField } from "../../hooks/useLazySchemaField";

import clsx from "clsx";
import { DropboxOutlined } from "@ant-design/icons";
import { ModeWrapper } from "@/ui/WorkSpace/components/ModeWrapper";
import { FormItem } from "@/decorator/components/FormItem";
import { useSchemaPreview } from "@/core/hooks/useSchemaPreview";
import { useUpdateEffect } from "ahooks";
import PreviewText from "@/components/PreviewText";

export interface IFormLityRenderProps {
  initialValues?: object;
  readOnly?: boolean;
  editable?: boolean;
}
export const FormLityRender: React.FC<IFormLityRenderProps> = forwardRef(
  (props, ref) => {
    const { state, emptyStatus } = useFlityStateContext();
    const { run } = useSchemaPreview();
    const empty = emptyStatus;
    const { mode, designEnable, readOnly, editable } = state;
    //  const { readOnly, editable } = props;
    const [initialValues, setInitialValues] = useState(
      props.initialValues ?? {}
    );

    const { SchemaField, isLoading } = useLazySchemaField(
      { FormItem, PreviewText },
      mode
    );
    useUpdateEffect(() => {
      if (readOnly) {
        run();
      }
    }, [readOnly]);

    const designForm = createForm({
      pattern: readOnly ? "readPretty" : "editable",
      initialValues: initialValues,
      data: {
        designEnable: state.designEnable,
        mode: state.mode,
      },
      effects() {
        onFormValuesChange((form) => {
          console.log(form.values, "form.values");
          setInitialValues(form.values);
        });
      },
    } as IFormProps & { data: object });
    console.log(designForm, "designForm");

    useImperativeHandle(ref, () => ({
      designForm: designForm,
    }));

    return (
      <div id="FormLityRender" className={clsx(styles.render)}>
        <Suspense fallback={<div>加载中...</div>}>
          <ModeWrapper mode={state.mode} preview={!designEnable}>
            {empty ? (
              <Empty
                description="暂无数据"
                style={{ marginTop: "100px", width: "100%" }}
              />
            ) : (
              <>
                <FormProvider form={designForm}>
                  <Form layout="vertical" style={{ width: "100%" }}>
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
