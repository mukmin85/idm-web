import { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
import { ActionButton, CustomModal } from './styled'

// components
import { Card, TextField, Divider, SelectField, Modal, CustomBtn } from '../../components'

// antd
import { useNavigate, Link } from 'react-router-dom'
import { Layout, Row, Col, Form } from 'antd'
const { Content } = Layout

const PengesahanPermohonanPenukaran = () => {
  const [modalConfig, setModalConfig] = useState<any>()
  const [showModal, setShowModal] = useState(false)

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode

  const navigate = useNavigate()
  const [form] = Form.useForm()

  const onSubmit = () => {
    console.log('----submit')
  }

  const handleCancel = () => {
    setShowModal(false)
  }

  const TambahPerananModal = () => {
    return (
      <CustomModal
        title='Penetapan Peranan'
        footer={[
          <ActionButton type='danger' key='3' onClick={handleCancel}>
            Tutup
          </ActionButton>,
          <ActionButton type='primary' key='1' onClick={handleCancel}>
            Return
          </ActionButton>,
          <ActionButton type='primary' key='2' onClick={handleCancel}>
            Submit
          </ActionButton>
        ]}
        okText='Selesai'
        onCancel={handleCancel}
        visible={showModal}
      >
        <div>
          <TextField labelCol={12} width='100%' label='Lokasi Tempat Bertugas' placeholder='Masukkan Biometrik' name='biometrik' />
          <TextField labelCol={12} width='100%' label='Bahagian - Unit' placeholder='Masukkan Biometrik' name='biometrik' />
          <SelectField
            labelCol={12}
            width='100%'
            options={[
              {
                id: 1,
                value: 'pegawai-1',
                label: 'JIM Officer'
              },
              {
                id: 2,
                value: 'pegawai-2',
                label: 'KAT'
              },
              {
                id: 3,
                value: 'pegawai-3',
                label: 'Agensi'
              }
            ]}
            key='jenisPegawai-idm-01'
            name='jenisPegawai'
            label='Peranan'
            placeholder='Sila Pilih'
          />
          <TextField labelCol={12} width='100%' label='Surat Pengesahan Turun Kuasa' placeholder='Masukkan Biometrik' name='biometrik' />
          <TextField labelCol={12} width='100%' label='Dokumen Pengesahan' placeholder='Masukkan Biometrik' name='biometrik' />
        </div>
      </CustomModal>
    )
  }

  return (
    <Content>
      <Modal {...modalConfig} />
      <TambahPerananModal />
      <Card
        actionButtons={
          <>
            <CustomBtn
              onClick={() => {
                setShowModal(true)
              }}
              type='primary'
            >
              Tambah Peranan
            </CustomBtn>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'success',
                  rightBtnText: 'Ya',
                  rightBtnClick: () => {
                    navigate('/dashboard')
                  },
                  label: 'Rekod Berjaya Disimpan',
                  rightBtnType: 'primary'
                })
              }}
              type='primary'
            >
              Disahkan
            </CustomBtn>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'success',
                  rightBtnText: 'Ya',
                  rightBtnClick: () => {
                    navigate('/dashboard')
                  },
                  label: 'Rekod Berjaya Disimpan',
                  rightBtnType: 'primary'
                })
              }}
              type='primary'
            >
              Diterima
            </CustomBtn>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'error',
                  rightBtnText: 'Ya',
                  rightBtnClick: () => {
                    navigate('/dashboard')
                  },
                  label: 'error message here',
                  rightBtnType: 'primary'
                })
              }}
              type='danger'
            >
              Ditolak
            </CustomBtn>
          </>
        }
      >
        <Card.Stack label='Pengesahan Pertukaran Unit/Cawangan'>
          <Form style={{ width: '100%' }} onFinish={onSubmit} autoComplete='off' form={form}>
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
            <Divider fluid />
            <Row gutter={[20, 20]}>
              <Col span={24}>
                <Link to='/idm/kelulusan-id'>Maklumat Profil Pegawai</Link>
              </Col>
              <Col span={24}>
                <Link to='/idm/kelulusan-id'>Maklumat Penenpatan Peranan</Link>
              </Col>
            </Row>
            <Divider fluid />
            <Row gutter={20}>
              <Col span={12}>
                <SelectField
                  name='keputusan'
                  placeholder='Sila Pilih'
                  label='Keputusan'
                  options={[
                    {
                      label: 'Diterima',
                      value: 'terima'
                    },
                    {
                      label: 'Ditolak',
                      value: 'tolak'
                    }
                  ]}
                />
              </Col>
            </Row>
          </Form>
        </Card.Stack>
      </Card>
    </Content>
  )
}

export default PengesahanPermohonanPenukaran
