import { IFormProps, createForm } from "@formily/core";
import { FormProvider } from "@formily/react";
import {
  Suspense,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
} from "react";
import { Empty, Form } from "@feb/kk-design";

import { useFlityStateContext } from "../../context";

import { useLazySchemaField } from "../../hooks/useLazySchemaField";

import styles from "./index.module.less";
import clsx from "clsx";

import { ModeWrapper } from "@/ui/WorkSpace/components/ModeWrapper";
import { FormItem } from "@/decorator/components/FormItem";
import { useSchemaPreview } from "@/core/hooks/useSchemaPreview";
import { useMount, useUpdateEffect } from "ahooks";
import PreviewComponents from "@/components/PreviewText/index";
export interface IFormLityRenderProps {
  initialValues?: object;
  layout?: "vertical" | "horizontal";
}
export const FormLityPreview: React.FC<IFormLityRenderProps> = forwardRef(
  (props, ref) => {
    const { state, emptyStatus } = useFlityStateContext();
    const { run } = useSchemaPreview();
    const empty = emptyStatus;

    const { layout = "vertical" } = props;
    const initialValues = props.initialValues ?? {};

    const { SchemaField, isLoading } = useLazySchemaField(
      { FormItem, ...PreviewComponents },
      state.mode
    );

    useUpdateEffect(() => {
      run();
    }, [state.readOnly]);

    const designForm = useMemo(() => {
      return createForm({
        pattern: "readPretty",
        initialValues: initialValues,
      } as IFormProps & { data: object });
    }, []);

    useImperativeHandle(ref, () => ({
      designForm: designForm,
    }));

    return (
      <div id="FormLityRender" className={clsx(styles.render)}>
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
                  <Form layout={layout} style={{ width: "100%" }}>
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
