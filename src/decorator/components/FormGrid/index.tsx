import { observer, useFieldSchema } from "@formily/react";
import { useDelete } from "../../../core/hooks/useDelete";
import styles from "./index.module.less";

import { Button, Flex } from "@feb/kk-design";

import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { useEffect, useMemo, useRef, useState } from "react";
import { CSS } from "@dnd-kit/utilities";
import { DeleteOutlined, HolderOutlined } from "@ant-design/icons";
import { IFormSchema, useFlitySateContext } from "../../../core/context";
import clsx from "clsx";

export const FormGrid = observer((props) => {
  const fieldSchema = useFieldSchema() as IFormSchema;
  const { state, setState } = useFlitySateContext();
  const ref = useRef(null);
  const [hover, setHover] = useState(false);
  const { run: deleteKey } = useDelete();
  const { readOnly, designEnable } = state;
  const keys = useMemo(() => {
    return fieldSchema.properties ? Object.keys(fieldSchema.properties) : [];
  }, [fieldSchema.properties]);

  const { isDragging, isOver, setNodeRef, transition, listeners, transform, attributes } = useSortable({
    id: fieldSchema.key,
    data: {
      type: "FormGrid",
      schema: fieldSchema,
      overLay: {
        type: "overLayGrid",
        children: { title: fieldSchema.title, dom: ref.current },
      },
    },
  });

  const styleTransform = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  useEffect(() => {
    setNodeRef(ref.current);
  }, []);
  return designEnable ? (
    <div
      ref={ref}
      style={{ ...styleTransform }}
      {...listeners}
      {...attributes}
      className={clsx(styles.gridWrapper, {
        [styles.gridDragging]: isDragging,
        [styles.gridOver]: isOver,
        [styles.active]: state.selectFieldSchema?.key === fieldSchema?.key,
      })}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      onClick={(e) => {
        if (fieldSchema.key! !== state.selectFieldSchema?.key) {
          setState((draft) => {
            draft.selectFieldSchema = fieldSchema;
          });
        }
      }}
    >
      <Flex alignItems="center" gap={10} justifyContent="space-between" style={{ marginBottom: 10, minHeight: "32px" }}>
        <Flex gap={6} alignItems="center" style={{ fontWeight: "bold" }}>
          {!readOnly && <HolderOutlined style={{ cursor: "grab" }} />}
          <label>{fieldSchema.title}</label>
        </Flex>
        <Flex>
          {hover && !isOver && (
            <Flex justifyContent="flex-end" className={styles.operationBox}>
              <Button
                type="text"
                icon={<DeleteOutlined style={{ color: "red" }} />}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteKey(fieldSchema);
                }}
              />
            </Flex>
          )}
        </Flex>
      </Flex>

      {props.children ? (
        <div className={clsx(styles.formGrid)}>
          <SortableContext id={fieldSchema.key} items={keys}>
            {props.children}
          </SortableContext>
        </div>
      ) : (
        <Flex justifyContent="center" alignItems="center" style={{ height: "100px" }}>
          请添加组件进来
        </Flex>
      )}
    </div>
  ) : (
    <Flex flexDirection="column" gap={10}>
      <label style={{ fontWeight: "bold", fontSize: "14px" }}>{fieldSchema.title}</label>
      <div className={clsx(styles.formGrid, { [styles.preview]: !designEnable })}>{props.children}</div>
    </Flex>
  );
});
