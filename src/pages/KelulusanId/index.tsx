import React, { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
// import { } from "./styled"

// components
import { Card, CustomBtn, TextDisplay, Divider, Modal } from '../../components'

// antd
import { Layout, Col } from 'antd'
const { Content } = Layout

const KelulusanId = () => {
  const [modalConfig, setModalConfig] = useState<any>({})

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode

  return (
    <Content>
      <Card
        label='Permohonan ID'
        actionButtons={
          <>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'error',
                  rightBtnText: 'Ya',
                  leftBrnText: 'Tidak',
                  rightBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  leftBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  label: 'Pengesahan Penolakan Pendaftaran ID',
                  rightBtnType: 'primary',
                  leftBtnType: 'danger'
                })
              }}
              type='danger'
            >
              Tidak Lulus
            </CustomBtn>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'success',
                  rightBtnText: 'Ya',
                  rightBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  label: 'Rekod Telah Berjaya Dihantar',
                  rightBtnType: 'primary'
                })
              }}
              type='primary'
            >
              Lulus
            </CustomBtn>
          </>
        }
      >
        <>
          <Modal {...modalConfig} />
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

export default KelulusanId
