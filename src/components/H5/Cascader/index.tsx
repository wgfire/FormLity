/**
 *
 */
import { Cascader as CascaderPicker, Button } from "antd-mobile"
import { useState } from "react"
import { Input } from "@feb/kk-design"
import { useForm } from "@formily/react"

export const Cascader = (props) => {
	const { onChange, options = [], value = [] } = props
	const [ visible, setVisible ] = useState(false)
	const selectLabel = findLabels(options, value).join(",")
	const form = useForm()
	const { designEnable, mode } = form?.props?.data ?? {}

	return (
		<>
			<Input placeholder="请点击选择数据" readOnly onClick={() => setVisible(true)} value={selectLabel} />
			<CascaderPicker
				mouseWheel
				getContainer={() => document.getElementById("modeWrapper")}
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

function findLabels (treeData, valueArray) {
	const labels = []

	function traverse (data) {
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
