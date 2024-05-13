import commonBase from "./commBase"
import Input from "./input"
import TextArea from "./textArea"
import Number from "./number"
import Select from "./select"
import RadioGroup from "./radioGroup"
import Slider from "./slider"
import Switch from "./switch"
import TimePicker from "./timePicker"
import DatePicker from "./datePicker"
import Cascader from "./cascader"
import organizationSelect from "./organizationSelect"
import upload from "./upload"
import FormGrid from "./formGrid"
import Divider from "./divider"
import Rate from "./rate"
import Text from "./text"
const CheckGroup = {
	...RadioGroup
}
// type SettingsSchema =  typeof commonBase  
export const settingsSchema = {
	"Input": Input,
	"TextArea": TextArea,
	"InputNumber": Number,
	"Select": Select,
	"RadioGroup": RadioGroup,
	"CheckBoxGroup": CheckGroup,
	"Slider": Slider,
	"Switch": Switch,
	"TimePicker": TimePicker,
	"DatePicker": DatePicker,
	"Cascader": Cascader,
	"AddressPicker": commonBase,
	"OrganizationSelect": organizationSelect,
	"Upload": upload,
	"FormGrid": FormGrid,
	"Divider": Divider,
	"Rate": Rate,
	"Text": Text
}

export default settingsSchema
