import React from "react";

// antd
import { Upload, Form } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

interface FileUploaderProps {
  name: string;
  tooltip?: string;
  label?: string;
  labelCol?: string;
}

const FileUploader = ({
  name,
  tooltip,
  label,
  labelCol = "24",
}: FileUploaderProps) => {
  const handleUpload = (info: any) => {
    let fileList = [...info.fileList];
    // Accept 15 files only
    if (fileList.length > 15) {
      alert("Maximum 15 files");
      return;
    }
    fileList = fileList.slice(-15);
    fileList.forEach(function (file, index) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        file.base64 = e.target.result;
      };
      reader.readAsDataURL(file.originFileObj);
    });
    info.file.status = "done";
  };

  const props = {
    name: "file",
    multiple: true,
    onChange: handleUpload,
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <Form.Item
      tooltip={tooltip}
      name={name}
      label={label}
      labelCol={{ span: labelCol }}
    >
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </Form.Item>
  );
};

export default FileUploader;
