import { DeviceType } from "@/global";

import { SchemaReactComponents } from "@formily/react";

export const createSchema = async (
  components: SchemaReactComponents,
  mode: DeviceType
) => {
  if (mode === "pc") {
    const { createSchema: createSchemaPc } = await import("./pc/index");
    return createSchemaPc(components);
  }

  if (mode === "mobile") {
    const { createSchema: createSchemaMobiles } = await import(
      "./mobile/index"
    );
    return createSchemaMobiles(components);
  }
};
