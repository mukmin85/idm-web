import * as styled from 'styled-components'

const RadioAntdStyles = styled.createGlobalStyle`
  .ant-radio-wrapper {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }
`
export default RadioAntdStyles
