import { Breadcrumb, Flex } from "@feb/kk-design";
import { Options } from "../Options";
import { useState } from "react";
import { observer } from "@formily/react";
import { cloneDeep } from "lodash-es";

/**
 * @description 给级联组件添加配置项
 */
let saveActive = "index"; // 用于保持当前组件重新渲染后 选中的选项

export interface CascaderOptionsProps {
  value: {
    label: string;
    value: string;
    children?: CascaderOptionsProps["value"][];
  }[];
  onChange(value: CascaderOptionsProps["value"]): void;
}
export const CascaderOptions: React.FC<CascaderOptionsProps> = observer(
  (props) => {
    const { value: options, onChange } = props;
    const localOptions = [
      { label: "选项", value: "index", children: options },
    ];
    const [active, setActive] = useState(saveActive);

    const currentOptions =
      findKeyItem(localOptions, active)?.item?.children ?? [];

    const onChangeHandel = (newOptions: CascaderOptionsProps["value"]) => {
      const newLocalOptions = cloneDeep(localOptions);
      const currentItem = findKeyItem(newLocalOptions, active).item;
      currentItem.children = newOptions;
      onChange(newLocalOptions[0].children);
    };

    const onAddCascader = (item:CascaderOptionsProps["value"][0]) => {
      setActive(item.value);
      saveActive = item.value;

      const currentItem = findKeyItem(localOptions, item.value).item;
      if (!currentItem?.children) {
        currentItem.children = [];
      }
    };

    return (
      <Flex flexDirection="column">
        <Flex>
          <Breadcrumb>
            {findKeyItem(localOptions, active)?.parentPath?.map(
              (item, index) => {
                return (
                  <Breadcrumb.Item
                    key={index}
                    onClick={() => setActive(item.value)}
                  >
                    <span>{item.label}</span>
                  </Breadcrumb.Item>
                );
              }
            )}
          </Breadcrumb>
        </Flex>
        <Options
          value={currentOptions}
          cascader
          onAddCascader={onAddCascader}
          onChange={onChangeHandel}
        />
      </Flex>
    );
  }
);
export default CascaderOptions;
function findKeyItem(treeData, targetValue) {
  let result = null;
  const parentPath = [];

  function traverse(data) {
    for (const item of data) {
      parentPath.push({ label: item.label, value: item.value }); // 在进入子节点之前添加当前节点标签
      if (item.value === targetValue) {
        result = item;
        return true; // 找到目标值，停止遍历
      }

      if (item.children && traverse(item.children)) {
        return true; // 找到目标值，停止遍历
      }
      parentPath.pop(); // 回溯，移除当前节点标签
    }
    return false; // 未找到目标值
  }

  traverse(treeData);
  return { parentPath, item: result };
}
