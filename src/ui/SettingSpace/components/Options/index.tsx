import { Button, Flex } from "@feb/kk-design";

import OptionsItem from "./components/OptionsItem";
import styles from "./index.module.less";
import { useDebounceFn } from "ahooks";

import { createId } from "@/core/utils/string/createId";
import { observer } from "@formily/react";

import { DndContext, DragOverlay, DragStartEvent, PointerSensor, UniqueIdentifier, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
/**
 * @description 给下拉组件添加配置项
 */
export const Options = observer((props) => {
  const { value: options, cascader = false, onAddCascader, onChange } = props;
  const [active, setActive] = useState<UniqueIdentifier>("");

  const addOptions = () => {
    options.push({ label: "选项一", value: createId() });
  };
  const { run: onUpdate } = useDebounceFn((index, value) => {
    options[index].label = value;
  }, 1000);

  const items = options.map((item) => {
    return item.value;
  });

  const moveCard = (dragkey: UniqueIdentifier, dropkey: string) => {
    const dragIndex = items.indexOf(dragkey);
    const dropIndex = items.indexOf(dropkey);
    const newItems = arrayMove(items, dragIndex, dropIndex);
    console.log(newItems, "newItems");
    const newOptions = newItems.map((item) => {
      return options.find((option) => option.value === item);
    });

    console.log(newOptions, "newOptions");
    onChange(newOptions);
    setActive("");
  };

  const onDargStart = (event: DragStartEvent) => {
    console.log(event, "active");
    setActive(event.active.id);
  };
  const onDelete = (index) => {
    options.splice(index, 1);
  };
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 1,
      },
    })
  );
  console.log(active, "active", options[active]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <DndContext autoScroll={false} id="options" onDragEnd={({ active, over }) => moveCard(active?.id, over?.id)} onDragStart={onDargStart} sensors={sensors}>
        <SortableContext items={items}>
          <Flex flexDirection="column" style={{ minHeight: "42px" }}>
            <Flex flexDirection="column" gap={16}>
              {options?.map((item, index:number) => {
                return <OptionsItem key={item.value} cascader={cascader} onDelete={onDelete} onAddCascader={onAddCascader} onUpdate={onUpdate} item={item} index={index} />;
              })}
            </Flex>
          </Flex>
        </SortableContext>

        <div className={styles.addBox}>
					<Button type="text" onClick={() => addOptions()}> 新增选项</Button>
        </div>
      </DndContext>
      {active !== "" && (
        <DragOverlay>
          <OptionsItem item={options.find((item) => item.value === active)} />
        </DragOverlay>
      )}
    </div>
  );
});

export default Options;
