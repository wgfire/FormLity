/**
 *
 */
import { Picker } from "antd-mobile";
import React, { useState } from "react";
import { Flex, Input } from "@feb/kk-design";
import { ICbaseProps } from "@/global";
import { PickerColumn } from "antd-mobile/es/components/picker-view";
import { useForm } from "@formily/react";

const Select: React.FC<Omit<ICbaseProps, "options"> & { options: PickerColumn }> = (props) => {
  const { onChange, options = [], value = "" } = props;
  const [visible, setVisible] = useState(false);
  const selectLabel = options.find((item) => item.value === value[0])?.label;
  const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
  return (
    <Flex>
      <Input placeholder="请点击选择数据" readOnly onClick={() => setVisible(true)} value={selectLabel} />
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
