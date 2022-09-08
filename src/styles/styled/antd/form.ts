import * as styled from 'styled-components'

const FormAntdStyles = styled.createGlobalStyle`
  .ant-form-item-label > label {
    display: flex;
    font-size: 13px;
    flex: 1;
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }
  .ant-form-item-label > label .ant-form-item-tooltip {
    color: var(--clr-green);
  }
`
export default FormAntdStyles
