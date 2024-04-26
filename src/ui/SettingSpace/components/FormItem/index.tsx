import { Form } from "@feb/kk-design"
import { connect, mapProps } from "@formily/react"

export const FormItem = connect(
	Form.Item,
	mapProps(
		{
			title: "label",
			description: "extra",
			required: true,
			validateStatus: true
		},
		(props, field) => {
			return {
				...props,
				checked: field.required,
				help: field.selfErrors?.length ? field.selfErrors : undefined
			}
		}
	)
)
