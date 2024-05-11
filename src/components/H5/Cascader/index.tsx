/**
 *
 */
import { CascaderOption, Cascader as CascaderPicker } from "antd-mobile"
import { useState } from "react"
import { Input } from "@feb/kk-design"


export interface CascaderProps {
  value: CascaderOption[];
	options:CascaderOption[];
  cascader?: boolean;
  onChange(value: CascaderProps["value"]): void;
}
export const Cascader:React.FC<CascaderProps> = (props) => {
	const { onChange, options = [], value = [] } = props
	const [ visible, setVisible ] = useState(false)
	const selectLabel = findLabels(options, value).join(",")

	return (
		<>
			<Input placeholder="请点击选择数据" readOnly onClick={() => setVisible(true)} value={selectLabel} />
			<CascaderPicker
				getContainer={() => document.getElementById("modeWrapper")!}
				options={options}
				onSelect={(select) => {
					onChange(select)
				}}
				visible={visible}
				onClose={() => {
					setVisible(false)
				}}
			/>
		</>
	)
}
export default Cascader

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
