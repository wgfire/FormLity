import { Collapse, Flex } from "@feb/kk-design";
import { defaultPanelSpace } from "./default";

import { DragItem } from "./DragItem";
import { memo, useMemo } from "react";
import { useFlityStateContext } from "../../core/context";
import styles from "./index.module.less";
import clsx from "clsx";
export const PanelSpace: React.FC<{
  style?: React.CSSProperties;
}> = memo((props) => {
  const { style } = props;
  const { state } = useFlityStateContext();
  const renderSpace = defaultPanelSpace;
  const { Panel } = Collapse;
  const activeKey = useMemo(() => {
    return renderSpace.map((el) => el.title);
  }, [renderSpace]);
  return (
    <Flex
      className={clsx(styles.panelSpace, {
        [styles.visible]: state.designEnable,
      })}
      style={{ ...style }}
    >
      {state.designEnable && (
        <Collapse style={{ width: "100%" }} defaultActiveKey={activeKey}>
          {renderSpace.map((el) => {
            return (
              <Panel header={el.title} key={el.title} showArrow={false}>
                <Flex gap={10} flexWrap="wrap">
                  {el.children.length > 0 &&
                    el.children.map((item) => {
                      return <DragItem item={item} key={item.title} />;
                    })}
                </Flex>
              </Panel>
            );
          })}
        </Collapse>
      )}
    </Flex>
  );
});
