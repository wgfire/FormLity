import { Empty, Flex, Form } from "@feb/kk-design"
import { useFormDesignContext } from "../../core/context"
import { Suspense, memo, useCallback, useEffect, useMemo } from "react"
import { settingsSchema } from "./settingsSchema"
import { FormProvider, observer, useForm } from "@formily/react"
import { createForm, onFormInit, onFormMount, onFormValuesChange } from "@formily/core"
import { FormItem, Switch, Options, CascaderOptions } from "./components/index"
import { createSchema } from "../../core/createSchemaField"
import { useDebounceFn } from "ahooks"
import { findSchemaByKey } from "../../core/utils/find"
import { usePresenter } from "./presenter"
import { useLazySchemaField } from "../../core/hooks/useLazySchemaField"
import styles from "./index.module.less"
import clsx from "clsx"
export const SettingSpace = memo((props) => {
	const { style } = props
	const { state, setState, emptyStatus } = useFormDesignContext()
	const { selectFieldSchema } = state
	const { generateValues } = usePresenter()
	const componentType = selectFieldSchema?.["x-component"] ?? ""
	const settingSchema = settingsSchema[componentType] ?? ""
	const findSelectFieldSchema = selectFieldSchema ? findSchemaByKey(state.formSchema, selectFieldSchema.key) : {}
	const initialValues = generateValues(findSelectFieldSchema, {})

	const [ SchemaField, isLoading ] = useLazySchemaField({ FormItem, Switch, Options, CascaderOptions }, "pc")

	console.log(initialValues, "init")
	const { run: valuesChange } = useDebounceFn(useCallback((form) => {
		setState((draft) => {
			//pushHistory(state.formSchema)//将旧版的添加到记录
			const schema = findSchemaByKey(draft.formSchema, selectFieldSchema.key)
			const values = JSON.parse(JSON.stringify(form.values))
			generateValues(values, schema, false)

		})

	}, [selectFieldSchema]), 100)

	const settingForm = useMemo(() => {
		return createForm({
			validateFirst: false,
			initialValues: initialValues,
			effects () {
				onFormValuesChange(valuesChange)
			}
		})
	}, [initialValues])
	const visible = useMemo(()=>{
		return !!selectFieldSchema && state.designEnable && !emptyStatus
	}, [ selectFieldSchema, state.designEnable, emptyStatus ])

	return (
		<Flex className={clsx(styles.settingSpace, {[styles.visible]: visible})} style={{ ...style }} justifyContent="center">
			{selectFieldSchema &&
				<>
					{settingSchema ? (
						<FormProvider form={settingForm} >
							<Form layout="vertical" style={{ width: "100%" }}>
								<Suspense fallback={<div>Loading...</div>}>
									<SchemaField schema={settingSchema} />
								</Suspense>

							</Form>
						</FormProvider>
					) : <Empty description="别急，当前组件暂不支持配置属性！" />}
				</>
			}
		</Flex>
	)
})
