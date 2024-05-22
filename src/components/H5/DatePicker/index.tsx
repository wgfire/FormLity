import { useForm } from "@formily/react"
import { DatePicker as AntDatePicker } from "antd-mobile"
import { Input } from "@feb/kk-design"
import { useState } from "react"
import moment from "moment"
import { DatePickerRange } from "../DatePickerRange"
import { PickerDate } from "antd-mobile/es/components/date-picker/util"

export const DatePicker = (props) => {
	const { onChange, range, value } = props
	const [ visible, setVisible ] = useState(false)
	const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
	const valueChange = (newValue: PickerDate) => {
		onChange(moment(newValue).format("YYYY-MM-DD"))
	}
	return (
		!range ? (
			<>
				<Input placeholder="请点击选择日期" readOnly onClick={() => setVisible(true)} value={value} />
				<AntDatePicker
					mouseWheel
					getContainer={
						designEnable ? document.getElementById("modeWrapper")! : undefined
					}
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

}

export default DatePicker
