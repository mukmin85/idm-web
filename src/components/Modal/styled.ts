import styled from 'styled-components'
import { Button, Modal } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-primary)' : 'var(--clr-white-primary)')};
`

const Label = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  padding: 30px 0 5px 0;
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-blue-primary)')};
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
`

const ActionButton = styled(Button)`
  border-radius: 6px;
  min-width: 120px;
  margin: 5px;
`
const CustomCheckCircleOutlined = styled(CheckCircleOutlined)`
  font-size: 60px;
  color: var(--clr-green);
`

const CustomCloseCircleOutlined = styled(CloseCircleOutlined)`
  font-size: 60px;
  color: var(--clr-red);
`

const CustomModal = styled(Modal)`
  & .ant-modal-content {
    background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-primary)' : 'var(--clr-white-primary)')};
    border: 2px solid white;
    border-radius: 15px;
  }
`

export { Content, Label, Footer, ActionButton, CustomCheckCircleOutlined, CustomCloseCircleOutlined, CustomModal }
