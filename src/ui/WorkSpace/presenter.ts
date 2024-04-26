
import { useFormDesignContext } from "../../core/context"
import { createSchemaItem } from "../../core/utils/create/createSchemaItem"
import { sortSchema } from "../../decorator/components/DragBox/sortSchema"
import { findSchemaByKey, findSchemaParentByKey } from "../../core/utils/find"

export const usePresenter = ()=>{
	const {setState} = useFormDesignContext()
	const dropHandel = (activeItem, over) =>{
		const overData = over.data.current
		const schemaItem = overData.schema
		const isContainer = schemaItem["x-data"]?.isContainer
		const newSchema = createSchemaItem(activeItem)

		setState(draft=>{
			if (isContainer) {
				const parent = schemaItem.key ? findSchemaByKey(draft.formSchema, schemaItem.key) : draft.formSchema
				if (!parent.properties) {
					parent.properties = {}
				}
				parent.properties[newSchema.key] = newSchema
			} else {
				//增加到目标元素的父容器中
				const parent = schemaItem.key ? findSchemaParentByKey(draft.formSchema, schemaItem.key) : draft.formSchema
				parent.properties[newSchema.key] = newSchema
				let newProperties = parent.properties
				const proKeys = Object.entries(newProperties)
				const keysBackup = [...proKeys]
				const startIndex = proKeys.findIndex(item => item[0] === newSchema.key)
				const endIndex = overData.sortable.items.findIndex(item => item === over.id)
				if (endIndex > -1) {
					proKeys.splice(endIndex, 0, keysBackup[startIndex])
				}
				const properties = Object.fromEntries(proKeys)
				parent.properties = properties
			}

		})

	}
	const overHandel = (active, over)=>{
		const overData = over?.data.current
		const activeData = active?.data.current

		//不处理从左侧面板拖拽过来
		if (activeData.schema && overData.schema) {
			if (active.id !== over?.id) {
				setState(draft=>{
					const endSchema = overData.schema["x-data"]?.isRoot ? activeData.schema.root : overData.schema
					const newSchema =	sortSchema(activeData.schema, endSchema)
					console.log(newSchema, "newSchema")
					draft.formSchema = newSchema

				})

			}
		}
	}
	const useAsyncDataSource = (type)=>{
		if (type === "address") {
			return (field)=>{
				field.dataSource = [{label: "1", value: "2"}]
			}
		}
		if (type === "organize") {
			return (field)=>{
				field.dataSource = [{label: "1", value: "2"}]
			}
		}

	}

	return {
		useAsyncDataSource,
		dropHandel,
		overHandel

	}
}
