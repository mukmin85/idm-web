import * as styled from "styled-components";

const ButtonAntdStyles = styled.createGlobalStyle`
  .ant-btn-danger {
    border-color: var(--clr-red);
    background-color: var(--clr-red);
  }
  .ant-btn-primary {
    border-color: var(--clr-light-blue);
    background-color: var(--clr-light-blue);
  }
  .ant-btn {
    border-radius: 6px;
  }
`;
export default ButtonAntdStyles;
