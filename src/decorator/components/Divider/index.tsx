import { observer, useFieldSchema, useForm } from "@formily/react";
import { DragBox } from "../DragBox";
import { Divider as AntdDivider } from "@feb/kk-design";
import { HolderOutlined } from "@ant-design/icons";

export const Divider = observer(() => {
  const field = useFieldSchema();
  const form = useForm();
  const readOnly = form.readOnly;
  return (
    <DragBox showRequired={false}>
      {!readOnly && <HolderOutlined style={{ cursor: "grab" }} />}
      <AntdDivider style={{ fontSize: "14px" }}>{field.title}</AntdDivider>
    </DragBox>
  );
});

export default Divider;
