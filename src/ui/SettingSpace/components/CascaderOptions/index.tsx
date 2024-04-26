import { Breadcrumb, Flex } from "@feb/kk-design"
import { Options } from "../Options"
import { useMemo, useState } from "react"
import { observer } from "@formily/react"
import _ from "lodash"

/**
 * @description 给级联组件添加配置项
 */
let saveActive = "index" // 用于保持当前组件重新渲染后 选中的选项
export const CascaderOptions = observer((props) => {
	const { value: options, onChange } = props
	const localOptions = [{label: "首页菜单", value: "index", children: options}]
	const [ active, setActive ] = useState(saveActive)

	const currentOptions = findKeyItem(localOptions, active)?.item?.children ?? []

	const onChangeHandel = (newOptions)=>{
		const newLocalOptions = _.cloneDeep(localOptions)
		const currentItem = findKeyItem(newLocalOptions, active).item
		currentItem.children = newOptions
		onChange(newLocalOptions[0].children)
	}

	const onAddCascader = (item) => {
		setActive(item.value)
		saveActive = item.value

		const currentItem = findKeyItem(localOptions, item.value).item
		if (!currentItem.children) {
			currentItem.children = []
		}

	}

	return (
		<Flex flexDirection="column">
			<Flex>

				<Breadcrumb>
					{
						findKeyItem(localOptions, active)?.parentPath?.map((item, index) => {
							return (
								<Breadcrumb.Item
									key={index}
									onClick={() => setActive(item.value)}
								><span>{item.label}</span>
								</Breadcrumb.Item>
							)
						})
					}

				</Breadcrumb>

			</Flex>
			<Options value={currentOptions} cascader onAddCascader={onAddCascader} onChange={onChangeHandel} />
		</Flex>
	)
})
export default CascaderOptions
function findKeyItem (treeData, targetValue) {
	let result = null
	let parentPath = []

	function traverse (data) {
		for (const item of data) {
			parentPath.push({ label: item.label, value: item.value }) // 在进入子节点之前添加当前节点标签
			if (item.value === targetValue) {
				result = item
				return true // 找到目标值，停止遍历
			}

			if (item.children && traverse(item.children)) {
				return true // 找到目标值，停止遍历
			}
			parentPath.pop() // 回溯，移除当前节点标签
		}
		return false // 未找到目标值
	}

	traverse(treeData)
	return { parentPath, item: result }
}
