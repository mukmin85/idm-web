// import React, { useState, useEffect } from "react"

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
// import { } from "./styled"

// components
import { useNavigate } from 'react-router-dom'
import { Card, TextField, CustomBtn } from '../../components'

// antd
import { Layout, Form, Row, Col } from 'antd'
const { Content } = Layout

const PermohonanPenukaran = () => {
  // const [example, setExample] = useState()

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode

  const [form] = Form.useForm()
  const navigate = useNavigate()

  const onSubmit = () => {
    console.log('----submit')
    navigate('/dashboard')
  }

  return (
    <Content>
      <Card
        actionButtons={
          <>
            <CustomBtn onClick={onSubmit} type='primary'>
              Disahkan
            </CustomBtn>
          </>
        }
        fullPage={false}
      >
        <Form style={{ width: '100%' }} onFinish={onSubmit} autoComplete='off' form={form}>
          <Card.Stack label='Maklumat Permohonan Pertukaran unit/Cawangan'>
            <Row gutter={20}>
              <Col span={12}>
                <TextField label='Unit Baharu' name='' placeholder='' />
              </Col>
              <Col span={12}>
                <TextField label='Bahagian Baharu' name='' placeholder='' />
              </Col>
              <Col span={12}>
                <TextField label='Tarikh Mula Melapor' name='' placeholder='' />
              </Col>
              <Col span={12}>
                <TextField label='Tarikh Pengangguhan' name='' placeholder='' />
              </Col>
              <Col span={12}>
                <TextField label='Catatan' name='' placeholder='' />
              </Col>
              <Col span={12}>
                <TextField label='Dokumen' name='' placeholder='' />
              </Col>
            </Row>
          </Card.Stack>
        </Form>
      </Card>
    </Content>
  )
}

export default PermohonanPenukaran
