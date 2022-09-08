import React from 'react'
// antd
import { InputNumber, Form } from 'antd'

interface NumericFieldProps {
  label: string
  placeholder: string
  min: number
  initial: number
  name: string
  tooltip?: string
  width?: string
  labelCol?: number // 24 for full width label
  rules?: any
}

const NumericField = ({
  label,
  placeholder,
  initial,
  min,
  name,
  tooltip,
  width = '100%',
  labelCol = 24,
  rules = []
}: NumericFieldProps) => {
  return (
    <Form.Item rules={rules} tooltip={tooltip} initialValue={initial} name={name} label={label} labelCol={{ span: labelCol }}>
      <InputNumber min={min} style={{ width }} placeholder={placeholder} />
    </Form.Item>
  )
}

export default NumericField
