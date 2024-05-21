import { Switch as AntSwitch } from "@feb/kk-design"
import { connect, mapProps } from "@formily/react"

export const Switch = connect(
	AntSwitch,
	mapProps(
		{
			value: "checked"
		},
		(props) => {
			return {
				...props
			}
		}
	)
)
export default Switch