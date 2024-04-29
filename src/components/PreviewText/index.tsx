
import { useField, observer } from "@formily/react";

export const PreviewText = observer((props) => {
  const field = useField();
  console.log(field, '预览态组件数据')
  return <div>dff</div>
});

export default PreviewText;
