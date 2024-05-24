import { useState } from "react";
import { createSchema } from "../../core/createSchemaField";
import { useFlityDesignContext } from "../context";
import { DeviceType } from "@/global";

import { SchemaReactComponents, createSchemaField } from "@formily/react";
import { useDeepCompareEffect, useUpdateEffect } from "ahooks";

export function useLazySchemaField(
  components: SchemaReactComponents,
  mode: DeviceType | null
) {
  const [SchemaField, setSchemaField] =
    useState<ReturnType<typeof createSchemaField>>();
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: { registerComponent: designComponent },
  } = useFlityDesignContext();
  const registerComponent: SchemaReactComponents = {
    ...components,
  };
  designComponent.map((el) => {
    registerComponent[el.name] = el.component;
  });
  useDeepCompareEffect(() => {

    const fetchSchema = async () => {
      setIsLoading(true);
      const result = await createSchema(registerComponent, mode!);
      setSchemaField(() => {
        return result;
      });
      setIsLoading(false);
    };

    mode && fetchSchema();
  }, [mode, designComponent]);

  return { SchemaField, isLoading };
}
