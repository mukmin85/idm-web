import React from "react";
// antd
import { Input, Form } from "antd";

interface TextFieldProps {
  label: string;
  placeholder: string;
  name: string;
  tooltip?: string;
  width?: string;
  labelCol?: number; // 24 for full width label
  initialValue?: string;
  rules?: any;
}

const TextField = ({
  label,
  placeholder,
  name,
  tooltip,
  width = "100%",
  labelCol = 24,
  initialValue = "",
  rules = [],
}: TextFieldProps) => {
  return (
    <Form.Item
      rules={rules}
      tooltip={tooltip}
      initialValue={initialValue}
      label={label}
      name={name}
      labelCol={{ span: labelCol }}
    >
      <Input style={{ width }} placeholder={placeholder} />
    </Form.Item>
  );
};

export default TextField;
