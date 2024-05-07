import { FontColorsOutlined, OrderedListOutlined, ProductOutlined } from "@ant-design/icons";

export const defaultPanelSpace = [
	{
		title: "布局类",
		children: [
			{
				title: "栅格",
				icon: <ProductOutlined />,
				renderType: "FormGrid" // 栅格布局通常使用Row组件
			}
		]
	},
	{
		title: "输入类",
		children: [
			{
				title: "单行输入框",
				icon:<FontColorsOutlined/>,
				renderType: "Input" // 单行输入框对应Input组件
			},
			{
				title: "多行输入框",
				icon: <OrderedListOutlined />,
				renderType: "TextArea" // 多行输入框对应Input的TextArea属性
			},
			{
				title: "数字输入框",
				icon: "icon-textarea",
				renderType: "InputNumber" // 数字输入框对应Input.Number组件
			}
		]
	},
	{
		title: "选择器",
		children: [
			{
				title: "下拉选择器",
				icon: "icon-input",
				renderType: "Select" // 下拉选择器对应Select组件
			},
			{
				title: "联级选择器",
				icon: "icon-textarea",
				renderType: "Cascader" // 联级选择器对应Cascader组件
			},
			{
				title: "地址选择器",
				icon: "icon-textarea",
				renderType: "AddressPicker", // 地址选择器通常也使用Cascader组件
				// "x-reactions": ["{{useAsyncDataSource('address')}}"]
			},
			{
				title: "组织人员选择器",
				icon: "icon-textarea",
				renderType: "OrganizationSelect" // 组织人员选择器可以使用OrganizationSelect组件
			},
			{
				title: "日期选择器",
				icon: "icon-textarea",
				renderType: "DatePicker" // 日期选择器对应DatePicker组件
			},
			{
				title: "时间选择器",
				icon: "icon-textarea",
				renderType: "TimePicker" // 时间选择器对应TimePicker组件
			},
			{
				title: "单选",
				icon: "icon-textarea",
				renderType: "RadioGroup" // 单选对应Radio组件
			},
			{
				title: "多选",
				icon: "icon-textarea",
				renderType: "CheckBoxGroup" // 多选对应Checkbox组件
			}
		]
	},
	{
		title: "上传类",
		children: [
			{
				title: "文件上传",
				icon: "icon-input",
				renderType: "Upload" // 图片上传对应Upload组件
			}
		]
	},
	{
		title: "其他组件",
		children: [
			{
				title: "评分",
				icon: "icon-input",
				renderType: "Rate" // 评分对应Rate组件
			},

			{
				title: "纯文本",
				icon: "icon-textarea",
				renderType: "Text" // 数字输入框对应Input.Number组件
			},
			{
				title: "开关",
				icon: "icon-input",
				renderType: "Switch" // 开关对应Switch组件
			},
			{
				title: "分隔符",
				icon: "icon-input",
				renderType: "Divider" // 分隔符对应Divider组件
			},
			{
				title: "滑块",
				renderType: "Slider" // 滑块对应Slider组件
			}
		]
	}
]
