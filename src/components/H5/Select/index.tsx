/**
 *
 */
import { Picker, Cascader, Button } from "antd-mobile"
import { useState } from "react"
import { Flex, Input } from "@feb/kk-design"
import { useForm } from "@formily/react"

const Select = (props) => {
	const { onChange, options = [], value = "" } = props
	const [ visible, setVisible ] = useState(false)
	const selectLabel = options.find(item => item.value === value[0])?.label
	const form = useForm()
	const {designEnable, mode} = form?.props?.data ?? {}
	const disabled = designEnable && mode === "mobile"
	return (
		<Flex>
			<Input placeholder="请点击选择数据" readOnly onClick={() => setVisible(true)} value={selectLabel}/>
			<Picker
			   columns={[options]}
			   getContainer={() => document.getElementById("modeWrapper")}
				onSelect={(select) => {
					console.log(select, "选择")
					onChange(select)
				}}
				visible={visible}
				onClose={() => {
					setVisible(false)
				}}
			/>
		</Flex>
	)
}
export default Select

