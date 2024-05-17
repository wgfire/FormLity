import { Checkbox } from "@feb/kk-design";
import { useField } from "@formily/react";

export interface CheckBoxGroupProps extends React.ComponentProps<typeof Checkbox.Group>{}

export const CheckBoxGroup:React.FC<CheckBoxGroupProps> = (props) => {
  const field = useField();
  const { options = [] } = props;
  const { designEnable } = field?.form?.props?.data ?? {};

  return (
    <>
      <Checkbox.Group {...props} />
      {!options.length && designEnable && (
        <span style={{ textAlign: "center", color: "#757579" }}>
          选中组件后，可添加单选数据
        </span>
      )}
    </>
  );
};

export default CheckBoxGroup;
