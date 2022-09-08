import * as styled from 'styled-components'

const DatepickerAntdStyles = styled.createGlobalStyle`
  .ant-picker {
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.darkmode ? 'rgba(var(--clr-light-blue-rgb), 0.32)' : 'var(--clr-grey-primary)'}`};
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  }
  .ant-picker-status-error.ant-picker,
  .ant-picker-status-error.ant-picker:not([disabled]):hover {
    border-radius: 4px;
    border: 1px solid var(--clr-red);
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  }
  .ant-picker-suffix,
  .ant-picker-clear,
  .ant-picker-clear:hover {
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }
  .ant-picker-panel-container .ant-picker-panel {
    border: ${({ theme }) => `1px solid ${theme.darkmode ? 'rgba(var(--clr-light-blue-rgb), 0.32)' : 'var(--clr-grey-primary)'}`};
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  }
  .ant-picker-header,
  .ant-picker-header > button,
  .ant-picker-body > table > thead > tr > th,
  .ant-picker-body > table > tbody > tr > td,
  .ant-picker-footer > a,
  .ant-picker-input > input {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }
`
export default DatepickerAntdStyles
