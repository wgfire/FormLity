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
      "key": "root",
      "type": "object",
      "x-data": {
        "isRoot": true,
        "isContainer": true
      },
      "version": "2.0",
      "properties": {
        "slider-1715048596753_67052219": {
          "key": "slider-1715048596753_67052219",
          "name": "slider-1715048596753_67052219",
          "type": "string",
          "title": "滑块",
          "version": "2.0",
          "required": true,
          "x-component": "Slider",
          "x-decorator": "FormItem",
          "x-component-props": [],
          "_isJSONSchemaObject": true
        },
        "formgrid-1715048590081_25366021": {
          "key": "formgrid-1715048590081_25366021",
          "name": "formgrid-1715048590081_25366021",
          "type": "void",
          "title": "栅格",
          "x-data": {
            "isContainer": true
          },
          "version": "2.0",
          "properties": {
            "select-1715048631225_9377241": {
              "key": "select-1715048631225_9377241",
              "name": "select-1715048631225_9377241",
              "type": "string",
              "title": "下拉选择器",
              "version": "2.0",
              "required": true,
              "x-component": "Select",
              "x-decorator": "FormItem",
              "x-component-props": {
                "title": "下拉选择器",
                "options": [
                  {
                    "label": "选项一",
                    "value": "1715048635297_50265948"
                  },
                  {
                    "label": "选项一",
                    "value": "1715048635850_061526738"
                  }
                ],
                "required": true
              },
              "_isJSONSchemaObject": true
            }
          },
          "x-component": "FormGrid",
          "_isJSONSchemaObject": true
        },
        "textarea-1715048588793_20139055": {
          "key": "textarea-1715048588793_20139055",
          "name": "textarea-1715048588793_20139055",
          "type": "string",
          "title": "多行输入框",
          "version": "2.0",
          "required": true,
          "x-component": "TextArea",
          "x-decorator": "FormItem",
          "x-component-props": [],
          "_isJSONSchemaObject": true
        }
      },
      "_isJSONSchemaObject": true
    },
  });
  console.log(state, "state");
  // useRegister([
  //   {
  //     name: "OrganizationSelect",
  //     component: Test,
  //   },
  // ]);
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

