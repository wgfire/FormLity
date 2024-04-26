import { adapterSchema } from "../../../adapter/adapterCreateSchema";
import { createId } from "../string/createId";

export const createSchemaItem = (item, props) => {
  const adapterItem = adapterSchema(item);
  const schema = {
    key: `${item.renderType.toLowerCase()}-${createId()}`,
    title: item.title,
    ...adapterItem,
    ...props,
  };
  return schema;
};
