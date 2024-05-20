import { UploadOutlined } from "@ant-design/icons";
import { Upload as AntUpload, Button, message } from "@feb/kk-design";
import { RcFile, UploadFile } from "@feb/kk-design/lib/upload";

import { useState } from "react";
export const Upload = (props) => {
  const [fileList, setFileList] = useState<RcFile[]>([]);
  const beforeUpload = async (file: RcFile) => {
    if (fileList.length === props.maxCount && props.maxCount) {
      message.warning("最多只能上传" + props.maxCount + "个文件");
      return false;
    }
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
      {!props.disabled && (
        <Button type="text" icon={<UploadOutlined />} size="small">
          {"点击上传"}
        </Button>
      )}
    </AntUpload>
  );
};

export default Upload;
