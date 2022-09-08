import { Button, Modal } from 'antd'
import styled from 'styled-components'

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  justify-content: space-around;
  width: 45%;
`

const FieldTitle = styled.div`
  display: flex;
  align-self: center;
  margin-bottom: 5px;
`
const ActionButton = styled(Button)`
  border-radius: 6px;
  min-width: 120px;
  margin: 5px;
`

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

export { FieldContainer, FieldTitle, ActionButton, CustomModal }
