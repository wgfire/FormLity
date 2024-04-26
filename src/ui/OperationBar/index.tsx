import { Flex, Tooltip, message } from "@feb/kk-design"
import styles from "./index.module.less"
import { LaptopOutlined, RollbackOutlined, MobileOutlined, ChromeOutlined } from "@ant-design/icons"

import { useFormDesignContext } from "../../core/context"
import { useHistorySchema } from "../../core/hooks/useHistorySchema"
import clsx from "clsx"

/**
 * @description 操作栏
 */
export const OperationBar = () => {

	const { state, setState, emptyStatus } = useFormDesignContext()
	const { onUndo, onRedo } = useHistorySchema()
	const { mode, history } = state
	const { historyStack, historyIndex } = history

	const onModeChange = (modeType) => {
		setState((draft) => {
			draft.mode = modeType
		})

	}

	const currentColor = (modeType) => {
		return mode === modeType ? "#315cec" : "black"
	}
	return (
		<Flex justifyContent="end" style={{background: "#f9f9f9"}}>
			<Flex
				gap={16}
				justifyContent="end"
				className={styles.operationBar}
			>
				{/* <div
				className={clsx(styles.iconBox, { [styles.disabled]: historyIndex < 0 || historyStack.length === 0 })}
				onClick={onUndo} style={{ background: "white" }}

			><RollbackOutlined />
			</div>
			<div
				className={clsx(styles.iconBox, { [styles.disabled]: historyIndex === historyStack.length - 1 })}
				onClick={onRedo}
			><RollbackOutlined style={{ transform: "rotateY(180deg)" }} />
			</div> */}
				<div
					className={clsx(styles.iconBox, {[styles.iconBoxActive]: mode === "pc"})}
					onClick={() => onModeChange("pc")}
				>
					<Tooltip title="pc端">
						<LaptopOutlined />
					</Tooltip>
				</div>
				<div
					className={clsx(styles.iconBox, {[styles.iconBoxActive]: mode === "mobile"})}
					onClick={() => {
						onModeChange("mobile")
					}}
				><Tooltip title="移动端">
						<MobileOutlined />
					</Tooltip>
				</div>
				{/* <div
				className={clsx(styles.iconBox)}
				onClick={() => {
					if (!emptyStatus) {
						setState((draft) => {
							// draft.readOnly = !draft.readOnly
							draft.designEnable = !draft.designEnable
						})
					} else {
						message.warning("请先拖入组件进入工作区预览")
					}

				}} style={{ color: !state.designEnable ? "#315cec" : "black" }}
			><Tooltip title="预览">
					<ChromeOutlined />
				</Tooltip>
			</div> */}

			</Flex>
		</Flex>
	)
}
