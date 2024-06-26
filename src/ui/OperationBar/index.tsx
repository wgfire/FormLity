import { Flex, Tooltip } from "@feb/kk-design";
import styles from "./index.module.less";
import {
  LaptopOutlined,
  MobileOutlined,
} from "@ant-design/icons";

import { useFlityStateContext } from "../../core/context";
import clsx from "clsx";
import { useSchemaPreview } from "@/core/hooks/useSchemaPreview";
import { DeviceType } from "@/global";

/**
 * @description 操作栏
 */
export const OperationBar = () => {
  const { state, setState } = useFlityStateContext();
  const { run: runPreview } = useSchemaPreview();
  const { mode } = state;

  const onModeChange = (modeType: DeviceType) => {
    setState((draft) => {
      draft.mode = modeType;
    });
  };

  return (
    <Flex justifyContent="end" style={{ background: "#f9f9f9" }}>
      <Flex gap={16} justifyContent="end" className={styles.operationBar}>
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
          className={clsx(styles.iconBox, {
            [styles.iconBoxActive]: mode === "pc",
          })}
          onClick={() => onModeChange("pc")}
        >
          <Tooltip title="pc端">
            <LaptopOutlined />
          </Tooltip>
        </div>
        <div
          className={clsx(styles.iconBox, {
            [styles.iconBoxActive]: mode === "mobile",
          })}
          onClick={() => {
            onModeChange("mobile");
          }}
        >
          <Tooltip title="移动端">
            <MobileOutlined />
          </Tooltip>
        </div>
        {/* <div
          className={clsx(styles.iconBox)}
          onClick={() => {
            setState((draft) => {
              draft.readOnly = !draft.readOnly;
              draft.designEnable = !draft.designEnable;
            });
            setTimeout(() => {
              runPreview();
            });
          }}
          style={{ color: !state.designEnable ? "#315cec" : "black" }}
        >
          <Tooltip title="预览">
            <ChromeOutlined />
          </Tooltip>
        </div> */}
      </Flex>
    </Flex>
  );
};
