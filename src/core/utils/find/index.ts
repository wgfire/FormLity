export const findSchemaByKey = (schema, key) => {
  if (schema.key && schema.key === key) {
    return schema;
  }
  if (schema.properties) {
    for (const propertyKey in schema.properties) {
      const node = findSchemaByKey(schema.properties[propertyKey], key);
      if (node) return node;
    }
  }
  return null;
};

export const findSchemaParentByKey = (schema, key) => {
  if (!schema || !schema.properties) {
    return null;
  }
  for (const propertyKey in schema.properties) {
    const property = schema.properties[propertyKey];
    if (!property) {
      continue;
    }
    if (property.key === key) {
      return schema; // 直接返回当前 schema 作为父节点
    }
    if (property.properties) {
      const parent = findSchemaParentByKey(property, key);
      if (parent) {
        return parent;
      }
    }
  }
  return null;
};

export const findAllKeys = (schema) => {
  const keys: string[] = [];
  const stack = [schema];

  while (stack.length) {
    const currentSchema = stack.pop();
    if (currentSchema.properties) {
      for (const propertyKey in currentSchema.properties) {
        keys.push(propertyKey);
        const property = currentSchema.properties[propertyKey];
        if (property.properties) {
          stack.push(property);
        }
      }
    }
  }
  return keys;
};
