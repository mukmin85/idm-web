import React, { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
// import { } from "./styled"

// components
import { Card, TextField, SelectField, CustomBtn, Modal } from '../../components'

// antd
import { Layout, Form, Row, Col } from 'antd'
const { Content } = Layout

const PendaftaranIdPengguna = () => {
  const [form] = Form.useForm()
  const [modalConfig, setModalConfig] = useState<any>({})

  const onSubmit = () => {
    console.log('----pressed')
  }

  const tarafPendudukOptions = [
    {
      id: 1,
      value: 'taraf-1',
      label: 'Warganegara'
    },
    {
      id: 2,
      value: 'taraf-2',
      label: 'Bukan Warganegara'
    },
    {
      id: 3,
      value: 'taraf-3',
      label: 'Penduduk Tetap'
    },
    {
      id: 4,
      value: 'taraf-4',
      label: 'Penduduk Sementara'
    }
  ]

  const jenisDokumenOptions = [
    {
      id: 1,
      value: 'taraf-1',
      label: 'MyKAD'
    },
    {
      id: 2,
      value: 'taraf-2',
      label: 'MyPR'
    },
    {
      id: 3,
      value: 'taraf-3',
      label: 'Passport Asing'
    },
    {
      id: 4,
      value: 'taraf-4',
      label: 'ID Asing'
    }
  ]

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
                  variant: 'error',
                  rightBtnText: 'Ok',
                  rightBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  label: 'System Error',
                  rightBtnType: 'primary'
                })
              }}
              type='primary'
            >
              Semak
            </CustomBtn>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'success',
                  rightBtnText: 'Ok',
                  rightBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  label: 'Pendaftaran anda telah berjaya Dihantar',
                  rightBtnType: 'primary'
                })
              }}
              type='primary'
            >
              Hantar
            </CustomBtn>
          </>
        }
        label='Pendaftaran Id Pengguna'
      >
        <Form onFinish={onSubmit} autoComplete='off' form={form}>
          <Card.Stack>
            <Row gutter={20}>
              <Col span={12}>
                <SelectField
                  options={tarafPendudukOptions}
                  key='jenisPegawai-idm-01'
                  name='jenisPegawai'
                  label='Senarai Taraf Penduduk'
                  placeholder='Sila Pilih'
                />
              </Col>
              <Col span={12}>
                <SelectField
                  options={jenisDokumenOptions}
                  key='jenisPegawai-idm-01'
                  name='jenisPegawai'
                  label='Jenis Dokumen'
                  placeholder='Sila Pilih'
                />
              </Col>

              <Col span={12}>
                <TextField label='Input No / ID Dokumen' placeholder='Input No / ID Dokumen' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Passport Terdahulu' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Passport Terkini' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Nama' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Warganegara' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Tarikh Lahir' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Tempat Lahir' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Emel' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='No Telefon' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Alamat' placeholder='Input Text' name='dokumen' />
              </Col>
              <Col span={12}>
                <TextField label='Saya Bukan Robot' placeholder='Input Text' name='dokumen' />
              </Col>
            </Row>
          </Card.Stack>
        </Form>
      </Card>
    </Content>
  )
}

export default PendaftaranIdPengguna
