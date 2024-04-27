import { useEffect, useState } from "react";
import { createSchema } from "../../core/createSchemaField";
export function useLazySchemaField(
  components: {
    [key: string]: React.FunctionComponent;
  },
  mode: string
) {
  const [SchemaField, setSchemaField] = useState<React.ReactElement>();
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

  return { SchemaField, isLoading };
}
