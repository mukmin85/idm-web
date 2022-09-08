import { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
import { Container } from './styled'

import { useNavigate } from 'react-router-dom'

// components
import { Card, CustomBtn, TextField, Modal } from '../../components'

// antd
import { Layout, Col, Form } from 'antd'
const { Content } = Layout

const TukarKataLaluan = () => {
  const [modalConfig, setModalConfig] = useState<any>({})

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode

  const navigate = useNavigate()
  const handleChangePassword = () => {
    setModalConfig({
      visible: true,
      variant: 'success',
      rightBtnText: 'Ok',
      rightBtnClick: () => {
        navigate('/dashboard')
      },
      label: 'Kata Laluan Berjaya Ditukar',
      rightBtnType: 'primary'
    })
  }

  const [form] = Form.useForm()

  return (
    <Content>
      <Modal {...modalConfig} />
      <Card
        actionButtons={
          <>
            <CustomBtn onClick={handleChangePassword} type='primary'>
              Hantar
            </CustomBtn>
          </>
        }
        fullPage={false}
        label='Tukar Kala Laluan'
      >
        <Card.Stack>
          <Form
            onFinish={handleChangePassword}
            autoComplete='off'
            form={form}
            layout='vertical'
            style={{ margin: '10px 25px', textAlign: 'left' }}
          >
            <Container>
              <Col span={14}>
                <TextField label='Kata laluan lama' placeholder='Kata laluan lama' name='password' />
              </Col>
              <Col span={14}>
                <TextField label='Kata laluan baru' placeholder='Kata laluan baru' name='password' />
              </Col>
            </Container>
          </Form>
        </Card.Stack>
      </Card>
    </Content>
  )
}

export default TukarKataLaluan
