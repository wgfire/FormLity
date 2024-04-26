export default {
	type: "object",
	properties: {
		title: {
			type: "string",
			key: "title",
			title: "区域标题",
			"x-index": 0,
			"x-decorator": "FormItem",
			"x-component": "Input",
			"x-component-props": {
				placeholder: "对此区域进行描述"
			}
		}
	}
}
