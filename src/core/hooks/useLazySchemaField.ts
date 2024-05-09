import { useEffect, useState } from "react";
import { createSchema } from "../../core/createSchemaField";
import { useFlityDesignContext } from "../context";
import { DeviceType } from "@/global";

import { RegisterComponent } from "../context/types";

export function useLazySchemaField(
  components: {
    [key: string]: RegisterComponent;
  },
  mode: DeviceType
) {
  const [SchemaField, setSchemaField] = useState<React.ReactElement>();
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: { components: designComponent = {} },
  } = useFlityDesignContext();
  const registerComponent: { [key: string]: RegisterComponent } = {
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
