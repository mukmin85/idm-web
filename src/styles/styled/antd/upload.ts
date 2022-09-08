import * as styled from 'styled-components'

const UploadAntdStyles = styled.createGlobalStyle`
  .ant-upload.ant-upload-drag p.ant-upload-text,
  .ant-upload.ant-upload-drag p.ant-upload-hint {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }

  .ant-upload.ant-upload-drag {
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  }
`
export default UploadAntdStyles
