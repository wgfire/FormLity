import { useEffect, useState } from "react";
import { createSchema } from "../../core/createSchemaField";
export function useLazySchemaField(components, mode) {
  const [SchemaField, setSchemaField] = useState<React.ReactElement | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSchema = async () => {
      const result = await createSchema(components, mode);
      setSchemaField(() => {
        return result;
      });
      setIsLoading(false);
    };

    fetchSchema();
  }, [mode]);

  return [SchemaField, isLoading];
}
