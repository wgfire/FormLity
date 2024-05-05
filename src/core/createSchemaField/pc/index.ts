/* eslint-disable react-refresh/only-export-components */
/** @ts-no-check */
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

import { DatePicker } from "../../../components/DatePicker";
import { CheckBoxGroup } from "../../../components/CheckBoxGroup";
import { RadioGroup } from "../../../components/RadioGroup";
import { AddressPicker } from "../../../components/AddressPicker";
import { Upload } from "../../../components/Upload";
import { TimePicker } from "../../../components/TimePicker";
import { Divider } from "../../../decorator/components/Divider";
import { Text } from "../../../decorator/components/Text";

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
