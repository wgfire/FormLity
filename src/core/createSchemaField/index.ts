import { DeviceType } from "@/global";
import { RegisterComponent } from "../context/types";

export const createSchema = async (
  components: { [key: string]: RegisterComponent },
  mode: DeviceType
) => {
  if (mode === "pc") {
    const { createSchema: createSchemaPc } = await import("./pc/index");
    return createSchemaPc(components);
  }

  const { createSchema: createSchemaMobiles } = await import("./mobile/index");
  return createSchemaMobiles(components);
};
