import * as styled from 'styled-components'

const PaginationAntdStyles = styled.createGlobalStyle`
  .ant-pagination-item {
    background-color: transparent;
    border-width: 0px;
  }
  .ant-pagination-item > a {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-grey-primary)')};
  }
  .ant-pagination-item-active {
    background-color: var(--clr-light-blue);
  }
  .ant-pagination-item-active > a {
    color: var(--clr-white-primary);
    :hover {
      color: var(--clr-white-primary);
    }
  }
  .ant-pagination-next > button.ant-pagination-item-link,
  .ant-pagination-prev > button.ant-pagination-item-link {
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-tertiary)')};
    border: ${({ theme }) => `${theme.darkmode ? '0px' : '1px'} solid var(--clr-grey-secondary)`};
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-grey-primary)')};
    :hover {
      color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-grey-primary)')};
    }
  }
`
export default PaginationAntdStyles
