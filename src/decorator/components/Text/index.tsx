import { observer, useFieldSchema } from "@formily/react";
import { DragBox } from "../DragBox";
import { Typography } from "@feb/kk-design";

export const Text = observer((props) => {
  console.log(props, "Text");
  const field = useFieldSchema();
  const { Title } = Typography;
  return (
    <DragBox showRequired={false}>
      <Title style={{ fontSize: "14px" }}>{field.title}</Title>
    </DragBox>
  );
});

export default Text;
