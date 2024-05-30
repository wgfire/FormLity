import { observer, useFieldSchema, useForm } from "@formily/react";
import { DragBox } from "../DragBox";
import { Flex, Typography } from "@feb/kk-design";
import { HolderOutlined } from "@ant-design/icons";

export const Text = observer(() => {
  const field = useFieldSchema();
  const { Title } = Typography;
  const form = useForm();
  const { designEnable } = form?.props?.data ?? {};
  return (
    <DragBox showRequired={false}>
      <Flex>
        {designEnable && <HolderOutlined style={{ cursor: "grab" }} />}
        <Title
          style={designEnable ? { fontSize: "14px", paddingLeft: "10px" } : {}}
        >
          {field.title}
        </Title>
      </Flex>
    </DragBox>
  );
});

export default Text;
