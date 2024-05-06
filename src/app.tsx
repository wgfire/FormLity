import { FormLityContext } from "./core/components/FormLityContext";
import { FormDesign } from "./ui/FormDesign";
import { useFlitySate } from "./core/hooks/useFlitySate";
import { FormLityRender } from "./core/components/FormLityRender";
import { useRegister } from "./core/hooks/useRegister";
import Test from "@/components/Upload";
import { useRef } from "react";
import { Button } from "@feb/kk-design";
const FormDesignApp = () => {
  const { state, setState } = useFlitySate({
    designEnable: true,
    formSchema: {
      key: "root",
      type: "object",
      "x-data": {
        isRoot: true,
        isContainer: true,
      },
      properties: {
        "textarea-1714965606666_6668904": {
          key: "textarea-1714965606666_6668904",
          type: "string",
          title: "多行输入框",
          required: true,
          "x-component": "TextArea",
          "x-decorator": "FormItem",
          "x-component-props": [],
        },
        "formgrid-1714965605595_45493283": {
          key: "formgrid-1714965605595_45493283",
          type: "void",
          title: "栅格",
          "x-data": {
            isContainer: true,
          },
          properties: {},
          "x-component": "FormGrid",
        },
        "cascader-1714965607522_241964582": {
          key: "cascader-1714965607522_241964582",
          type: "string",
          title: "级联选择器",
          required: true,
          "x-component": "Cascader",
          "x-decorator": "FormItem",
          "x-component-props": [],
        },
      },
    },
  });
  console.log(state, "state");
  useRegister([
    {
      name: "OrganizationSelect",
      component: Test,
    },
  ]);
  const ref = useRef(null);

  return (
    <>
      <FormDesign></FormDesign>
      {/* <Button onClick={() => ref.current?.designForm?.submit()}>保存</Button> */}
    </>
  );
};
export const App = () => {
  return (
    <FormLityContext>
      <FormDesignApp></FormDesignApp>
    </FormLityContext>
  );
};
