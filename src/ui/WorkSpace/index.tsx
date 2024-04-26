import { createForm, onFormValuesChange } from "@formily/core";
import { FormProvider } from "@formily/react";
import { Suspense, memo, useMemo, useRef, useState } from "react";
import { Empty, Flex, Form } from "@feb/kk-design";

import styles from "./index.module.less";
import { FormGrid } from "../../decorator/components/FormGrid";

import { FormItem as DragFormItem } from "../../decorator/components/FormItem";

import { useFormDesignContext } from "../../core/context";
import { useDebounceFn } from "ahooks";

import { usePresenter } from "./presenter";
import { OperationBar } from "../OperationBar";
import { ModeWrapper } from "./components/ModeWrapper";
import { useLazySchemaField } from "../../core/hooks/useLazySchemaField";

import { DragOverlay, useDndMonitor, useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { findAllKeys } from "../../core/utils/find";
import { DragItem } from "../PanelSpace/DragItem";
import { OverLayItem } from "./components/OverLayItem";
import { OverLayGrid } from "./components/OverLayGrid";
import clsx from "clsx";
import { DropboxOutlined } from "@ant-design/icons";

export const WorkSpace = memo((props) => {
  const { state, setState, emptyStatus } = useFormDesignContext();
  const { style, schema } = props;
  const { dropHandel, overHandel } = usePresenter();
  const empty = emptyStatus;
  const { mode, readOnly, designEnable } = state;
  const [initialValues, setInitialValues] = useState({});
  const [activeItem, setActiveItem] = useState(null);

  const [SchemaField, isLoading] = useLazySchemaField(
    { FormGrid, FormItem: DragFormItem },
    mode
  );

  const keys = useMemo(() => {
    return Object.keys(state.formSchema.properties ?? []); //findAllKeys(state.formSchema)
  }, [state.formSchema]);

  const allKeys = useMemo(() => {
    return findAllKeys(state.formSchema);
  }, [state.formSchema]);

  const { run: dragHandel } = useDebounceFn(
    (event) => {
      const { active, over } = event;
      overHandel(active, over);
    },
    { wait: 16, leading: true }
  );

  useDndMonitor({
    onDragEnd(event) {
      setActiveItem(null);
      if (!designEnable) return false;
      const { active, over } = event;

      //1.从面板增加过来的
      if (!allKeys.includes(active.id)) {
        dropHandel(activeItem, over);
      }
    },
    onDragOver: dragHandel,
    onDragStart(event) {
      console.log(event, "onDragStart");
      const data = event.active.data.current;
      if (data.item) {
        setActiveItem(data.item);
      } else {
        setActiveItem(data.overLay);
      }
    },
  });

  const { isOver, setNodeRef } = useDroppable({
    id: "workSpace",
    data: {
      schema: state.formSchema,
    },
  });
  const designForm = createForm({
    validateFirst: false,
    readOnly: readOnly,
    editable: designEnable && mode !== "mobile",
    initialValues: initialValues,
    data: {
      designEnable: state.designEnable,
      mode: state.mode,
    },
    effects() {
      onFormValuesChange((form) => {
        console.log(form.values, "form.values");

        //designForm.setValues(form.values)
        setInitialValues(form.values);
      });
    },
  });

  return (
    <div
      style={{ ...style }}
      id="workSpace"
      ref={setNodeRef}
      className={clsx(styles.workSpace, { [styles.preview]: !designEnable })}
    >
      <OperationBar />
      <Suspense fallback={<div>加载中...</div>}>
        <ModeWrapper mode={state.mode} preview={!designEnable}>
          <SortableContext
            items={keys}
            strategy={verticalListSortingStrategy}
            id="workSpace"
          >
            {empty ? (
              <Empty
                image={<DropboxOutlined style={{ fontSize: "100px" }} />}
                description="看我干嘛，快拖啊"
                style={{ marginTop: "100px", width: "100%" }}
              />
            ) : (
              <>
                <FormProvider form={designForm}>
                  <Form layout="vertical" style={{ width: "100%" }}>
                    {isLoading ? null : (
                      <SchemaField schema={state.formSchema} />
                    )}
                  </Form>
                </FormProvider>
              </>
            )}
          </SortableContext>
          {activeItem && (
            <DragOverlay>
              <>
                {activeItem.renderType ? (
                  <DragItem item={activeItem} />
                ) : activeItem.type === "overLayItem" ? (
                  <OverLayItem
                    {...activeItem.children?.props}
                    title={activeItem.title}
                  />
                ) : (
                  <OverLayGrid {...activeItem.children} />
                )}
              </>
            </DragOverlay>
          )}
        </ModeWrapper>
      </Suspense>
    </div>
  );
});
