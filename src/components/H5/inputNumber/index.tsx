import { Input } from "antd-mobile";

export const InputNumber: React.FC = (props) => {
  console.log(props, "InputNumber");
  return <Input type="number" {...props} />;
};

export default InputNumber;
