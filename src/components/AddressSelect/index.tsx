/**
 * 地址选择器
 */

import { useMount } from "ahooks";
import { usePresenter } from "./presenter";
import { observer } from "@formily/react";
import { Cascader } from "@feb/kk-design";

import { useState } from "react";

export const AddressSelect = observer((props) => {
  const [dataSource, setDataSource] = useState([]);

  const { getAddressList } = usePresenter();

  useMount(() => {
    const list = getAddressList();
    console.log("data:", list);
    setDataSource(list);
  });
  return <Cascader {...props} changeOnSelect />;
});

export default AddressSelect;
