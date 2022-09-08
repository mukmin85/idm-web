import { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
import { useNavigate } from 'react-router-dom'
import { CustomModal, ActionButton } from './styled'

// components
import { Card, TextDisplay, Divider, Modal, TextField, SelectField, CustomBtn } from '../../components'

// antd
import { Layout, Col } from 'antd'
const { Content } = Layout

const PendaftaranIDPentadbir = () => {
  const [modalConfig, setModalConfig] = useState<any>()
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode

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
        <>
          <Card.Stack label='Maklumat Pegawai'>
            <Col>
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
              <TextDisplay label='Biometrik' value='Biometrik.png' />
            </Col>
          </Card.Stack>
          <Divider />
          <Card.Stack label='Maklumat Penetapan'>
            <Col>
              <TextDisplay label='Jabatan Agensi' value='Immigresen' />
              <TextDisplay label='Lokasi/Negeri' value='Kuala Lumpur' />
              <TextDisplay label='Tempat Bertugas/Cawangan' value='Putrajaya' />
              <TextDisplay label='Bahagian' value='Peha' />
              <TextDisplay label='Unit' value='Pengangkap' />
              <TextDisplay label='Jawatan' value='CEO' />
              <TextDisplay label='Gred' value='A++' />
            </Col>
          </Card.Stack>
          <Divider />
          <Card.Stack label='Penetapan Peranan'>
            <Col>
              <TextDisplay label='Bahagian' value='Sayap' />
              <TextDisplay label='Unit' value='Pandu Puteri' />
              <TextDisplay label='Peranan' value='Ceo' />
            </Col>
          </Card.Stack>
        </>
      </Card>
    </Content>
  )
}

export default PendaftaranIDPentadbir
