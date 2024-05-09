import { FormLityContext } from "./core/components/FormLityContext";
import { FormDesign } from "./ui/FormDesign";
import { useFlitySate } from "./core/hooks/useFlitySate";
import { FormLityRender } from "./core/components/FormLityRender";
import { useRef } from "react";
const FormDesignApp = () => {
  const { state, setState } = useFlitySate({
    designEnable: false,
    readOnly:true,
    formSchema: {
      "type": "object",
      "x-data": {
          "isContainer": true,
          "isRoot": true
      },
      "key": "root",
      "properties": {
          "slider-1715225686241_51754088": {
              "key": "slider-1715225686241_51754088",
              "title": "滑块",
              "type": "string",
              "required": true,
              "x-component": "Slider",
              "x-decorator": "FormItem",
              "x-component-props": {}
          },
          "divider-1715225693089_461272506": {
              "key": "divider-1715225693089_461272506",
              "title": "分隔符",
              "type": "void",
              "x-component": "Divider",
              "x-data": {
                  "isContainer": true
              },
              "properties": {}
          },
          "textarea-1715222668529_72354852": {
              "key": "textarea-1715222668529_72354852",
              "title": "多行输入框",
              "type": "string",
              "required": true,
              "x-component": "TextArea",
              "x-decorator": "FormItem",
              "x-component-props": {}
          },
          "select-1715225544161_13868434": {
              "key": "select-1715225544161_13868434",
              "title": "下拉选择器",
              "type": "string",
              "required": true,
              "x-component": "Select",
              "x-decorator": "FormItem",
              "x-component-props": {
                  "title": "下拉选择器",
                  "required": true,
                  "options": []
              },
              'x-data':{
                preview:true
              }
          },
          "formgrid-1715225635384_7990624": {
              "key": "formgrid-1715225635384_7990624",
              "title": "栅格",
              "type": "void",
              "x-component": "FormGrid",
              "x-data": {
                  "isContainer": true
              },
              "properties": {
                  "inputnumber-1715225636896_11693369": {
                      "key": "inputnumber-1715225636896_11693369",
                      "title": "数字输入框",
                      "type": "string",
                      "required": true,
                      "x-component": "InputNumber",
                      "x-decorator": "FormItem",
                      "x-component-props": {}
                  },
                  "cascader-1715225643385_876267098": {
                      "key": "cascader-1715225643385_876267098",
                      "title": "联级选择器",
                      "type": "string",
                      "required": true,
                      "x-component": "Cascader",
                      "x-decorator": "FormItem",
                      "x-component-props": {
                          "title": "联级选择器",
                          "required": true,
                          "options": [
                              {
                                  "label": "选项一",
                                  "value": "1715225647057_76837032"
                              },
                              {
                                  "label": "选项一",
                                  "value": "1715225647945_335627046"
                              },
                              {
                                  "label": "选项一",
                                  "value": "1715225648489_5155553"
                              }
                          ]
                      }
                  }
              }
          },
          "datepicker-1715225661320_0044521703": {
              "key": "datepicker-1715225661320_0044521703",
              "title": "日期选择器",
              "type": "string",
              "required": true,
              "x-component": "DatePicker",
              "x-decorator": "FormItem",
              "x-component-props": {}
          },
          "timepicker-1715225663385_84700679": {
              "key": "timepicker-1715225663385_84700679",
              "title": "时间选择器",
              "type": "string",
              "required": true,
              "x-component": "TimePicker",
              "x-decorator": "FormItem",
              "x-component-props": {}
          },
          "rate-1715225671376_906521964": {
              "key": "rate-1715225671376_906521964",
              "title": "评分",
              "type": "string",
              "required": true,
              "x-component": "Rate",
              "x-decorator": "FormItem",
              "x-component-props": {}
          },
          "switch-1715225677993_29627506": {
              "key": "switch-1715225677993_29627506",
              "title": "开关",
              "type": "string",
              "required": true,
              "x-component": "Switch",
              "x-decorator": "FormItem",
              "x-component-props": {}
          }
      }
  },
  });
  console.log(state, "state");
  const initialValues ={
    'slider-1715048596753_67052219':4,
    'textarea-1715048588793_20139055':'xxx',
    'select-1715048631225_9377241':'1715048635297_50265948'
  }

  const ref = useRef(null);

  return (
    <>
      {/* <FormDesign></FormDesign> */}
      <FormLityRender initialValues={initialValues}></FormLityRender>
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

