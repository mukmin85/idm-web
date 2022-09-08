import { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
// import { } from "./styled"

// components
import { Card, TextField, CustomBtn, Divider, Modal } from '../../components'
import { useNavigate } from 'react-router-dom'

// antd
import { Layout, Form, Row, Col } from 'antd'
const { Content } = Layout

const SetKataLaluan = () => {
  const [modalConfig, setModalConfig] = useState<any>()
  const navigate = useNavigate()

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode

  const onSubmit = () => {
    console.log('------submit')
  }

  const [form] = Form.useForm()

  return (
    <Content>
      <Modal {...modalConfig} />
      <Card
        actionButtons={
          <>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'success',
                  rightBtnText: 'Ok',
                  leftBrnText: 'Cancel',
                  rightBtnClick: () => {
                    navigate('/dashboard')
                  },
                  leftBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  label: 'Berjaya mengemas kini kata laluan baru',
                  rightBtnType: 'primary',
                  leftBtnType: 'danger'
                })
              }}
              type='primary'
            >
              Hantar
            </CustomBtn>
          </>
        }
        fullPage={false}
      >
        <Card.Stack label='Lupa Kata Laluan'>
          <Form style={{ width: '100%' }} onFinish={onSubmit} autoComplete='off' form={form}>
            <Row gutter={20}>
              <Col span={24}>
                <TextField name='katalaluan' label='Kata Laluan Baru' placeholder='Sila Isi' />
              </Col>
              <Col span={24}>
                <TextField name='katalaluanpengesahan' label='Pengesahan Kata Laluan' placeholder='Sila Isi' />
              </Col>
            </Row>
          </Form>
        </Card.Stack>
      </Card>
    </Content>
  )
}

export default SetKataLaluan
