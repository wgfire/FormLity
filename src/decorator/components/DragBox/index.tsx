import { useField, useFieldSchema, observer, useForm } from "@formily/react";
import { memo, useEffect, useRef, useState } from "react";
import styles from "./index.module.less";
import { IFormSchema, useFormDesignContext } from "../../../core/context";
import { DeleteOutlined } from "@ant-design/icons";
import clsx from "clsx";
import { Button, Flex, Switch } from "@feb/kk-design";
import { useDelete } from "../../../core/hooks/useDelete";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { findSchemaByKey } from "../../../core/utils/find";

const INPUT_NODE_NAME = ["INPUT", "TEXTAREA", "SELECT"];

export interface DragBoxProps {
  showRequired?: boolean;
  style?: React.CSSProperties;
}
export const DragBox: React.FC<React.PropsWithChildren<DragBoxProps>> = observer((props) => {
  const { showRequired = true, style } = props;
  const ref = useRef(null);
  const field = useField();
  const form = useForm();
  const fieldSchema = useFieldSchema() as IFormSchema;
  const { state, setState } = useFormDesignContext();
  const [hover, setHover] = useState(false);

  const { run: deleteKey } = useDelete();

  const { isDragging, isOver, setNodeRef, transition, listeners, transform, attributes } = useSortable({
    id: fieldSchema.key,
    data: {
      schema: fieldSchema,
      type: "DargBox",
      overLay: {
        type: "overLayItem",
        children: props.children?.[1],
        title: fieldSchema.title,
      },
    },
  });

  const styleTransform = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  useEffect(() => {
    if (!isOver && ref.current) {
      setHover(isOver);
    }
  }, [isOver]);
  return state.designEnable ? (
    <>
      <div
        style={{ ...style, ...styleTransform }}
        {...listeners}
        className={clsx(
          styles.dragBox,

          {
            [styles.hover]: hover && !isDragging,
            [styles.active]: state.selectFieldSchema?.key === fieldSchema.key,
            [styles.dragging]: isDragging,
            [styles.over]: isOver && !isDragging,
          }
        )}
        ref={setNodeRef}
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
        onClick={(e) => {
          e.stopPropagation();
          if (!INPUT_NODE_NAME.includes(e.target.nodeName)) {
            if (fieldSchema.key !== state.selectFieldSchema?.key) {
              setState((draft) => {
                draft.selectFieldSchema = fieldSchema;
              });
            }
          }
        }}
      >
        {(
          <Flex justifyContent="flex-end" className={styles.operationBox} gap={10} alignItems="center">
            {showRequired && (
              <Switch
                onChange={(checked, e) => {
                  e.stopPropagation();
                  setState((draft) => {
                    const schema = findSchemaByKey(draft.formSchema, fieldSchema.key);
                    schema.required = checked;
                    schema["x-component-props"].required = checked;
                  });
                }}
                unCheckedChildren="非必填"
                checkedChildren="必填"
                checked={fieldSchema.required as boolean}
              />
            )}
            <Button
              type="text"
              icon={<DeleteOutlined style={{ color: "red", cursor: "pointer" }} />}
              onClick={(e) => {
                e.stopPropagation();
                deleteKey(fieldSchema);
              }}
            />
          </Flex>
        )}
        <div>{props.children}</div>
      </div>
    </>
  ) : (
    <>{props.children}</>
  );
});
