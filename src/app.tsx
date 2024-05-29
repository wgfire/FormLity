import { FormLityContext } from "./core/components/FormLityContext";
import { FormDesign } from "./ui/FormDesign";
import { useFlitySate } from "./core/hooks/useFlitySate";
import { FormLityRender } from "./core/components/FormLityRender";
import { useRef } from "react";
import { FormLityPreview } from "./core/components/FormLityPreview";
import { Button } from "@feb/kk-design";
import { useRegister } from "./core";
import { Select } from "./components/PreviewText/components/Select";
import Text from "./decorator/components/Text";
import { Upload } from "./components";

const FormDesignApp = () => {
  const { state, setState } = useFlitySate({
    designEnable: false,
    readOnly: false,
    mode: "pc",
    formSchema: {
      _isJSONSchemaObject: true,
      version: "2.0",
      type: "object",
      "x-data": {
        isContainer: true,
        isRoot: true,
      },
      key: "root",
      properties: {
        "formgrid-1715668795773_17961402": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "formgrid-1715668795773_17961402",
          title: "栅格",
          type: "void",
          "x-component": "FormGrid",
          "x-data": {
            isContainer: true,
          },
          properties: {
            "textarea-1715668798444_87311022": {
              _isJSONSchemaObject: true,
              version: "2.0",
              key: "textarea-1715668798444_87311022",
              title: "多行输入框",
              type: "string",
              required: true,
              "x-component": "TextArea",
              "x-decorator": "FormItem",
              "x-component-props": {},
              "x-data": {},
              name: "textarea-1715668798444_87311022",
            },
            "input-1715668801709_174580676": {
              _isJSONSchemaObject: true,
              version: "2.0",
              key: "input-1715668801709_174580676",
              title: "单行输入框",
              type: "string",
              required: true,
              "x-component": "Input",
              "x-decorator": "FormItem",
              "x-component-props": {},
              "x-data": {
                preview: true,
                previewType: "Text",
              },
              name: "input-1715668801709_174580676",
            },
          },
          name: "formgrid-1715668795773_17961402",
        },
        "inputnumber-1715668803060_66315412": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "inputnumber-1715668803060_66315412",
          title: "数字输入框",
          type: "string",
          required: true,
          "x-component": "InputNumber",
          "x-decorator": "FormItem",
          "x-component-props": {
            title: "数字输入框",
            required: true,
            min: 2,
          },
          "x-data": {
            preview: true,
            previewType: "Text",
          },
          name: "inputnumber-1715668803060_66315412",
        },
        "select-1715668804315_71251342": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "select-1715668804315_71251342",
          title: "下拉选择器",
          type: "string",
          required: true,
          "x-component": "Select",
          "x-decorator": "FormItem",
          "x-component-props": {
            title: "下拉选择器",
            required: true,
            options: [
              {
                label: "选项一",
                value: "1715668826284_32574706",
              },
              {
                label: "选项一",
                value: "1715668827044_13862254",
              },
            ],
          },
          "x-data": {
            preview: true,
            previewType: "Select",
          },
          name: "select-1715668804315_71251342",
        },
        "cascader-1715668805484_900853901": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "cascader-1715668805484_900853901",
          title: "联级选择器",
          type: "string",
          required: true,
          "x-component": "Cascader",
          "x-decorator": "FormItem",
          "x-component-props": {
            title: "联级选择器",
            required: true,
            options: [
              {
                label: "选项一",
                value: "1715668828836_451024517",
                children: [
                  {
                    label: "选项一/2",
                    value: "1715913958373_774353487",
                  },
                ],
              },
              {
                label: "选项一",
                value: "1715668829485_112814544",
              },
            ],
          },
          "x-data": {
            preview: true,
            previewType: "Select",
          },
          name: "cascader-1715668805484_900853901",
        },
        "datepicker-1715668807508_12711714": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "datepicker-1715668807508_12711714",
          title: "日期选择器",
          type: "string",
          required: true,
          "x-component": "DatePicker",
          "x-decorator": "FormItem",
          "x-component-props": {
            range: false,
          },
          "x-data": {
            preview: true,
            previewType: "Text",
          },
          name: "datepicker-1715668807508_12711714",
        },
        "checkboxgroup-1715668810044_065643674": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "checkboxgroup-1715668810044_065643674",
          title: "多选",
          type: "string",
          required: true,
          "x-component": "CheckBoxGroup",
          "x-decorator": "FormItem",
          "x-component-props": {
            title: "多选",
            required: true,
            options: [
              {
                label: "选项一",
                value: "1715668832549_77225368",
              },
              {
                label: "选项一",
                value: "1715668833028_841213735",
              },
            ],
          },
          "x-data": {
            preview: true,
            previewType: "Select",
          },
          name: "checkboxgroup-1715668810044_065643674",
        },
        "rate-1715668812500_808594475": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "rate-1715668812500_808594475",
          title: "评分",
          type: "string",
          required: true,
          "x-component": "Rate",
          "x-decorator": "FormItem",
          "x-component-props": {},
          "x-data": {},
          name: "rate-1715668812500_808594475",
        },
        "slider-1715668815741_62025004": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "slider-1715668815741_62025004",
          title: "滑块",
          type: "string",
          required: true,
          "x-component": "Slider",
          "x-decorator": "FormItem",
          "x-component-props": {},
          "x-data": {},
          name: "slider-1715668815741_62025004",
        },
        "timepicker-1715668815741_62025004": {
          _isJSONSchemaObject: true,
          version: "2.0",
          key: "timepicker-1715668815741_62025004",
          title: "时间选择",
          type: "string",
          required: true,
          "x-component": "TimePicker",
          "x-decorator": "FormItem",
          "x-component-props": {},
          "x-data": {},
          name: "timepicker-1715668815741_62025004",
        },
      },
    },
  });
  console.log(state, "state");
  const initialValues = {
    "slider-1715048596753_67052219": 4,
    "select-1715668804315_71251342": ["1715668827044_13862254"],
    "checkboxgroup-1715668810044_065643674": [
      "1715668832549_77225368",
      "1715668833028_841213735",
    ],
    "rate-1715668812500_808594475": 5,
    "cascader-1715668805484_900853901": [
      "1715668828836_451024517",
      "1715913958373_774353487",
    ],
    "datepicker-1715668807508_12711714": "",
    "timepicker-1715668815741_62025004":"",
    "upload-1715668850644_81507394": [
      {
        uid: "000/33311667307327/FosSlGa9pcsCLazS5Vqk4SFQs1mb.gif",
        id: "rc-upload-1715855500675-3",
        name: "dragbug.gif",
        status: "done",
        process: 100,
        url: "https://ts1.cn.mm.bing.net/th/id/R-C.b8e84a0907bf9b5128dfa48be0ae48af?rik=tfH6k%2fT3hkauqw&riu=http%3a%2f%2fwww.08lr.cn%2fuploads%2fallimg%2f220330%2f1-2300141M0.jpg&ehk=dR6hTo1o7lNsHkpE62oIzMtJ%2bmxktf7%2fx6tp3Zt2uB8%3d&risl=&pid=ImgRaw&r=0",
        key: "000/33311667307327/FosSlGa9pcsCLazS5Vqk4SFQs1mb.gif",
      },
    ],
  };

  const ref = useRef(null);

  useRegister([
    {
      name: "Upload",
      component: Upload,
      customPreview: false,
    },
  ]);

  return (
    <>
      {/* <FormDesign></FormDesign> */}
      {/* <FormLityPreview
        initialValues={initialValues}
        layout="horizontal"
      ></FormLityPreview> */}
      <FormLityRender
        initialValues={initialValues}
        onValuesChange={(e) => console.log(e)}
        ref={ref}
        layout="horizontal"
      ></FormLityRender>
      <Button onClick={() => ref.current?.designForm?.submit()}>保存</Button>
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
