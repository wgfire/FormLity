import { ICbaseProps } from "@/global";
import { Radio } from "@feb/kk-design";

import { useForm } from "@formily/react";

export const RadioGroup: React.FC<ICbaseProps> = (props) => {
  const { value, onChange, options = [] } = props;
  const form = useForm()
  const { designEnable } = form?.props?.data ?? {};

  return (
    <>
      <Radio.Group  {...props} onChange={onChange} value={value}>
        {options.map((item) => (
          <Radio key={item.value} value={item.value}>
            {item.label}
          </Radio>
        ))}
      </Radio.Group>
      {!options.length && designEnable && <span style={{ textAlign: "center", color: "#757579" }}>选中组件后，可添加单选数据</span>}
    </>
  );
};

export default RadioGroup;
