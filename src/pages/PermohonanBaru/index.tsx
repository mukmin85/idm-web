import React, { useState, useEffect } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"
import { useNavigate } from 'react-router-dom'

// styles, assets
import { ActionButton, CustomModal } from './styled'

// components
import { Card, SelectField, Divider, TextDisplay, TextField, CustomBtn, Modal } from '../../components'

// antd
import { Layout, Form } from 'antd'
const { Content } = Layout

const PermohonanBaru = () => {
  const [modalConfig, setModalConfig] = useState<any>({})
  const [showModal, setShowModal] = useState(false)
  const [form] = Form.useForm()
  const navigate = useNavigate()

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

  const onSubmit = () => {
    console.log('---pressed')
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
              Hantar
            </CustomBtn>
            <CustomBtn
              onClick={() => {
                window.location.reload()
              }}
              type='danger'
            >
              Set Semula
            </CustomBtn>
          </>
        }
      >
        <Form onFinish={onSubmit} autoComplete='off' form={form}>
          <Card.Stack label='Kategori Pegawai'>
            <SelectField
              labelCol={3}
              width='50%'
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
              label='Kategori Pegawai'
              placeholder='Sila Pilih'
            />
          </Card.Stack>
          <Divider />
          <Card.Stack label='Maklumat Pegawai'>
            <>
              <TextDisplay label='Kategori Kakitangan' value='Permanent' />
              <TextDisplay label='Jenis Dokumen' value='Docs01' />
              <TextDisplay label='No Dokumen/ ID' value='1231231232' />
              <TextDisplay label='Warganegara' value='Vietnam' />
              <TextDisplay label='Nama' value='Marzuki Maslan' />
              <TextDisplay label='Tarikh Lahir' value='12/1/2020' />
              <TextDisplay label='No Badan' value='Badan Sasa' />
              <TextDisplay label='No Telefon' value='01231213' />
              <TextDisplay label='Emel' value='Marzuki_Maslan@gmail.com' />
              <TextDisplay label='Gambar' value='phub.png' />
              <TextField labelCol={3} width='50%' label='Biometrik' placeholder='Masukkan Biometrik' name='biometrik' />
            </>
          </Card.Stack>
          <Divider />
          <Card.Stack label='Maklumat Penempatan'>
            <>
              <TextDisplay label='Jabatan Agensi' value='Immigresen' />
              <TextDisplay label='Lokasi/Negeri' value='Kuala Lumpur' />
              <TextDisplay label='Tempat Bertugas/Cawangan' value='Putrajaya' />
              <TextDisplay label='Bahagian' value='Peha' />
              <TextDisplay label='Unit' value='Pengangkap' />
              <TextDisplay label='Jawatan' value='CEO' />
              <TextDisplay label='Gred' value='A++' />
            </>
          </Card.Stack>
          <Divider />
          <Card.Stack label='Penetapan Peranan'>
            <>
              <TextDisplay label='Bahagian' value='Sayap' />
              <TextDisplay label='Unit' value='Pandu Puteri' />
              <TextDisplay label='Peranan' value='Ceo' />
            </>
          </Card.Stack>
        </Form>
      </Card>
    </Content>
  )
}

export default PermohonanBaru
