/* @ts-nocheck */
import { SchemaReactComponents, createSchemaField } from "@formily/react";

import React, { lazy } from "react";
import * as ICONS from "@ant-design/icons";

import { Input, Switch, Slider } from "antd-mobile";
import { Input as AntInput } from "@feb/kk-design";

const CheckBoxGroup = lazy(() => import("../../../components/CheckBoxGroup"));
const RadioGroup = lazy(() => import("../../../components/RadioGroup"));

const Upload = lazy(() => import("../../../components/Upload"));
const TimePicker = lazy(() => import("../../../components/TimePicker"));

const InputNumber = lazy(() => import("../../../components/H5/inputNumber"));
const Cascader = lazy(() => import("../../../components/H5/Cascader"));
const Select = lazy(() => import("../../../components/H5/Select"));
const DatePicker = lazy(() => import("../../../components/H5/DatePicker"));
const AddressPicker = lazy(() => import("../../../components/H5/AddressPicker"));
const Divider = lazy(() => import("../../../decorator/components/Divider"));
const Text = lazy(() => import("../../../decorator/components/Text"));
console.log("加载mobile组件");
export const createSchema = (components: SchemaReactComponents) => {
  const TextArea = AntInput.TextArea;
  const SchemaField = createSchemaField({
    components: {
      Input,
      InputNumber,
      Switch,
      Slider,
      Select,
      Cascader,
      Divider,
      Text,
      DatePicker,
      TimePicker: TimePicker,
      TextArea,
      RadioGroup,
      CheckBoxGroup,
      AddressPicker,
      Upload,
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
