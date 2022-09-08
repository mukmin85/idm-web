import styled from 'styled-components'

const TextWrap = styled.div`
  font-size: ${(props) => props.font};
  font-weight: ${(props) => (props.variant === 'title' ? 'bold' : 'normal')};
  color: ${(props) => props.color};
`

export { TextWrap }
