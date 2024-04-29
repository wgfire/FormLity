import { useImmer } from "use-immer"

export const usePresenter = () => {
	const [ state, setState ] = useImmer({
		allChecked: false,
		loading: false
	})
	const getAllCheckeds = (panelData) => {
		const data = panelData.map(item => item.id)
		return data
	}

	return {state, setState, getAllCheckeds}

}
