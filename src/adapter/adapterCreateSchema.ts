/**
 * 根据type适配schema的渲染规则
 */
export const adapterSchema = (item) => {
  if (
    item.renderType === "FormGrid" ||
    item.renderType === "Divider" ||
    item.renderType === "Text"
  ) {
    return {
      type: "void",
      "x-component": item.renderType,
      "x-data": {
        isContainer: true,
      },
      properties: {},
    };
  } else {
    return {
      type: "string",
      required: true,
      "x-component": item.renderType,
      "x-decorator": "FormItem",
      "x-component-props": {},
      "x-reactions": item["x-reactions"],
      "x-data": {
        ...item.data,
      },
    };
  }
};
