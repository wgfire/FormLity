
import { Flex } from "@feb/kk-design"
import { PanelSpace } from "../PanelSpace"
import { WorkSpace } from "../WorkSpace"
import { SettingSpace } from "../SettingSpace"
import { FormDesignProvider } from "../../core/context/provider"

import { DndContext, PointerSensor, useSensor, useSensors } from "@dnd-kit/core"

/**
 * @param {props} props
 * @returns {React.Component}
 */
export const FormDesign = (props) => {

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 10
			}
		})
	)

	return (
		<Flex style={{ width: "100%", height: "100%" }}>
			<FormDesignProvider {...props}>
				<DndContext sensors={sensors}>
					<PanelSpace style={{ background: "white" }} />
					<WorkSpace />
				</DndContext>
				<SettingSpace style={{ background: "white" }} />
			</FormDesignProvider>

		</Flex>
	)
}