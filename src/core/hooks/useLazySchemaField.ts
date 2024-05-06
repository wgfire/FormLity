import { useEffect, useState } from "react";
import { createSchema } from "../../core/createSchemaField";
import { useFlityDesignContext } from "../context";
import { DeviceType } from "@/global";
export function useLazySchemaField(
  components: {
    [key: string]: React.ReactElement;
  },
  mode: DeviceType
) {
  const [SchemaField, setSchemaField] = useState<React.ReactElement>();
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: { components: designComponent = {} },
  } = useFlityDesignContext();
  const registerComponent = {
    ...components,
    ...designComponent,
  };
  console.log(designComponent, "外部注册组件");
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
