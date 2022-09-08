import * as styled from 'styled-components'

const InputAntdStyles = styled.createGlobalStyle`
  .ant-input,
  .ant-input-affix-wrapper,
  .ant-input-number {
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.darkmode ? 'rgba(var(--clr-light-blue-rgb), 0.32)' : 'var(--clr-grey-primary)'}`};
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }

  .ant-input-number-handler {
    border: ${({ theme }) => `1px solid ${theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-grey-primary)'}`};
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  }
`
export default InputAntdStyles
