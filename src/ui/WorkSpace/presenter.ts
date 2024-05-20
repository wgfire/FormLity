import { useFlityStateContext } from "../../core/context";
import { createSchemaItem } from "../../core/utils/create/createSchemaItem";
import { sortSchema } from "../../decorator/components/DragBox/sortSchema";
import { findSchemaByKey, findSchemaParentByKey } from "../../core/utils/find";
import { IRenderType } from "../PanelSpace/default";
import { Active, Over, UniqueIdentifier } from "@dnd-kit/core";
import { IFormSchema } from "@/global";

export const usePresenter = () => {
  const { setState } = useFlityStateContext();
  function addIndex(schema: IFormSchema) {
    if (!schema || typeof schema !== "object") {
      return;
    }

    if (Object.prototype.hasOwnProperty.call(schema, "properties")) {
      Object.values(schema.properties).forEach((property: IFormSchema, idx) => {
        property["x-index"] = idx;
        addIndex(property);
      });
    }
  }

  const dropHandel = (activeItem: IRenderType, over: Over) => {
    const overData = over.data.current;
    const schemaItem = overData?.schema;
    const isContainer = schemaItem["x-data"]?.isContainer;
    const newSchema = createSchemaItem(activeItem) as unknown as IFormSchema;

    setState((draft) => {
      if (isContainer) {
        const parent = schemaItem.key
          ? findSchemaByKey(draft.formSchema as IFormSchema, schemaItem.key)
          : draft.formSchema;
        if (!parent?.properties) {
          parent!.properties = {} as IFormSchema["properties"];
        }
        newSchema["x-index"] = Object.keys(parent!.properties).length;
        parent!.properties[newSchema.key] = newSchema;
      } else {
        //增加到目标元素的父容器中
        const parent = schemaItem.key
          ? findSchemaParentByKey(
              draft.formSchema as IFormSchema,
              schemaItem.key
            )
          : draft.formSchema;
        newSchema["x-index"] = Object.keys(parent!.properties).length;
        parent!.properties[newSchema.key] = newSchema;
        const newProperties = parent!.properties;
        const proKeys = Object.entries(newProperties);
        const keysBackup = [...proKeys];
        const startIndex = proKeys.findIndex(
          (item) => item[0] === newSchema.key
        );
        const endIndex = overData?.sortable.items.findIndex(
          (item: UniqueIdentifier) => item === over.id
        );
        if (endIndex > -1) {
          proKeys.splice(endIndex, 0, keysBackup[startIndex]);
        }
        const properties = Object.fromEntries(proKeys);
        parent!.properties = properties as IFormSchema["properties"];
      }
    });
  };
  const overHandel = (active: Active, over: Over) => {
    const overData = over?.data.current;
    const activeData = active?.data.current;

    //不处理从左侧面板拖拽过来
    if (activeData?.schema && overData?.schema) {
      if (active.id !== over?.id) {
        setState((draft) => {
          const endSchema = overData.schema["x-data"]?.isRoot
            ? activeData.schema.root
            : overData.schema;
          const newSchema = sortSchema(activeData.schema, endSchema);
          addIndex(newSchema as IFormSchema);
          draft.formSchema = newSchema as IFormSchema["properties"];
        });
      }
    }
  };

  return {
    dropHandel,
    overHandel,
  };
};
