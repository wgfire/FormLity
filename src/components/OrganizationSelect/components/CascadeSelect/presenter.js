import { useMemoizedFn } from "ahooks";
import { useModel } from "./model";
import { cloneDeep } from "lodash-es";

export const usePresenter = () => {
  const [state, setState] = useModel();

  /**
   *根据id将新数据放入对应的treeItem
   * @param {*} id
   */
  const updateTreeItemById = (data, id, updatedItem) => {
    if (id === data.id) {
      if (!data.children) data.children = [];
      data.children = updatedItem;
      return data;
    }
    if (data.children && data.children.length > 0) {
      for (let index = 0; index < data.children.length; index++) {
        const element = data.children[index];
        const result = updateTreeItemById(element, id, updatedItem);
        if (result) {
          return data; // 返回整个树形数据
        }
      }
    }
    return null;
  };

  /**
   * 获取数据 插入到对应id 的children
   */
  const insertDataByParentId = useMemoizedFn((parentId, data) => {
    const newListTree = updateTreeItemById(
      cloneDeep(state.interiorSourceData),
      parentId,
      data
    );
    setState((draft) => {
      draft.interiorSourceData = newListTree;
    });
    return newListTree;
  });

  /**
   *根据选中的keys 得到对应的人员数据
   * @param {*} data
   * @param {} checkeds
   * @returns {Array} []
   */
  const createSelectData = (data, checkeds) => {
    let result = [];
    if (checkeds.includes(data.id)) {
      result.push(data);
    }

    if (data.children && data.children.length > 0) {
      for (let i = 0; i < data.children.length; i++) {
        const item = data.children[i];
        const childrenResult = createSelectData(item, checkeds);
        if (childrenResult.length > 0) {
          result = result.concat(childrenResult);
        }
      }
    }

    return result;
  };
  return { state, setState, insertDataByParentId, createSelectData };
};
