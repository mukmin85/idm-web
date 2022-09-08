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

const PermohonanPengguna = () => {
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
                  variant: 'success',
                  rightBtnText: 'Ok',
                  leftBrnText: 'Cancel',
                  rightBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  leftBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  label: 'Meda Mandatori Wajib Diisi',
                  rightBtnType: 'primary',
                  leftBtnType: 'danger'
                })
              }}
              type='primary'
            >
              Wujud ID
            </CustomBtn>
            <CustomBtn
              onClick={() => {
                setModalConfig({
                  visible: true,
                  variant: 'error',
                  rightBtnText: 'Ya',
                  leftBrnText: 'Tidak',
                  rightBtnClick: () => {
                    setModalConfig({
                      visible: true,
                      variant: 'error',
                      rightBtnText: 'Ok',
                      rightBtnClick: () => {
                        setModalConfig({ visible: false })
                      },
                      label: 'Tarikh yang dimasukkan tidak boleh melebihi tarikh terkini',
                      rightBtnType: 'primary'
                    })
                  },
                  leftBtnClick: () => {
                    setModalConfig({ visible: false })
                  },
                  label: 'Meda Mandatori Wajib Diisi',
                  rightBtnType: 'primary',
                  leftBtnType: 'danger'
                })
              }}
              type='danger'
            >
              Tolak
            </CustomBtn>
          </>
        }
      >
        <>
          <Modal {...modalConfig} />
          <Card.Stack label='Maklumat Pegawai'>
            <Col>
              <TextDisplay label='Jenis Dokumen' value='Verifikasi' />
              <TextDisplay label='No Dokumen' value='Doc no 1234' />
              <TextDisplay label='Nama' value='Ahmad Albab' />
            </Col>
          </Card.Stack>
          <Divider />
          <Card.Stack label='Maklumat Penetapan'>
            <Col>
              <TextDisplay label='Negeri' value='Kay El' />
              <TextDisplay label='Cawangan' value='Kay El' />
              <TextDisplay label='Gred' value='Tip Top' />
              <TextDisplay label='Jawatan' value='Chief Executive Officer' />
              <TextDisplay label='Muat Naik Dokumen' value='Doc 1 and Doc 2' />
              <TextDisplay label='Catatan' value='Some lorem ipsum added here' />
            </Col>
          </Card.Stack>
        </>
      </Card>
    </Content>
  )
}

export default PermohonanPengguna
