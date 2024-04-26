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
		checkedChildren: {
			type: "string",
			key: "checkedChildren",
			title: "已开启状态描述",
			"x-decorator": "FormItem",
			"x-component": "Input",
			"x-component-props": {
			}
		},
		unCheckedChildren: {
			type: "string",
			key: "unCheckedChildren",
			title: "已关闭状态描述",
			"x-decorator": "FormItem",
			"x-component": "Input",
			"x-component-props": {
			}

		}
	}
}
