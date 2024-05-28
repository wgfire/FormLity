import { useField, useForm } from "@formily/react";
import { Form } from "@feb/kk-design";
import { Form as AntMForm } from "antd-mobile";
import { DragBox } from "../DragBox";
import styles from "./index.module.less";

import clsx from "clsx";
import { HolderOutlined } from "@ant-design/icons";
export const FormItem = ({ children }) => {
  const field = useField();
  const form = useForm();
  const readOnly = form.readOnly;
  const { designEnable, mode } = form.props.data ? form.props.data : {};
  // 为了适配FormItem的属性
  const FormItem = mode === "pc" ? Form.Item : AntMForm.Item;
  return (
    <DragBox>
      {!readOnly && designEnable && (
        <HolderOutlined
          style={{ cursor: "grab", position: "absolute", top: "15px" }}
        />
      )}
      <FormItem
        className={clsx({ [styles.designItem]: designEnable })}
        readOnly={readOnly}
        required={field.required}
        label={field.title}
        help={field.selfErrors?.length ? field.selfErrors : undefined}
        extra={field.description}
        validateStatus={field.validateStatus}
      >
        {children}
      </FormItem>
    </DragBox>
  );
};
