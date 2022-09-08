import React, { useState } from "react";
// antd
import { Radio, Form } from "antd";

interface RadioFieldProps {
  label: string;
  name: string;
  tooltip?: string;
  width?: string;
  labelCol?: number; // 24 for full width label
  initialValue?: string;
  rules?: any;
  radioOptions: any[];
}

const RadioField = ({
  label,
  name,
  tooltip,
  labelCol = 24,
  initialValue = "",
  radioOptions = [],
  rules = [],
}: RadioFieldProps) => {
  const [check, setChecked] = useState("");
  const onChange = (e) => {
    setChecked(e.target.value);
  };
  return (
    <Form.Item
      rules={rules}
      tooltip={tooltip}
      initialValue={initialValue}
      label={label}
      name={name}
      labelCol={{ span: labelCol }}
    >
      <Radio.Group onChange={onChange} value={check}>
        {radioOptions.map((ro, index) => {
          return (
            <Radio key={index} value={ro.value}>
              {ro.label}
            </Radio>
          );
        })}
      </Radio.Group>
    </Form.Item>
  );
};

export default RadioField;
