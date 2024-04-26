/* eslint-disable react-refresh/only-export-components */
import { createSchemaField } from "@formily/react";
import React, { lazy } from "react";
import * as ICONS from "@ant-design/icons";
import {
  Input,
  Switch,
  InputNumber,
  Select,
  Rate,
  Cascader,
  Slider,
} from "@feb/kk-design";

const DatePicker = lazy(() => import("../../../components/DatePicker"));
const CheckBoxGroup = lazy(() => import("../../../components/CheckBoxGroup"));
const RadioGroup = lazy(() => import("../../../components/RadioGroup"));
const AddressPicker = lazy(() => import("../../../components/AddressPicker"));
const Upload = lazy(() => import("../../../components/Upload"));
const TimePicker = lazy(() => import("../../../components/TimePicker"));
const Divider = lazy(() => import("../../../decorator/components/Divider"));
const Text = lazy(() => import("../../../decorator/components/Text"));
console.log("加载pc组件");

export const createSchema = (components: {
  [key: string]: React.ReactElement;
}) => {
  const TextArea = Input.TextArea;
  const SchemaField = createSchemaField({
    components: {
      Input,
      Switch,
      InputNumber,
      DatePicker,
      TimePicker: TimePicker,
      TextArea,
      Select,
      RadioGroup,
      CheckBoxGroup,
      Divider,
      Rate,
      Cascader,
      Upload,
      Slider,
      AddressPicker,
      Text,
      ...components,
    },
    scope: {
      icon(name: keyof typeof ICONS) {
        return React.createElement(ICONS[name]);
      },
    },
  });

  return SchemaField;
};
export default createSchema;
