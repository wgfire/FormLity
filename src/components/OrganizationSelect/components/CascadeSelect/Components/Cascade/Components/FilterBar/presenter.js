
export const usePresenter = () => {

	function filterList (dataObj, activeKey, result = []) {
		if (dataObj.id === activeKey) {
			result.unshift(dataObj) // 将匹配到的项添加到结果数组的开头
			return result
		}
		if (dataObj.children && dataObj.children.length > 0) {
			for (let i = 0; i < dataObj.children.length; i++) {
				const childResult = filterList(dataObj.children[i], activeKey, result)
				if (childResult) {
					result.unshift(dataObj) // 将包含匹配项的父级项添加到结果数组的开头
					return childResult
				}
			}
		}
		return null // 如果没有找到匹配的项，返回null
	}

	return { filterList }
}

