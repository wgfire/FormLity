/**
 * 地址选择器
 */

import { useMount } from "ahooks"
import { usePresenter } from "./presenter"
import { observer } from "@formily/react"
import { Cascader } from "../Cascader"

import { useState } from "react"
import { useForm } from "@formily/react"
export const AddressPicker = observer((props)=>{
	const [ dataSource, setDataSource ] = useState([])
	//const form = useForm()
	// const {designEnable, mode} = form?.props?.data ?? {}
	const {getAddressList} = usePresenter()

	useMount(()=>{
		const list = getAddressList()
		console.log("data:", list)
		setDataSource(list)

	})
	return <Cascader {...props} changeOnSelect />

})

export default AddressPicker
