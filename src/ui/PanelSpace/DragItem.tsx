import { Flex } from "@feb/kk-design"
import styles from "./index.module.less"
import { useDrag } from "react-dnd"
import { useRef } from "react"
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
export const DragItem = (props) => {
	const {item} = props

	// const ref = useRef(null)
	// const [{isDragging}, drag ] = useDrag({
	// 	type: "DragItem",
	// 	item: item,
	// 	collect: (monitor) => ({
	// 		isDragging: monitor.isDragging() //是否拖拽状态 这里collet返回的信息是useDrag返回的第一个参数对象

	// 	})

	// })
	const {setNodeRef, transform, transition, listeners, attributes} = useDraggable({id: item.title, data: {item}})
	const styleTransform = {

	  }
	return (
		<div key={item.title} ref={setNodeRef} className={styles.panelItem} style={{...styleTransform}} {...listeners} {...attributes}>
			<Flex
				justifyContent="center"
				alignItems="center"
			>
				{item.title}
			</Flex>
		</div>
	)
}
