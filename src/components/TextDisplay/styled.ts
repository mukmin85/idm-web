import styled from 'styled-components'
import { Row } from 'antd'

const Container = styled(Row)`
  margin-bottom: 5px;
`

const Label = styled.div`
  display: flex;
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
`

const Value = styled.div`
  display: flex;
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
`

const Colon = styled.div`
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
`

export { Container, Label, Value, Colon }
