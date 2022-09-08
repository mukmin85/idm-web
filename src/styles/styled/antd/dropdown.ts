import * as styled from 'styled-components'

const DropdownAntdStyles = styled.createGlobalStyle`
  .ant-dropdown-trigger,
  .ant-dropdown-trigger:focus,
  .ant-dropdown-trigger:hover {
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.darkmode ? 'rgba(var(--clr-light-blue-rgb), 0.32)' : 'var(--clr-grey-primary)'}`};
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  }
  .ant-dropdown-menu {
    border-radius: 4px;
    border: ${({ theme }) => `1px solid ${theme.darkmode ? 'rgba(var(--clr-light-blue-rgb), 0.32)' : 'var(--clr-grey-primary)'}`};
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  }
  .ant-dropdown-menu-item {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }
  .ant-dropdown-menu-item.ant-dropdown-menu-item-disabled {
    color: var(--clr-grey-primary);
  }
  .ant-dropdown-menu-item.ant-dropdown-menu-item-danger {
    color: var(--clr-red);
  }
`
export default DropdownAntdStyles
