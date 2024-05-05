export const createSchema = async (
  components: { [key: string]: React.ReactElement },
  mode: string
) => {
  if (mode === "pc") {
    const { createSchema: createSchemaPc } = await import("./pc/index");
    return createSchemaPc(components);
  }

  const { createSchema: createSchemaMobiles } = await import("./mobile/index");
  return createSchemaMobiles(components);
};
