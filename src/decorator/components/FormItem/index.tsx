import { observer, useField, useForm } from "@formily/react";
import { Form } from "@feb/kk-design";
import { DragBox } from "../DragBox";
import styles from "./index.module.less";
import { HolderOutlined } from "@ant-design/icons/es/icons";
export const FormItem = observer(({ children }) => {
  const field = useField();
  const form = useForm();
  const readOnly = form.readOnly;
  const { designEnable } = form?.props?.data ?? {};
  return (
    <DragBox>
      {!readOnly && designEnable && (
        <HolderOutlined
          style={{ cursor: "grab", position: "absolute", top: "15px" }}
        />
      )}
      <Form.Item
        className={styles.selfItem}
        readOnly={readOnly}
        required={field.required}
        label={field.title}
        help={field.selfErrors?.length ? field.selfErrors : undefined}
        extra={field.description}
        validateStatus={field.validateStatus}
      >
        {children}
      </Form.Item>
    </DragBox>
  );
});
