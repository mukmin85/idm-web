import * as styled from 'styled-components'

const CheckBoxAntdStyles = styled.createGlobalStyle`
  .ant-checkbox + span {
    position: relative;
    bottom: 5px;
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: var(--clr-white-secondary);

    &:after {
      border-color: var(--clr-light-blue);
    }
  }
  .ant-checkbox-inner {
    height: 24px;
    width: 24px;
    border-color: var(--clr-light-blue);
    background-color: var(--clr-white-secondary);

    &:after {
      width: 9px;
      height: 14px;
      top: 45%;
    }
  }
`
export default CheckBoxAntdStyles
