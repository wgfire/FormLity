import commBase from "./commBase"
export default {
	type: "object",
	properties: {
		...commBase.properties,
		// disableRange: {
		// 	type: "string",
		// 	key: "disableRange",
		// 	title: "可选范围",
		// 	"x-decorator": "FormItem",
		// 	"x-component": "OrganizationSelect",
		// 	"x-component-props": {
		// 		placeholder: "请选择可选范围"
		// 	}
		// }
	}

}
