/**
 * 生成唯一id
 */
export const createId = ()=>{
	return `${Date.now()}_${Math.random().toString()
		.substring(10)}`
}
