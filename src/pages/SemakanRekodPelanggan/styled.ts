import styled from 'styled-components'
import { Button, Row } from 'antd'

const TextWrap = styled.div`
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
`

const SearchButton = styled(Button)`
  width: 108px;
  margin: 0px 10px;
  border-radius: 5px;
`
const Container = styled(Row)`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 30px;
`

export { TextWrap, SearchButton, Container }
