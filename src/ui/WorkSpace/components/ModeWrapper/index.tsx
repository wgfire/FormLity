import { Flex } from "@feb/kk-design";
import styles from "./index.module.less";
import clsx from "clsx";
export const ModeWrapper: React.FC<
  React.PropsWithChildren<{
    mode: string;
    preview?: boolean;
    designEnable?: boolean;
  }>
> = (props) => {
  const { mode, preview, designEnable } = props;

  return (
    <Flex
      id="modeWrapper"
      className={clsx({
        [styles.modeWrapper]: true,
        [styles.design]: designEnable,
        [styles.preview]: preview,
        [styles.pcWrapper]: mode === "pc",
        [styles.mobileWrapper]: mode === "mobile",
      })}
    >
      <div
        className={styles.overlay}
      >
        {props.children}
      </div>
    </Flex>
  );
};
