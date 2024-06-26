import { Empty, Flex, Form } from "@feb/kk-design";
import { useFlityStateContext } from "../../core/context";
import { Suspense, memo, useCallback, useMemo } from "react";
import { settingsSchema } from "./settingsSchema";
import { FormProvider } from "@formily/react";
import { createForm, onFormValuesChange } from "@formily/core";
import { FormItem, Switch, Options, CascaderOptions } from "./components/index";
import { useDebounceFn } from "ahooks";
import { findSchemaByKey } from "../../core/utils/find";
import { usePresenter } from "./presenter";
import { useLazySchemaField } from "../../core/hooks/useLazySchemaField";
import styles from "./index.module.less";
import clsx from "clsx";
export const SettingSpace: React.FC<{ style?: React.CSSProperties }> = memo(
  (props) => {
    const { style } = props;
    const { state, setState, emptyStatus } = useFlityStateContext();
    const { selectFieldSchema } = state;
    const { generateValues } = usePresenter();
    const componentType = selectFieldSchema?.["x-component"] ?? ("" as string);
    const settingSchema = settingsSchema[componentType] ?? "";
    const findSelectFieldSchema = selectFieldSchema
      ? findSchemaByKey(state.formSchema, selectFieldSchema.key)
      : {};
    const initialValues = generateValues(findSelectFieldSchema, {});

    const { SchemaField, isLoading } = useLazySchemaField(
      { FormItem, Switch, Options, CascaderOptions },
      "pc"
    );

    const { run: valuesChange } = useDebounceFn(
      useCallback(
        (form) => {
          setState((draft) => {
            //pushHistory(state.formSchema)//将旧版的添加到记录
            const schema = findSchemaByKey(
              draft.formSchema,
              selectFieldSchema?.key
            );
            const values = JSON.parse(JSON.stringify(form.values));
            generateValues(values, schema, false);
          });
        },
        [selectFieldSchema]
      ),
      { wait: 300 }
    );

    const settingForm = useMemo(() => {
      return createForm({
        validateFirst: false,
        initialValues: initialValues,
        effects() {
          onFormValuesChange(valuesChange);
        },
      });
    }, [initialValues]);
    const visible = useMemo(() => {
      return !!selectFieldSchema && state.designEnable && !emptyStatus;
    }, [selectFieldSchema, state.designEnable, emptyStatus]);

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Flex
          className={clsx(styles.settingSpace, { [styles.visible]: visible })}
          style={{ ...style }}
          justifyContent="center"
        >
          {selectFieldSchema && (
            <>
              {settingSchema ? (
                <FormProvider form={settingForm}>
                  <Form layout="vertical" style={{ width: "100%" }}>
                    <SchemaField schema={settingSchema} />
                  </Form>
                </FormProvider>
              ) : (
                <Empty description="别急，当前组件暂不支持配置属性！" />
              )}
            </>
          )}
        </Flex>
      </Suspense>
    );
  }
);
