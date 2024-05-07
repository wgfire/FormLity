import { Flex } from "@feb/kk-design";
import { PanelSpace } from "../PanelSpace";
import { WorkSpace } from "../WorkSpace";
import { SettingSpace } from "../SettingSpace";

import { DndContext, PointerSensor , useSensor, useSensors } from "@dnd-kit/core";

export interface FormDesignProps {
  styles?: React.CSSProperties
}
export const FormDesign:React.FC<FormDesignProps> = (props) => {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  return (
    <Flex style={{width:"100%", height:"100%", ...props.styles }}>
      <DndContext sensors={sensors}>
        <PanelSpace />
        <WorkSpace />
      </DndContext>
      <SettingSpace />
    </Flex>
  );
};
