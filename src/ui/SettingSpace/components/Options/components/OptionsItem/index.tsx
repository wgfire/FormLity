import {
  DeleteOutlined,
  HolderOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Flex, Input } from "@feb/kk-design";
import { useState } from "react";

import { observer } from "@formily/react";
import { useSortable } from "@dnd-kit/sortable";

export interface OptionsItemProps {
  item: {
    label: string;
    value: string;
  };
  index: number;
  onUpdate: (index: number, value: string) => void;
  onDelete: (index: number) => void;
  cascader?: boolean;
  onAddCascader?: (item: { label: string; value: string }) => void;
}

export const OptionsItem = observer<OptionsItemProps>((props) => {
  const { item, index, onUpdate, onDelete, cascader, onAddCascader } =
    props;
  const [value, setValue] = useState(item.label);

  const { setNodeRef, attributes, listeners, isOver } = useSortable({
    id: item.value,
  });

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={{ marginTop: "10px", opacity: isOver ? 0.5 : 1 }}
    >
      <Flex gap={10} justifyContent="space-between" alignItems="center">
        <HolderOutlined style={{ cursor: "grab" }} />
        <Input
          value={value}
          addonAfter={
            cascader ? (
              <RightOutlined onClick={() => onAddCascader?.(item)} />
            ) : null
          }
          onChange={(e) => {
            setValue(e.target.value);
            onUpdate(index, e.target.value); // 由于触发value改变，工作区和面板都会渲染，导致输入value不了，所以这里使用防抖来更新数据，内部value则实时更新
          }}
        />
        <DeleteOutlined onClick={() => onDelete(index)} />
      </Flex>
    </div>
  );
});
export default OptionsItem;
