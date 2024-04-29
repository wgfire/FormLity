import { RightOutlined } from "@ant-design/icons"
import styles from "./index.module.less"
import clsx from "clsx"
import { usePresenter } from "./presenter"
import { memo, useMemo } from "react"

const FilterItem = (props) => {
	const { data, activeKey, onClickHandel } = props
	const { value, id } = data
	const activeLabel = activeKey === (id || value)
	return (
		<>
			<section
				onClick={() => {
					onClickHandel(data.id)
				}}
				key={id} className={clsx(styles.filterLabel, {
					[styles.filterActiveLabel]: activeLabel
				})}
			>
				<span>{data.name}</span>
				{!activeLabel && <RightOutlined />}

			</section>
		</>

	)
}
export const FilterBar = memo((props) => {
	const { currentKey = "", filterData, onClickHandel } = props
	const { filterList } = usePresenter()

	const renderFilterData = useMemo(() => {
		return filterData.id ? filterList(filterData, currentKey) : []
	}, [ filterData, currentKey ])

	return (
		<main className={styles.filter}>
			{
				renderFilterData ? renderFilterData.map(item => {
					return <FilterItem data={item} key={item.id} activeKey={currentKey} onClickHandel={onClickHandel} />
				}) : <></>
			}
		</main>
	)
})

