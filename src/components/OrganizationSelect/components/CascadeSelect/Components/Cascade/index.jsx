
import { useMemo } from "react"
import { FilterBar } from "./Components/FilterBar"
import { SelectPanel } from "./Components/SelectPanel"

export const Cascade = (props) => {
	const { listTree, onChecked, onLoad, currentKey, setCurrentKey, checkedKeys, onCheckedAll } = props

	/**加载当前组织对应的树形数据 */
	const selectPanelData = useMemo(() => {
		let result = []
		const findTreeItemById = (eachData) => {
			if (currentKey === eachData.id) {
				return eachData.children
			}
			if (eachData.children && eachData.children.length > 0) {
				for (let index = 0; index < eachData.children.length; index++) {
					const element = eachData.children[index]
					const item = findTreeItemById(element)
					if (item) {
						return item
					}
				}
			}
			return null
		}

		result = findTreeItemById(listTree)
		return result?.length > 0 ? result : []

	}, [ listTree, currentKey ])
	return (
		<section >
			<FilterBar filterData={listTree} currentKey={currentKey} onClickHandel={setCurrentKey} />
			<SelectPanel
				panelData={selectPanelData}
				onChecked={onChecked}
				onCheckedAll={onCheckedAll}
				checkedKeys={checkedKeys}
				onLoad={onLoad}
			/>
		</section>
	)
}
