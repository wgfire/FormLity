import { UploadOutlined } from "@ant-design/icons";
import { Upload as AntUpload, Button } from "@feb/kk-design";
import { useState } from "react";
export const Upload = (props) => {
  const { value, onChange, accept } = props;

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "xxx.png",
      status: "done",
      url: "http://www.baidu.com/xxx.png",
    },
  ]);

  const beforeUpload = (file) => {
    console.log("beforeUpload", file);
  };

  return (
    <AntUpload
      {...props}
      accept={accept}
      fileList={fileList}
      onRemove={(file) => {
        console.log("onRemove", file);
      }}
      beforeUpload={beforeUpload}
    >
      <Button icon={<UploadOutlined />} />
    </AntUpload>
  );
};

export default Upload;
