export default {
	type: "object",
	properties: {
		title: {
			type: "string",
			key: "title",
			title: "标题",
			"x-index": 0,
			"x-decorator": "FormItem",
			"x-component": "Input",
			"x-component-props": {
				prefix: "{{icon('UserOutlined')}}",
				placeholder: "请输入内容"
			}
		},
		placeholder: {
			type: "string",
			key: "placeholder",
			title: "描述",
			"x-decorator": "FormItem",
			"x-component": "Input",
			"x-component-props": {
			}
		},
		required: {
			type: "boolean",
			key: "required",
			title: "是否必填",
			"x-decorator": "FormItem",
			"x-component": "Switch",
			"x-component-props": {
				"checked": true
			}
		},
		min: {
			type: "number",
			key: "min",
			title: "最小值",
			"x-decorator": "FormItem",
			"x-component": "InputNumber",
			"x-component-props": {
				defaultValue: 0
			}
		},
		max: {
			type: "number",
			key: "min",
			title: "最大值",
			"x-decorator": "FormItem",
			"x-component": "InputNumber",
			"x-component-props": {

			}
		}
	}
}
