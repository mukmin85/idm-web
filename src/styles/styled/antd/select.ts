import * as styled from 'styled-components'

const SelectAntdStyles = styled.createGlobalStyle`
  .ant-select-arrow .anticon,
  .ant-select-item {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }

  .ant-select:not(.ant-select-customize-input) .ant-select-selector,
  .ant-select-dropdown {
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.darkmode ? 'rgba(var(--clr-light-blue-rgb), 0.32)' : 'var(--clr-grey-primary)'}`};
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }

  .ant-select-item:hover,
  .ant-select-item-option-active,
  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    color: var(--clr-black);
  }
`
export default SelectAntdStyles
