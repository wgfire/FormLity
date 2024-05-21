/**
 * 地址选择器
 */


import { observer } from "@formily/react"
import { Cascader } from "../Cascader"

export const AddressPicker = observer((props)=>{

	return <Cascader {...props}  />

})

export default AddressPicker
