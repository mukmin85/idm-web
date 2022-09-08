import React from 'react'
// antd
import { Input, Form } from 'antd'

interface TextAreaFieldProps {
  label: string
  placeholder: string
  name: string
  tooltip?: string
  width: string
  labelCol?: number // 24 for full width label
  rules?: any
}

const { TextArea } = Input

const TextAreaField = ({ label, placeholder, name, tooltip, width = '100%', labelCol = 24, rules = [] }: TextAreaFieldProps) => {
  return (
    <Form.Item rules={rules} tooltip={tooltip} initialValue='' name={name} label={label} labelCol={{ span: labelCol }}>
      <TextArea style={{ width }} placeholder={placeholder} allowClear />
    </Form.Item>
  )
}

export default TextAreaField
