import { useFlitySateContext } from "../../core/context";

const PreviewSpace = () => {
  const { state } = useFlitySateContext();
  return <div>预览空间</div>;
};
export default PreviewSpace;
