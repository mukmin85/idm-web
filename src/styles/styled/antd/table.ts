import * as styled from "styled-components";

const TableAntdStyles = styled.createGlobalStyle`
  .ant-table,
  .ant-table-tbody > tr.ant-table-placeholder:hover > td,
  .ant-table-thead th.ant-table-column-sort,
  .ant-table-tbody td.ant-table-column-sort,
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr.ant-table-row-selected:nth-child(even) {
    background: transparent;
  }
  .ant-table-thead > tr,
  .ant-table-thead > tr > th {
    color: ${({ theme }) =>
      theme.darkmode ? "var(--clr-white-primary)" : "var(--clr-grey-primary)"};
    border-bottom: ${({ theme }) =>
      `1px solid ${
        theme.darkmode ? "var(--clr-grey-primary)" : "var(--clr-grey-secondary)"
      }`};
  }
  .ant-table-thead > tr > th.ant-table-column-sort {
    color: var(--clr-light-blue);
  }
  .ant-table-tbody > tr.ant-table-row > td,
  .ant-table-tbody > tr.ant-table-row-selected > td.ant-table-cell-row-hover {
    color: ${({ theme }) =>
      theme.darkmode ? "var(--clr-white-primary)" : "var(--clr-black)"};
    border-bottom: ${({ theme }) =>
      `1px solid ${
        theme.darkmode
          ? "rgba(var(--clr-white-primary-rgb), 0.20)"
          : "var(--clr-grey-secondary)"
      }`};
  }
  .ant-table-tbody > tr.ant-table-row:nth-child(even) {
    background: ${({ theme }) =>
      theme.darkmode
        ? "var(--clr-blue-secondary)"
        : "var(--clr-white-tertiary)"};
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${({ theme }) => theme.darkmode && "var(--clr-black)"};
  }
  .ant-table-tbody > tr.ant-table-row-selected > td {
    color: var(--clr-black);
    border-bottom: ${({ theme }) =>
      `1px solid ${
        theme.darkmode ? "var(--clr-grey-primary)" : "var(--clr-grey-secondary)"
      }`};
  }
  .ant-table-summary {
    background-color: transparent;
    color: ${({ theme }) =>
      theme.darkmode ? "var(--clr-white-primary)" : "var(--clr-black)"};
  }
  .ant-table-summary > tr > td,
  .ant-table-summary > tr > th {
    border-bottom-width: 0px;
  }
  .ant-dropdown-trigger {
    border: none !important;
    background-color: ${({ theme }) =>
      theme.darkmode
        ? "var(--clr-blue-tertiary) !important"
        : "var(--clr-white-primary)"};
  }
`;
export default TableAntdStyles;
