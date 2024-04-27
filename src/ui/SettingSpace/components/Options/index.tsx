import { Flex } from "@feb/kk-design";

import OptionsItem from "./components/OptionsItem";
import styles from "./index.module.less";
import { useDebounceFn } from "ahooks";

import { createId } from "@/core/utils/string/createId";
import { observer } from "@formily/react";

import { DndContext } from "@dnd-kit/core";
import { cloneDeep } from "lodash-es";
import { SortableContext } from "@dnd-kit/sortable";
/**
 * @description 给下拉组件添加配置项
 */
export const Options = observer((props) => {
  const { value: options, cascader = false, onAddCascader, onChange } = props;

  const addOptions = () => {
    options.push({ label: "选项一", value: createId() });
  };
  const { run: onUpdate } = useDebounceFn((index, value) => {
    options[index].label = value;
  }, 1000);

  const items = options.map((item) => {
    return item.value;
  });

  const moveCard = (dragIndex, dropIndex) => {
    /**抛出新对象用于组件更新 */
    const newOptions = cloneDeep(options);
    const draggedCard = { ...newOptions[dragIndex] };
    newOptions.splice(dragIndex, 1);
    newOptions.splice(dropIndex, 0, draggedCard);
    onChange(newOptions);
  };
  const onDelete = (index) => {
    options.splice(index, 1);
  };

  return (
    <DndContext>
      <Flex flexDirection="column" style={{ position: "relative", minHeight: "42px" }}>
        <SortableContext items={items}>
          <Flex flexDirection="column" gap={10}>
            {options?.map((item, index) => {
              return <OptionsItem key={item.value} cascader={cascader} onDelete={onDelete} onAddCascader={onAddCascader} onUpdate={onUpdate} item={item} index={index} />;
            })}
          </Flex>
        </SortableContext>
        <div className={styles.addBox}>
          <span color="#315cec" onClick={() => addOptions()}>
            新增选项
          </span>
        </div>
      </Flex>
    </DndContext>
  );
});

export default Options;
