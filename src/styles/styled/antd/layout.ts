import * as styled from "styled-components";

const LayoutAntdStyles = styled.createGlobalStyle`
  .ant-layout {
    background-color: ${({ theme }) => theme.darkmode && "var(--clr-black)"};
  }
  .ant-layout-content {
    margin: 10px !important;
  }
  .ant-layout-footer {
    background-color: ${({ theme }) =>
      theme.darkmode ? "var(--clr-blue-tertiary)" : "var(--clr-white-primary)"};
    color: ${({ theme }) =>
      theme.darkmode ? "var(--clr-white-primary)" : "var(--clr-black)"};
  }
`;
export default LayoutAntdStyles;
