import React from 'react'
// antd
import { Select, Form } from 'antd'

interface SelectFieldProps {
  label: string
  placeholder: string
  name: string
  options: any
  tooltip?: string
  width?: string
  labelCol?: number // 24 for full width label
  onChange?: (any) => void
  rules?: any
}

const { Option } = Select

const SelectField = ({
  label,
  placeholder,
  name,
  options,
  tooltip,
  width = '100%',
  labelCol = 24,
  onChange,
  rules = []
}: SelectFieldProps) => {
  return (
    <Form.Item rules={rules} tooltip={tooltip} initialValue='' label={label} labelCol={{ span: labelCol }} name={name}>
      <Select
        style={{ width }}
        showSearch
        onChange={onChange}
        optionFilterProp='children'
        placeholder={placeholder}
        filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {options.map((ops) => {
          return (
            <Option key={ops.Id} value={ops.Value}>
              {ops.Text}
            </Option>
          )
        })}
      </Select>
    </Form.Item>
  )
}

export default SelectField
