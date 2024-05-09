/**
 * 遍历schema将组件渲染类型改为预览组件
 * @param schema
 * @param preview
 * @returns
 */


import { useFlityStateContext } from "../context";
import { IFormSchema } from "@/global";

const notPreview = ["FormGrid", "Slider"];

export const useSchemaPreview = () => {
  const { state, setState } = useFlityStateContext();
  const { formSchema } = state || {};
  const Component = "PreviewText";
  const run = () => {
    console.log(state, "state");
    if (state && formSchema) {
      setState((draft) => {
        updateSchemaComponents(draft.formSchema, Component);
        console.log(draft.formSchema, "预览态组件数据");
      });
    }
  };

  return { run };
};

export const updateSchemaComponents = (
  schema: IFormSchema,
  component: string
) => {
  if (schema.properties) {
    for (const propertyKey in schema.properties) {
      const schemaItem = schema.properties[propertyKey] as IFormSchema;
      if (schemaItem?.['x-data']?.preview) {
        schemaItem["x-component"] = component;
      }
      updateSchemaComponents(schemaItem, component);
    }
  }
  return schema;
};
