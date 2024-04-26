import commBase from "./commBase"
export default {
	type: "object",
	properties: {
		...commBase.properties,
		allowHalf: {
			type: "boolean",
			key: "allowHalf",
			title: "是否半星",
			"x-decorator": "FormItem",
			"x-component": "Switch",
			"x-component-props": {
			}
		},
		count: {
			type: "number",
			key: "count",
			title: "星星数量 ⭐",
			"x-decorator": "FormItem",
			"x-component": "InputNumber",
			"x-component-props": {
			}
		},
	}

}
