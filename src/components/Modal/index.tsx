// styles, assets
import { Content, Label, Footer, ActionButton, CustomCheckCircleOutlined, CustomCloseCircleOutlined, CustomModal } from './styled'
type btnType = 'primary' | 'link' | 'text' | 'ghost' | 'default' | 'dashed' | 'danger'
type ModalVariant = 'error' | 'success'
interface SuccessModalProps {
  visible: boolean
  variant: ModalVariant
  rightBtnText?: string
  leftBrnText?: string
  rightBtnClick?: () => void
  leftBtnClick?: () => void
  label?: string
  rightBtnType: btnType
  leftBtnType: btnType
}

// Modal Config Example
// visible: true,
// variant: 'success',
// rightBtnText: 'Ok',
// leftBrnText: 'Cancel',
// rightBtnClick: () => {
//   setModalConfig({ visible: false })
// },
// leftBtnClick: () => {
//   setModalConfig({ visible: false })
// },
// label: 'Meda Mandatori Wajib Ddisi',
// rightBtnType: 'danger',
// leftBtnType: 'primary'

const GeneralModal = ({
  visible,
  variant = 'error',
  label,
  rightBtnClick,
  leftBtnClick,
  rightBtnText,
  leftBrnText,
  rightBtnType = 'primary',
  leftBtnType = 'primary'
}: SuccessModalProps) => {
  return (
    <CustomModal
      footer={[
        <ActionButton type={leftBtnType} key='rightBtn' onClick={leftBtnClick}>
          {leftBrnText}
        </ActionButton>,
        <ActionButton type={rightBtnType} key='leftBrn' onClick={rightBtnClick}>
          {rightBtnText}
        </ActionButton>
      ]}
      centered
      visible={visible}
      closable={false}
    >
      <Content>
        {variant === 'success' ? <CustomCheckCircleOutlined /> : <CustomCloseCircleOutlined />}
        <Label>{label}</Label>
      </Content>
    </CustomModal>
  )
}

export default GeneralModal
