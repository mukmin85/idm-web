import * as styled from "styled-components";

const PopoverAntdStyles = styled.createGlobalStyle`
  .ant-popover-inner-content {
    padding: 0;
  }
  .ant-popover-title {
    padding: 10;
    color: ${({ theme }) =>
      theme.darkmode ? "var(--clr-white-primary)" : "var(--clr-black)"};
  }
  .ant-popover-inner {
    background-color: ${({ theme }) =>
      theme.darkmode
        ? "var(--clr-blue-tertiary) !important"
        : "var(--clr-white-primary)"};
  }
`;
export default PopoverAntdStyles;
