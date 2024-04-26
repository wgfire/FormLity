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
		required: {
			type: "boolean",
			key: "required",
			title: "是否必填",
			"x-index": 2,
			"x-decorator": "FormItem",
			"x-component": "Switch",
			"x-component-props": {
				"checked": true
			}
		},
		options: {
			type: "array",
			key: "options",
			title: "选项",
			"x-decorator": "FormItem",
			"x-component": "Options",
			"x-component-props": {
				placeholder: "请输入内容"
			}
		}
	}
}
