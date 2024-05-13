import { useEffect, useState } from "react";
import { createSchema } from "../../core/createSchemaField";
import { useFlityDesignContext } from "../context";
import { DeviceType } from "@/global";

import { SchemaReactComponents, createSchemaField } from "@formily/react";

export function useLazySchemaField(
  components: SchemaReactComponents,
  mode: DeviceType
) {
  const [SchemaField, setSchemaField] = useState<ReturnType<typeof createSchemaField>>();
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: { components: designComponent = {} },
  } = useFlityDesignContext();
  const registerComponent: SchemaReactComponents = {
    ...components,
    ...designComponent,
  };
  useEffect(() => {
    const fetchSchema = async () => {
      setIsLoading(true);
      const result = await createSchema(registerComponent, mode);
      setSchemaField(() => {
        return result;
      });
      setIsLoading(false);
    };

    fetchSchema();
  }, [mode, designComponent]);

  return { SchemaField, isLoading };
}
