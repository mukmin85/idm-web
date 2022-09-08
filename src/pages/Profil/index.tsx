import { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
// import { } from "./styled"

// components
import { Card, TextField, CustomBtn, Modal } from '../../components'
import { useNavigate } from 'react-router-dom'

// antd
import { Layout, Row, Col, Form } from 'antd'
const { Content } = Layout

const Profil = () => {
  const [modalConfig, setModalConfig] = useState<any>({})

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode
  const navigate = useNavigate()
  const handleUpdateProfile = () => {
    setModalConfig({
      visible: true,
      variant: 'success',
      rightBtnText: 'Ok',
      rightBtnClick: () => {
        navigate('/dashboard')
      },
      label: 'Profil pengguna berjaya dikemas kini',
      rightBtnType: 'primary'
    })
  }

  const [form] = Form.useForm()

  return (
    <Content>
      <Modal {...modalConfig} />
      <Card
        fullPage={false}
        actionButtons={
          <>
            <CustomBtn onClick={handleUpdateProfile} type='primary'>
              Kemas Kimi
            </CustomBtn>
          </>
        }
        label='Profil'
      >
        <Card.Stack>
          <Form
            onFinish={handleUpdateProfile}
            autoComplete='off'
            form={form}
            layout='vertical'
            style={{ margin: '10px 25px', textAlign: 'left' }}
          >
            <Row gutter={20}>
              <Col span={12}>
                <TextField label='Nombor telefon' name='no' placeholder='Sila Isi' />
              </Col>
              <Col span={12}>
                <TextField label='Gambar' name='no' placeholder='Sila Isi' />
              </Col>
              <Col span={12}>
                <TextField label='Emel' name='no' placeholder='Sila Isi' />
              </Col>
              <Col span={12}>
                <TextField label='Alamat' name='no' placeholder='Sila Isi' />
              </Col>
            </Row>
          </Form>
        </Card.Stack>
      </Card>
    </Content>
  )
}

export default Profil
