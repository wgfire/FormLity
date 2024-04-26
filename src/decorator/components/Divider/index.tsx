import { observer, useFieldSchema } from "@formily/react";
import { DragBox } from "../DragBox";
import { Divider as AntdDivider } from "@feb/kk-design";

export const Divider = observer((props) => {
  const field = useFieldSchema();

  return (
    <DragBox showRequired={false}>
      <AntdDivider style={{ fontSize: "14px" }}>{field.title}</AntdDivider>
    </DragBox>
  );
});

export default Divider;
