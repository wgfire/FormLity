import { observer } from "@formily/react"
import { DatePicker as AntDatePicker } from "antd-mobile"
import { Input } from "@feb/kk-design"
import { useState } from "react"
import moment from "moment"
import { DatePickerRange } from "../DatePickerRange"

export const DatePicker = observer((props) => {
	const { onChange, range, value } = props
	const [ visible, setVisible ] = useState(false)
	const valueChange = (newValue) => {
		onChange(moment(newValue).format("YYYY-MM-DD"))
	}
	console.log(props, "props")
	return (
		!range ? (
			<>
				<Input placeholder="请点击选择日期" readOnly onClick={() => setVisible(true)} value={value} />
				<AntDatePicker
					mouseWheel
					getContainer={() => document.getElementById("modeWrapper")}
					onConfirm={(select) => {
						valueChange(select)
						setVisible(false)
					}}
					visible={visible}
					onClose={() => {
						setVisible(false)
					}}
				/>
			</>
		) : (
			<>
				<DatePickerRange onChange={onChange} value={value}/>
			</>
		)
	)

})

export default DatePicker
