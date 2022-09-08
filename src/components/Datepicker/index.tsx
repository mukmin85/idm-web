import React from 'react'
// antd
import { Form, DatePicker } from 'antd'
import { SearchOutlined, QrcodeOutlined } from '@ant-design/icons'

interface DatePickerFieldProps {
  label: string
  placeholder: string
  name: string
  tooltip?: string
  width?: string
  labelCol?: number // 24 for
  rules?: any
}

const DatePickerField = ({ label, placeholder, name, tooltip, width = '100%', labelCol = 24, rules = [] }: DatePickerFieldProps) => {
  return (
    <Form.Item rules={rules} tooltip={tooltip} initialValue='' name={name} label={label} labelCol={{ span: labelCol }}>
      <DatePicker style={{ width }} placeholder={placeholder} />
    </Form.Item>
  )
}

export default DatePickerField
