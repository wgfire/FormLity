import { observer } from "@formily/react"
import { DatePicker as AntDatePicker, List } from "antd-mobile"
import { useState } from "react"
import moment from "moment"

export const DatePickerRange = observer((props) => {
	const { onChange, value } = props
	const [ selectedType, setSelectedType ] = useState("start") // Track which date is being selected
	const [ visible, setVisible ] = useState(false)
	const handleDateChange = (date, type) => {
		const newDate = moment(date).format("YYYY-MM-DD")
		onChange({ ...value, [type]: newDate }) // Update the corresponding date in the value object
	}
	const defaultValue = selectedType === "start" ? new Date(value?.start) : new Date(value?.end)
	const renderDatePicker = () => (
		<AntDatePicker
			mode="date"
			value={defaultValue}
			getContainer={() => document.getElementById("modeWrapper")}
			onConfirm={(select) => {
				handleDateChange(select, selectedType)
				setVisible(false)
			}}
			visible={visible}
			onClose={() => setVisible(false)}
		/>
	)

	return (
		<>
			<List>
				<List.Item
					extra={value?.start || "选择"}
					onClick={() => {
						setSelectedType("start")
						setVisible(true)
					}}
				>
					<span style={{fontSize: "14px"}}>开始时间</span>
				</List.Item>
				<List.Item
					extra={value?.end || "选择"}
					onClick={() => {
						setSelectedType("end")
						setVisible(true)
					}}
				>
					<span style={{fontSize: "14px"}}>结束时间</span>
				</List.Item>
			</List>
			{renderDatePicker()}
		</>
	)
})
