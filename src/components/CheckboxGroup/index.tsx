// aantd
import { Checkbox, Row, Col } from 'antd'
import React, { ReactElement } from 'react'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'

// styles,assets
import { Container } from './styled'

const onChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues)
}

//  Example of data value that should be pass
//  const SampleOptions = [
//   { Label: 'Apple', Value: 'Apple' },
//   { Label: 'Pear', Value: 'Pear' }
//  ]

interface CustomCheckBoxGroupProps {
  options: any
  disabled?: boolean
  defaultValue?: string[]
  onChange?: () => any
  display?: string // 'row' or 'column'
  rules?: any
  name: string
}

const CustomCheckBoxGroup = ({
  options,
  disabled = false,
  defaultValue,
  onChange = () => {
    console.log('')
  },
  display = 'row',
  rules = [],
  name
}: CustomCheckBoxGroupProps) => (
  <Container rules={rules} name={name}>
    {display === 'column' ? (
      <Checkbox.Group options={options} disabled={disabled} defaultValue={defaultValue} onChange={onChange}></Checkbox.Group>
    ) : (
      <Checkbox.Group>
        <Row style={{ padding: '15px' }}>
          {options.map((data, index) => {
            return (
              <Col style={{ marginBottom: '5px', marginTop: '5px' }} key={index} span={24}>
                <Checkbox disabled={disabled} value={data.value}>
                  {data.label}
                </Checkbox>
              </Col>
            )
          })}
        </Row>
      </Checkbox.Group>
    )}
  </Container>
)

export default CustomCheckBoxGroup
