export const usePresenter = () => {
	function generateValues (formValues, targetObject, valueIsSchema = true) {
		/**title和required是 fromItem的属性单独处理 */
		targetObject.title = formValues?.title ?? ""
		targetObject.required = formValues?.required ?? false
		const componentProps = valueIsSchema ? formValues?.["x-component-props"] : formValues
		const targetSource = valueIsSchema ? targetObject : targetObject["x-component-props"] ?? {}
		for (const key in componentProps) {
			if (componentProps[key] !== undefined) {
				targetSource[key] = componentProps[key]
			}
		}
		return targetSource
	}
	return {
		generateValues
	}
}
