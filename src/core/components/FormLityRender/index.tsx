import { IFormProps, createForm, onFormValuesChange } from "@formily/core";
import { FormProvider } from "@formily/react";
import { Suspense, forwardRef, useImperativeHandle, useState } from "react";
import { Button, Empty, Form } from "@feb/kk-design";

import styles from "./index.module.less";
import { useFlityStateContext } from "../../context";

import { useLazySchemaField } from "../../hooks/useLazySchemaField";

import clsx from "clsx";
import { DropboxOutlined } from "@ant-design/icons";
import { ModeWrapper } from "@/ui/WorkSpace/components/ModeWrapper";
import { FormItem } from "@/decorator/components/FormItem";

export const FormLityRender = forwardRef((props, ref) => {
  const { state, emptyStatus } = useFlityStateContext();

  const empty = emptyStatus;
  const { mode, readOnly, editable, designEnable } = state;
  const [initialValues, setInitialValues] = useState({});

  const { SchemaField, isLoading } = useLazySchemaField(
    { FormItem: FormItem },
    mode
  );

  const designForm = createForm({
    validateFirst: false,
    readOnly: readOnly,
    editable: editable,
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

  useImperativeHandle(ref, () => ({
    designForm: designForm,
  }));

  return (
    <div id="FormLityRender" className={clsx(styles.render)}>
      <Suspense fallback={<div>加载中...</div>}>
        <ModeWrapper mode={state.mode} preview={!designEnable}>
          {empty ? (
            <Empty
              image={<DropboxOutlined style={{ fontSize: "100px" }} />}
              description="暂无数据"
              style={{ marginTop: "100px", width: "100%" }}
            />
          ) : (
            <>
              <FormProvider form={designForm}>
                <Form layout="vertical" style={{ width: "100%" }}>
                  {isLoading ? null : <SchemaField schema={state.formSchema} />}
                </Form>
              </FormProvider>
            </>
          )}
        </ModeWrapper>
      </Suspense>
    </div>
  );
});
