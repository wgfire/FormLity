/**
 *
 */
import { Picker } from "antd-mobile";
import React, { useState } from "react";
import { Flex } from "@feb/kk-design";
import { ICbaseProps } from "@/global";
import { PickerColumn } from "antd-mobile/es/components/picker-view";
import { useForm } from "@formily/react";

import { TriggerBox } from "../TriggerBox";

const Select: React.FC<
  Omit<ICbaseProps, "options"> & { options: PickerColumn }
> = (props) => {
  const { onChange, options = [], value = "" } = props;
  const [visible, setVisible] = useState(false);
  const selectLabel = options.find((item) => item.value === value[0])?.label;
  const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
  return (
    <Flex>
      <TriggerBox
        onClick={() => setVisible(true)}
        value={selectLabel}
      ></TriggerBox>

      <Picker
        columns={[options]}
        getContainer={
          designEnable ? document.getElementById("modeWrapper")! : undefined
        }
        onSelect={(select) => {
          console.log(select, "选择");
          onChange(select);
        }}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      />
    </Flex>
  );
};
export default Select;
