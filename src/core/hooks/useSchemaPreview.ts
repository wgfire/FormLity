/**
 * 遍历schema将组件渲染类型改为预览组件
 * @param schema
 * @param preview
 * @returns
 */

import _ from "lodash-es";
import { useFlityDesignContext, useFlityStateContext } from "../context";
import { IFormSchema } from "@/global";

export const useSchemaPreview = () => {
  const { state, setState } = useFlityStateContext();
  const {
    state: { registerComponent },
  } = useFlityDesignContext();
  const { formSchema } = state;

  const updateSchemaComponents = (schema: IFormSchema): IFormSchema => {
    console.log(registerComponent, "registerComponent");
    if (schema.properties) {
      for (const propertyKey in schema.properties) {
        const schemaItem = schema.properties[propertyKey] as IFormSchema;
        // 递归调用并更新 schema.properties
        if (schemaItem?.["x-data"]?.preview) {
          const component = schemaItem?.["x-data"]?.previewType;
          // 查看当前组件在自定义注册中是否存在，如果存在是否开启了自定义预览
          registerComponent.map((register) => {
            if (register.name === schemaItem["x-component"]) {
              if (!register.customPreview) {
                schemaItem["x-component"] = component;
              }
            } else {
              schemaItem["x-component"] = component;
            }
          });
        }
        schema.properties[propertyKey] = updateSchemaComponents(schemaItem);
      }
    }
    return schema;
  };
  const run = () => {
    if (formSchema) {
      setState((draft) => {
        const result = updateSchemaComponents(_.cloneDeep(state.formSchema));
        draft.formSchema = result;
        console.log(result, "result");
      });
    }
  };

  return { run };
};
