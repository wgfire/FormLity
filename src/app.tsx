
import { FormLityContext } from "./core/components/FormLityContext";
import { FormDesign } from "./ui/FormDesign";
import { useFlitySate } from "./core/hooks/useFlitySate";


const FormDesignApp = () => {
  const { state, setState } = useFlitySate({
    formSchema: {
      type: "object",
      "x-data": {
        isContainer: true,
        isRoot: true,
      },
      key: "root",
      properties: {
        "cascader-1714644277513_205213377": {
          key: "cascader-1714644277513_205213377",
          title: "级联选择器",
          type: "string",
          required: true,
          "x-component": "Cascader",
          "x-decorator": "FormItem",
          "x-component-props": {},
        },
      },
    },
  });
  console.log(state);

  return <FormDesign></FormDesign>;
};
export const App = () => {
  return (
    <FormLityContext>
      <FormDesignApp></FormDesignApp>
    </FormLityContext>
  );
};
