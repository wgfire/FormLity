/**
 * 级联搜索选择器
 */

import { Empty, Spin } from "@feb/kk-design"
import styles from "./index.module.less"

import { Cascade } from "./Components/Cascade"
import { SelectPanel } from "./Components/Select"
import { usePresenter } from "./presenter"
import { memo, useEffect } from "react"
import clsx from "clsx"

export const CascadeSelect = memo((props) => {
	const { style, onLoad, onSelectKeys, sourceData, selectData,
		checkedKeys, onSelectData, searchBox, loading, tabs,
		onTabChange, activeTab, onCheckedAll, onTreeDataChange} = props
	const { state, setState, insertDataByParentId, createSelectData } = usePresenter()
	const { currentKey, interiorSourceData } = state

	useEffect(()=>{
		if (!interiorSourceData || activeTab) {
			setState((draft)=>{
				draft.interiorSourceData = sourceData
			})
		}
	}, [ sourceData, activeTab ])

	const uniqueArr = (arr)=>{
		return arr.filter((item, index, self) => {
			return index === self.findIndex((t) => t.id === item.id)
		  })

	}

	const updateKeys = (keys)=>{
		// 调用onSelectKeys函数
		onSelectKeys(keys)

		// 设置state
		setState(()=>{
			// 创建新的selectData
			let newSelectData = createSelectData(interiorSourceData, keys)

			// 创建新的filterSelect
			let filterSelect = [...selectData]

			// 如果keys的长度小于checkedKeys的长度
			if (keys.length < checkedKeys.length) {
				// 获取需要删除的keys
				const deleteKeys = checkedKeys.filter((item)=>!keys.includes(item))

				// 过滤filterSelect
				filterSelect = filterSelect.filter((item)=>!deleteKeys.includes(item.id))
			}

			// 合并新的selectData和filterSelect
			newSelectData = uniqueArr([ ...newSelectData, ...filterSelect ])

			// console.log(newSelectData, filterSelect)

			// 调用onSelectData函数
			onSelectData(newSelectData)
		})
	}
	const clearSelectData = (id)=>{
		/**移除selectData 包含的id */
		onSelectData(selectData.filter((item)=>item.id !== id))

	}

	return (
		<Spin spinning={loading}>
			<main className={styles.mainBox} style={{ ...style }} >
				<section className={styles.mainBoxLeft} >
					{searchBox}
					{tabs &&
					<div className={styles.tabs}>
						{tabs.map((item, index) =>{
							return (
								<div
								   onClick={()=>{
										onTabChange(item.value)
								   }}
									key={index}
									className={clsx({[styles.tabsItemActive]: item.value === activeTab,
										[styles.tabsItem]: true })}
								>{item.label }
								</div>

							)
						})}
					</div>
					}
					{
						interiorSourceData ?
							<Cascade
								listTree={interiorSourceData}
								checkedKeys={checkedKeys}
								currentKey={currentKey}
								setCurrentKey={(key) => {
									setState((draft) => {
										draft.currentKey = key
									})
								}}
								onChecked={(keys) => {
									updateKeys(keys)
								}}
								onCheckedAll={onCheckedAll}
								onLoad={async (item) => {
									const data = await onLoad(item)
									const newListTree = await insertDataByParentId(item.id, data)
									 setState((draft) => {
										draft.currentKey = item.id
									})

									onTreeDataChange?.(newListTree)
									return newListTree
								}}
							/> : <Empty style={{marginTop: "36px"}}/>
					}
				</section>
				<section className={styles.mainBoxRight}>
					<SelectPanel
						data={selectData || []}
						 onClearAll={()=>{
							onSelectKeys([])
							onSelectData([])
						 }}
						onClear={(id)=>{

							const newKeys = id ? checkedKeys.filter((item)=>item !== id) : []
							updateKeys(newKeys)
							clearSelectData(id)

						}}
					/>
				</section>
			</main>
		</Spin>

	)
})
