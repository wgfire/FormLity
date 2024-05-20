import { observer, useFieldSchema, useForm } from "@formily/react";
import { DragBox } from "../DragBox";
import { Typography } from "@feb/kk-design";
import { HolderOutlined } from "@ant-design/icons";

export const Text = observer(() => {
  const field = useFieldSchema();
  const { Title } = Typography;
  const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
  return (
    <DragBox showRequired={false}>
      {designEnable && <HolderOutlined style={{ cursor: "grab" }} />}
      <Title style={{ fontSize: "14px", paddingLeft: "20px" }}>
        {field.title}
      </Title>
    </DragBox>
  );
});

export default Text;
