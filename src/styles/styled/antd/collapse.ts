import * as styled from 'styled-components'

const CollapseAntdStyles = styled.createGlobalStyle`
  .ant-collapse:first-of-type {
    background-color: transparent;
    border-width: 0px;
    border-top: none;
  }
  .ant-collapse {
    background-color: transparent;
    border-width: 0px;
    border-top: ${({ theme }) => `1px solid ${theme.darkmode ? 'var(--clr-black)' : 'var(--clr-grey-secondary)'}`};
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    font-size: 16px;
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-link)' : 'var(--clr-black)')};
    background-color: ${({ theme }) => `${theme.darkmode ? 'var(--clr-blue-primary)' : 'var(--clr-white-secondary)'}`};
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow {
    padding: 5px;
    background-color: #e4f0ff;
    border-radius: 100%;
  }
  .ant-collapse-content {
    background-color: transparent;
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
    border-top-width: 0px;
  }
  .ant-collapse-content > .ant-collapse-content-box {
    padding: 0;
  }
  .ant-collapse > .ant-collapse-item {
    border-bottom: none;
    margin: 5px;
    :last-child {
      border-bottom-width: 0px;
    }
  }
`
export default CollapseAntdStyles
