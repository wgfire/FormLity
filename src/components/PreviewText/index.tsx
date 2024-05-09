import { useField, observer } from "@formily/react";

export const PreviewText = observer((props) => {
  const field = useField();

  const type = (field.props.name as string).split("-")[0];
  console.log("预览态组件数据", props, field, type);
  return <div>预览态组件数据</div>;
});

export default PreviewText;
