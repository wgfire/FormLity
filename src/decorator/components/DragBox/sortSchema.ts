import { findSchemaByKey } from "../../../core/utils/find"
import { Schema } from "@formily/react"

export function sortSchema (startSchema, endSchema) {

	const rootSchema = startSchema.root
	if (startSchema.key === endSchema.key || startSchema.parent === endSchema) {
		return rootSchema.toJSON()
	}
	const isRootMove = startSchema.parent === rootSchema
	const endIsContainer = endSchema["x-data"]?.isContainer

	// .同级移动
	//  1. startSchema和endSchema都是普通元素，并且不是容器
	if (startSchema.parent === endSchema.parent) {
		console.log("同级移动")
		const properties = moveSchema(startSchema.parent, startSchema, endSchema)
		if (isRootMove) {
			rootSchema.properties = properties
		} else {
			// 在其他容器中移动
			const result = findSchemaByKey(rootSchema, startSchema.parent.key)
			result.properties = properties
		}

	} else if (startSchema.parent.key !== endSchema.key) {
		// 1 父级里的元素插入到某个子父级 -获取这个子级的父级
		// 2. 父级里的元素插入到某个容器
		// 3. 从容器拖拽子级到其他父级
		console.log("不同级移动")
		startSchema.parent.removeProperty(startSchema.key)
		const parent = endIsContainer ? endSchema : endSchema.parent

		//const result = findSchemaByKey(schema, endSchema.parent.key)
		parent.addProperty(startSchema.key, startSchema)
		console.log(Object.keys(parent.properties), "添加后的parent")
		const properties = moveSchema(parent, startSchema, endSchema)
		parent.properties = properties

	}

	return rootSchema.toJSON()
}

const moveSchema = (parent, startSchema, endSchema) => {
	let newProperties = parent.properties
	const keys = Object.entries(newProperties)
	const keysBackup = [...keys]
	const startIndex = keys.findIndex(item => item[0] === startSchema.key)
	const endIndex = keys.findIndex(item => item[0] === endSchema.key)
	if (endIndex > -1) {
		keys.splice(startIndex, 1)
		keys.splice(endIndex, 0, keysBackup[startIndex])
	}
	const properties = Object.fromEntries(keys)
	return properties
}

