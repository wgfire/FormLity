import { Cascader as CascaderPicker } from "antd-mobile";
import { useState } from "react";
import { Input } from "@feb/kk-design";
import { CheckListValue } from "antd-mobile/es/components/check-list";
import {
  CascaderOption,
  CascaderValueExtend,
} from "antd-mobile/es/components/cascader-view";
import { useForm } from "@formily/react";

export interface CascaderProps {
  value: CascaderOption[];
  options: CascaderOption[];
  cascader?: boolean;
  onSelect?(value: CheckListValue[], extend: CascaderValueExtend): void;
  onConfirm?(value: CheckListValue[], extend: CascaderValueExtend): void;
  onChange(value: CheckListValue[]): void;
}
export const Cascader: React.FC<CascaderProps> = (props) => {
  const { options = [], value = [] } = props;
  const [visible, setVisible] = useState(false);
  const selectLabel = findLabels(options, value).join(",");
  const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
  return (
    <>
      <Input
        placeholder="请点击选择数据"
        readOnly
        onClick={() => setVisible(true)}
        value={selectLabel}
      />
      <CascaderPicker
        getContainer={
          designEnable ? document.getElementById("modeWrapper")! : undefined
        }
        options={options}
        onSelect={props.onChange}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        onConfirm={props.onConfirm}
      />
    </>
  );
};
export default Cascader;

function findLabels (treeData:CascaderOption[], valueArray:CascaderOption[]) {
	const labels:CascaderOption = []

	function traverse (data:CascaderOption[]) {
		for (const item of data) {
			if (valueArray.includes(item.value)) {
				labels.push(item.label)
			}
			if (item.children) {
				traverse(item.children)
			}
		}
	}

	traverse(treeData)
	return labels
}