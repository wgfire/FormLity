import { Input} from "antd-mobile"

export const TextArea = (props)=>{
	return (
		<Input
		 type="text"
			{...props}
		/>
	)
}

export default TextArea
