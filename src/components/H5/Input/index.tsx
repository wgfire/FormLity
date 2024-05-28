import { Input as AntInput} from "antd-mobile";

export const Input: React.FC = (props) => {
  return <AntInput type="text" placeholder="请输入" {...props} />;
};

export default Input;
