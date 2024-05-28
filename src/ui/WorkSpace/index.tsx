import { IFormProps, createForm, onFormValuesChange } from "@formily/core";
import { FormProvider } from "@formily/react";
import { Suspense, memo, useMemo, useState } from "react";
import { Flex, Form, SvgIcon } from "@feb/kk-design";

import styles from "./index.module.less";
import { FormGrid } from "../../decorator/components/FormGrid";

import { FormItem as DragFormItem } from "../../decorator/components/FormItem";

import { useFlityStateContext } from "../../core/context";
import { useDebounceFn } from "ahooks";

import { usePresenter } from "./presenter";
import { OperationBar } from "../OperationBar";
import { ModeWrapper } from "./components/ModeWrapper";
import { useLazySchemaField } from "../../core/hooks/useLazySchemaField";

import {
  DragOverlay,
  UniqueIdentifier,
  useDndMonitor,
  useDroppable,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { findAllKeys } from "../../core/utils/find";
import { DragItem } from "../PanelSpace/DragItem";
import { OverLayItem } from "./components/OverLayItem";
import { OverLayGrid } from "./components/OverLayGrid";
import clsx from "clsx";
import emptyIcon from "@/assets/empty.svg";
import { IRenderType } from "../PanelSpace/default";

export const WorkSpace = memo(() => {
  const { state, emptyStatus } = useFlityStateContext();
  const { dropHandel, overHandel } = usePresenter();
  const empty = emptyStatus;
  const { mode, readOnly, editable, designEnable } = state;
  const [initialValues, setInitialValues] = useState({});
  const [activeItem, setActiveItem] = useState<
    | (IRenderType & {
        title: string;
        children: React.ReactElement;
        type: string;
      })
    | null
  >(null);
  console.log("WorkSpace", mode);
  const { SchemaField, isLoading } = useLazySchemaField(
    { FormGrid, FormItem: DragFormItem },
    mode
  );

  const keys = useMemo(() => {
    return Object.keys(state.formSchema.properties ?? []); //findAllKeys(state.formSchema)
  }, [state.formSchema]);

  const allKeys = useMemo(() => {
    return findAllKeys(state.formSchema) as UniqueIdentifier[];
  }, [state.formSchema]);

  const { run: dragHandel } = useDebounceFn(
    (event) => {
      const { active, over } = event;
      overHandel(active, over);
    },
    { wait: 160, leading: true }
  );

  useDndMonitor({
    onDragEnd(event) {
      setActiveItem(null);
      if (!designEnable) return false;
      const { active, over } = event;
      //1.从面板增加过来的
      if (!allKeys.includes(active.id) && over) {
        dropHandel(activeItem!, over);
      }
    },
    onDragOver: dragHandel,
    onDragStart(event) {
      const data = event.active.data.current;
      if (data?.item) {
        setActiveItem(data.item);
      } else {
        setActiveItem(data?.overLay);
      }
    },
  });

  const { setNodeRef } = useDroppable({
    id: "workSpace",
    data: {
      schema: state.formSchema,
    },
  });
  const designForm = createForm({
    validateFirst: false,
    readOnly: readOnly,
    editable: editable,
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
  } as IFormProps & { data: object });

  return (
    <div
      id="workSpace"
      ref={setNodeRef}
      className={clsx(styles.workSpace, { [styles.preview]: !designEnable })}
    >
      <OperationBar />
      <Suspense fallback={<div>加载中...</div>}>
        <ModeWrapper
          mode={state.mode}
          preview={readOnly}
          designEnable={designEnable}
        >
          <SortableContext
            items={keys}
            strategy={verticalListSortingStrategy}
            id="workSpace"
            disabled={!designEnable}
          >
            {empty ? (
              <Flex
                style={{ marginTop: "100px", width: "100%" }}
                justifyContent="center"
                flexDirection="column"
                alignItems="center"
              >
                <SvgIcon
                  src={emptyIcon}
                  style={{ fontSize: "300px" }}
                ></SvgIcon>
                <span style={{ color: "#1C1F2399", fontSize: "16px" }}>
                  从左侧面板拖拽组件进入工作区
                </span>
              </Flex>
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
