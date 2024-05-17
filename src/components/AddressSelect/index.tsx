/**
 * 地址选择器
 */


import { Cascader, CascaderProps } from "@feb/kk-design";

export const AddressSelect:React.FC<CascaderProps> = (props) => {
 
  return <Cascader {...props} changeOnSelect />;
};

export default AddressSelect;
