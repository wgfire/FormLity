
/**
 * 用作于拖拽的浮层
 */

import { Flex } from "@feb/kk-design"
import styles from "./index.module.less"
export const OverLayItem = (props) => {

	return (
		<Flex flexDirection="column" className={styles.overlayItem} style={{width: "288px", cursor: "grabbing"}}>
			<label className={props.required ? styles.required : ""}>{props.label}</label>

			{props.children || props.title}

		</Flex>
	)

}
