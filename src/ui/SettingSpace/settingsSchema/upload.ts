import commBase from "./commBase"
export default {
	type: "object",
	properties: {
		...commBase.properties,
		maxCount: {
			type: "string",
			key: "maxCount",
			title: "最大数量",
			"x-decorator": "FormItem",
			"x-component": "InputNumber",
			"x-component-props": {
				placeholder: "请输入最大上传数量"
			}
		},
		accept: {
			type: "string",
			key: "accept",
			title: "上传类型",
			"x-decorator": "FormItem",
			"x-component": "Select",
			"x-component-props": {
				placeholder: "请选择上传类型",
				options: [
					{
						value: "image/*",
						label: "图片"
					},
					{
						value: "*/*",
						label: "不限类型"
					}
				]
			}
		},
		listType: {
			type: "string",
			key: "listType",
			title: "展示类型",
			"x-decorator": "FormItem",
			"x-component": "Select",
			"x-component-props": {
				placeholder: "请选择上传类型",
				options: [
					{
						value: "text",
						label: "文本"
					},
					{
						value: "picture",
						label: "图片列表"
					},
					{
						value: "picture-card",
						label: "图片卡片"
					}
				]
			}
		}
	}

}
