import { cloneDeep } from "lodash-es";
import { useImmer } from "use-immer";
export const initState = {
  /**数级数据*/
  listTree: null,

  /**当前勾选的keys */
  checkedKeys: [],

  /**当前选择的用户 */
  selectData: null,

  /**listTree loading */
  loading: false,

  /**搜索的用户数据 */
  searchUserData: null,

  /**查询用户的loading */

  searchLoading: false,
};
export const useModel = () => {
  const [state, setState] = useImmer(cloneDeep(initState));

  return [state, setState];
};
