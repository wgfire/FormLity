import { useImmer } from "use-immer"

export const useModel = ()=>{
	const [ state, setState ] = useImmer({
		loading: false,

		/**组件内部树级数据 */
		interiorSourceData: null,

		/**组件内部选择人员数据 */
		interiorSelectData: null,

		/**当前选中部门的key */
		currentKey: "0"

	})
	return [ state, setState ]
}
