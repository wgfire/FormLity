import { Flex } from "@feb/kk-design"
import styles from "./index.module.less"
import clsx from "clsx"
export const ModeWrapper = (props) => {
	const { mode, preview } = props

	return (
		<Flex
			id="modeWrapper"
			className={clsx({
				[styles.modeWrapper]: true,
				[styles.preview]: preview,
				[styles.pcWrapper]: mode === "pc",
				[styles.mobileWrapper]: mode === "mobile",
			})}
		>
			<div className={clsx(
				{
					[styles.overlay]: true,


				}
			)}>
				{props.children}
			</div>
		</Flex>
	)
}
