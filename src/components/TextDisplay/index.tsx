// styled, assets
import { Container, Label, Value, Colon } from './styled'
import { Col } from 'antd'

// components
import Text from '../Text'
interface TextDisplayProps {
  label?: string | number | any
  value?: string | number | any
}

const TextDisplay = ({ label, value }: TextDisplayProps) => {
  return (
    <Container>
      <Col span={3}>
        <Label>
          <Text custom={{ fontSize: 13 }} variant='caption'>
            {label}
          </Text>
        </Label>
      </Col>
      <Col span={1}>
        <Colon>:</Colon>
      </Col>
      <Col span={20}>
        <Value>
          <Text custom={{ fontSize: 13 }} variant='caption'>
            {value}
          </Text>
        </Value>
      </Col>
    </Container>
  )
}

export default TextDisplay
