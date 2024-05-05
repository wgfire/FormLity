
/**
 * 用作于拖拽的浮层
 */

import { Flex } from "@feb/kk-design"
import styles from "./index.module.less"
export interface IOverLayItemProps {
	label: string;
	required?: boolean;
	children?: React.ReactNode;
	title?: React.ReactNode;
}

export const OverLayItem = (props: IOverLayItemProps) => {

	return (
		<Flex flexDirection="column" className={styles.overlayItem} style={{width: "288px", cursor: "grabbing"}}>
			<label className={props.required ? styles.required : ""}>{props.label}</label>

			{props.children || props.title}

		</Flex>
	)

}
