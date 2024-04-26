import { createSchemaField } from "@formily/react"
import * as ICONS from "@ant-design/icons"
import { Input, Switch, InputNumber, Select, Divider, Rate, Cascader, Slider} from "@feb/kk-design"
import { RadioGroup } from "../../components/RadioGroup"
import { CheckBoxGroup } from "../../components/CheckBoxGroup"
import { TimePicker } from "../../components/TimePicker"
import { DatePicker } from "../../components/DatePicker"
import { AddressPicker } from "../../components/AddressPicker"
import { OrganizationSelect } from "../../components/OrganizationSelect"
import { Upload } from "../../components/Upload"
export const createSchema = (components)=>{
	const TextArea = Input.TextArea
	const SchemaField = createSchemaField({
		components: {
			Input,
			Switch,
			InputNumber,
			DatePicker,
			TimePicker,
			TextArea,
			Select,
			RadioGroup,
			CheckBoxGroup,
			Divider,
			Rate,
			Cascader,
			Upload,
			Slider,
			AddressPicker,
			OrganizationSelect,
			...components
		},
		scope: {
			icon (name) {
				return React.createElement(ICONS[name])
			}
		}
	})

	return SchemaField

}
