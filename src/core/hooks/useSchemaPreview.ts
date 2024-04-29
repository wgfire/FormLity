
/**
 * 遍历schema将组件渲染类型改为预览组件
 * @param schema
 * @param preview
 * @returns
 */


import {cloneDeep} from "lodash-es";
import { IFormSchema, useFormDesignContext } from "../context"

export const useSchemaPreview = () => {
  const { state, setState } = useFormDesignContext();
  const { formSchema } = state || {};
  const Component = 'PreviewText';

  const run = () => {
    if (state && formSchema) {
      setState((draft) => {
        const newFormSchema = updateSchemaComponents(cloneDeep(formSchema), Component);
        console.log(newFormSchema, '预览态组件数据')
        draft.formSchema = newFormSchema;
      });
    }
  }

  return { run }
};

export const updateSchemaComponents = (schema:IFormSchema, component:string) => {
  if (schema.properties) {
    for (const propertyKey in schema.properties) {
      const schemaItem = schema.properties[propertyKey]
      if(schemaItem['x-component']!=='FormGrid') {
        schemaItem['x-component'] = component;
      }
     updateSchemaComponents(schemaItem, component);

    }
  }
 return schema
};
