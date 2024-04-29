import { Select } from "@feb/kk-design"
import { observer} from "@formily/react"
import { useRef, useState } from "react"
import { ModalSelect } from "./components/Modal"

export const OrganizationSelect = observer((props) => {
	const { value, onChange, placeholder, externalLoad, externalSearchUser, organization } = props
	const [ open, setOpen ] = useState(false)
	const selectData = useRef([])
	const [ options, setOptions ] = useState([])
	return (
		<div>
			<Select
				maxTagCount={10}
				value={value}
				options={options}
				style={{width: "100%"}}
				placeholder={placeholder}
				fieldNames={{ label: "name", value: "id" }}
				mode="multiple"
				onChange={(keys) => {
					selectData.current = selectData.current.filter((item) => keys.includes(item.id))
					onChange(keys)
				}}

				open={false}
				onClick={() => setOpen(true)}
			/>

			<ModalSelect
				onCancel={() => setOpen(false)}
				open={open}
				externalLoad={externalLoad}
				externalSearchUser={externalSearchUser}
				organization={organization}
				defaultSelect={selectData.current}
				onSubmit={(data) => {
					setOpen(false)
					setOptions(data)
					selectData.current = data
					onChange(data.map(item => item.id))

				}}
			/>
		</div>
	)
})

export default OrganizationSelect
