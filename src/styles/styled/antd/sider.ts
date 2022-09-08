import * as styled from 'styled-components'

const SiderAntdStyles = styled.createGlobalStyle`
  .ant-layout-sider-children,
  .ant-menu.ant-menu-dark .ant-menu-sub {
    background-color: var(--clr-blue-primary);
  }
  .ant-menu.ant-menu-inline-collapsed,
  .ant-menu-root.ant-menu-inline,
  .ant-menu-item {
    background-color: transparent;
  }
  .ant-menu-dark .ant-menu-submenu-open,
  .ant-menu-dark .ant-menu-inline.ant-menu-sub {
    background-color: var(--clr-blue-secondary);
  }
  .ant-menu-dark.ant-menu-dark:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: transparent;
    border-left: 5px solid var(--clr-green);
  }
`
export default SiderAntdStyles
