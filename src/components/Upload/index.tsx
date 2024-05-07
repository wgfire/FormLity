import { UploadOutlined } from "@ant-design/icons";
import { Upload as AntUpload, Button } from "@feb/kk-design";
import { RcFile, UploadFile } from "@feb/kk-design/lib/upload";
import { useFieldSchema } from "@formily/react";
import { useMount } from "ahooks";
import { useState } from "react";
export const Upload = (props) => {
  const [fileList, setFileList] = useState<RcFile[]>([]);
  useMount(() => {
    console.log("暴露props", props);
    props?.onMount(props);
  });
  const beforeUpload = async (file: RcFile) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const nextList = [...fileList];
      nextList.push({
        uid: file.uid,
        name: file.name,
        status: "done",
        url: reader.result as string,
      });
      setFileList(nextList);
    };
    return false;
  };
  const onRemove = (file: UploadFile) => {
    const nextList = fileList.filter((item) => item.uid !== file.uid);
    setFileList(nextList);
  };

  return (
    <AntUpload
      fileList={fileList}
      beforeUpload={beforeUpload}
      onRemove={onRemove}
      {...props}
    >
      {
        <Button type="text" icon={<UploadOutlined />} size="small">
          {"点击上传"}
        </Button>
      }
    </AntUpload>
  );
};

export default Upload;
