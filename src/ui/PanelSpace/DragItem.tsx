import { Flex } from "@feb/kk-design";
import styles from "./index.module.less";
import { useDraggable } from "@dnd-kit/core";
export const DragItem = (props) => {
  const { item } = props;

  const { setNodeRef, listeners, attributes } = useDraggable({ id: item.title, data: { item } });
  const styleTransform = {};
  return (
    <div key={item.title} ref={setNodeRef} className={styles.panelItem} style={{ ...styleTransform }} {...listeners} {...attributes}>
      <Flex justifyContent="center" alignItems="center">
        {item.title}
      </Flex>
    </div>
  );
};
