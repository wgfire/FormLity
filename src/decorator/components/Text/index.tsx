import { observer, useFieldSchema, useForm } from "@formily/react";
import { DragBox } from "../DragBox";
import { Typography } from "@feb/kk-design";
import { HolderOutlined } from "@ant-design/icons";

export const Text = observer((props) => {
  const field = useFieldSchema();
  const { Title } = Typography;
  const form = useForm();
  const readOnly = form.readOnly;
  return (
    <DragBox showRequired={false}>
      {!readOnly && <HolderOutlined style={{ cursor: "grab" }} />}
      <Title style={{ fontSize: "14px", paddingLeft: "20px" }}>
        {field.title}
      </Title>
    </DragBox>
  );
});

export default Text;
