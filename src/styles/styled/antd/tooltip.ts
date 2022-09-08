import * as styled from 'styled-components'

const TooltipAntdStyles = styled.createGlobalStyle`
  .ant-tooltip-arrow-content {
    --antd-arrow-background-color: linear-gradient(to right bottom, var(--clr-blue-primary), var(--clr-blue-primary));
  }
  .ant-tooltip-inner {
    background-color: var(--clr-blue-primary);
  }
  .ant-menu-inline-collapsed-tooltip a {
    color: var(--clr-white-primary);
  }
`
export default TooltipAntdStyles
