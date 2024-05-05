
export const usePresenter = () => {
	const getAddressList = () => {
		return [
			{
				value: "zhejiang",
				label: "Zhejiang",
				children: [
					{
						value: "hangzhou",
						label: "Hanzhou",
						children: [
							{
								value: "xihu",
								label: "West Lake"
							}
						]
					}
				]
			}
		]
	}
	return {
		getAddressList
	}
}
