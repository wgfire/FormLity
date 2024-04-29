
import { useMemoizedFn } from "ahooks"
import { useModel } from "./model"

export const usePresenter = (externalLoad, externalSearchUser, organization) => {
	const [ state, setState ] = useModel()
	const getDepartmentTreeData = useMemoizedFn(async (query) => {
		try {
			setState({
				...state,
				loading: true
			})
			const params = {
				...state.treeQuery,
				...query
			}
			const { parent_id = 0 } = params

			const data = await externalLoad({
				parent_id: parent_id
			})
			const init = {
				id: "0",
				expand: true,
				name: organization.name,
				value: "0",
				children: data.data
			}
			setState((draft) => {
				draft.listTree = init
			})

		} catch (error) {
			console.log(error, "获取失败")

		} finally {
			setState((draft) => {
				draft.loading = false
			})
		}
	})

	/**
	 * 获取数据
	 */
	const loadData = useMemoizedFn(async (query) => {

		const { parentId } = query

		const data = await externalLoad({
			parent_id: parentId
		})

		return data.data

	})

	/**
	 * 搜索组织用户
	 */
	const searchUser = async (name)=>{
		setState((draft)=>{
			draft.searchLoading = true
		})
		const data = await externalSearchUser({
			name: name,
			with_all_user: "1",
			range: "1",
			status_range: ["1"]
		})
		const searchUserData = data.data.map((item)=>{
			return {
				...item,
				type: "user"
			}
		})

		setState((draft)=>{
			draft.searchLoading = false
			draft.searchUserData = searchUserData
		})
	}

	return { getDepartmentTreeData, loadData, state, setState, searchUser }
}
