import React from 'react'
// antd
import { Form, TimePicker } from 'antd'
import moment from 'moment'
import { SearchOutlined, QrcodeOutlined } from '@ant-design/icons'

interface TimePickerFieldProps {
  label: string
  placeholder: string
  name: string
  tooltip?: string
  width?: string
  labelCol?: number // 24 for
  rules?: any
}

const TimePickerField = ({ label, placeholder, name, tooltip, width = '100%', labelCol = 24, rules = [] }: TimePickerFieldProps) => {
  const format = 'HH:mm A'
  return (
    <Form.Item rules={rules} tooltip={tooltip} initialValue='' name={name} label={label} labelCol={{ span: labelCol }}>
      <TimePicker defaultOpenValue={moment('00:00', format)} format={format} style={{ width }} placeholder={placeholder} />
    </Form.Item>
  )
}

export default TimePickerField
