import * as styled from 'styled-components'

const BreadcrumbAntdStyles = styled.createGlobalStyle`
  .ant-breadcrumb-separator {
    color: var(--clr-light-blue);
  }
  .ant-breadcrumb-link {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
    font-size: var(--font-links);
    text-transform: capitalize;
  }
`
export default BreadcrumbAntdStyles
