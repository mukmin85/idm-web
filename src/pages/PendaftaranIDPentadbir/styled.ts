import { Modal, Button } from 'antd'
import styled from 'styled-components'

const CustomModal = styled(Modal)`
  & .ant-modal-content {
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-black)' : 'var(--clr-white-primary)')};
  }
  & .ant-modal-header {
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-black)' : 'var(--clr-white-primary)')};
  }
  & .ant-modal-title {
    color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
  }
`
const ActionButton = styled(Button)`
  border-radius: 6px;
  min-width: 120px;
  margin: 5px;
`

export { ActionButton, CustomModal }
