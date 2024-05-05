
import { useField, observer } from "@formily/react";

export const PreviewText = observer((props) => {
  const field = useField();
  console.log(field, '预览态组件数据')
  return <div>预览态组件数据</div>
});

export default PreviewText;
