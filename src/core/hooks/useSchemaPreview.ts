/**
 * 遍历schema将组件渲染类型改为预览组件
 * @param schema
 * @param preview
 * @returns
 */

import _ from "lodash-es";
import { useFlityStateContext } from "../context";
import { IFormSchema } from "@/global";

export const useSchemaPreview = () => {
  const { state, setState } = useFlityStateContext();
  const { formSchema } = state;

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

export const updateSchemaComponents = (schema: IFormSchema): IFormSchema => {
  if (schema.properties) {
    for (const propertyKey in schema.properties) {
      const schemaItem = schema.properties[propertyKey] as IFormSchema;
      // 递归调用并更新 schema.properties
      if (schemaItem?.["x-data"]?.preview) {
        const component = schemaItem?.["x-data"]?.previewType;
        schemaItem["x-component"] = component;
      }
      schema.properties[propertyKey] = updateSchemaComponents(schemaItem);
    }
  }
  return schema;
};
