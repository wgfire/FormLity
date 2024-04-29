import { Button, Checkbox, Empty, Spin } from "@feb/kk-design"
import { usePresenter } from "./presenter"
import styles from "./index.module.less"
import { SelectCheckBox } from "../../../SelectCheckBox"
import { useUpdateEffect } from "ahooks"
import { memo, useEffect, useMemo } from "react"

export const SelectPanel = memo((props) => {
	const { panelData, onChecked, onLoad, checkedKeys, onCheckedAll } = props
	const { state, setState, getAllCheckeds } = usePresenter()
	const { loading } = state
	const panelDataKey = panelData.map(el => el.id)
	const checkedAllKey = checkedKeys.filter(el => panelDataKey.includes(el))
	const checkedKeyIsAll = (panelDataKey.length === checkedAllKey.length) && checkedAllKey.length > 0

	const setCheckeds = (value) => {
		let newCheckeds = [...checkedKeys]
		if (newCheckeds.includes(value)) {
			newCheckeds = newCheckeds.filter(el => el !== value)
		} else {
			newCheckeds.push(value)
		}

		onChecked(newCheckeds)
	}
	useUpdateEffect(() => {
		setState((draft) => {
			draft.loading = false
		})
	}, [panelData])

	const setAllChecked = ((e) => {
		const newCheckeds = e.target.checked ? getAllCheckeds(panelData) : []

		//onChecked(newCheckeds)
		if (onCheckedAll) {
			onCheckedAll?.(e.target.checked, [...getAllCheckeds(panelData)])
		} else {
			onChecked(newCheckeds)

		}

	})

	return (
		<Spin spinning={loading}>
			<section>
				<Checkbox
					indeterminate={(checkedAllKey.length > 0 && checkedAllKey.length < panelData.length) }
					checked={checkedKeyIsAll} defaultChecked={false} onChange={setAllChecked}
				>{checkedKeyIsAll ? "全选" : "全不选"}
				</Checkbox>
			</section>
			<section className={styles.selectPanel}>
				{
					panelData.length > 0 ? panelData.map((item => {
						return (
							<SelectCheckBox
								suffix={(item.type !== "user" && item.type !== "partner") && <Button type="text">展开</Button>}
								onActionClick={(value) => {
									setState((draft) => {
										draft.loading = true
									})
									onLoad(value)
								}}
								key={item.id} item={item} checked={checkedKeys.includes(item.id)} onChange={(id) => {
									setCheckeds(id)
								}}
							/>
						)
					})) : <Empty />

				}

				<section />
			</section>
		</Spin>

	)
})
