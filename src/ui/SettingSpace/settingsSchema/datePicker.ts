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
				placeholder: "请输入内容"
			}
		},
		placeholder: {
			type: "string",
			key: "placeholder",
			title: "描述",
			"x-index": 1,
			"x-decorator": "FormItem",
			"x-component": "Input",
			"x-component-props": {
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

		range: {
			type: "boolean",
			key: "range",
			title: "范围选择",
			"x-decorator": "FormItem",
			"x-component": "Switch",
			"x-component-props": {
			}

		}
	}
}
