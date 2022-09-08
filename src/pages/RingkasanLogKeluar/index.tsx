import { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

// styles, assets
// import { } from "./styled"

// components
import { Card, CustomBtn, Modal } from '../../components'

// antd
import { Layout, Table } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
const { Content } = Layout

const RingkasanLogKeluar = () => {
  const [modalConfig, setModalConfig] = useState<any>()
  const navigate = useNavigate()

  interface DataType {
    tarikh?: React.Key
    deskripsi?: string
  }

  const columns: ColumnsType<DataType> = [
    {
      title: 'Tarikh/Masa',
      dataIndex: 'tarikh',
      key: 'tarikh',
      sorter: true
    },
    {
      title: 'Deskripsi Aktiviti',
      dataIndex: 'deskripsi',
      key: 'deskripsi',
      sorter: true
    }
  ]

  const data = [
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi1',
      key: 1
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi2',
      key: 2
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi3',
      key: 3
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi4',
      key: 4
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi5',
      key: 5
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi6',
      key: 6
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi7',
      key: 7
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi8',
      key: 8
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi9',
      key: 9
    },
    {
      tarikh: '1/1/2011',
      deskripsi: 'deskripsi10',
      key: 10
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
                  variant: 'success',
                  rightBtnText: 'Ok',
                  rightBtnClick: () => {
                    navigate('/')
                    window.location.reload()
                  },
                  label: 'Cetakan Berjaya',
                  rightBtnType: 'primary'
                })
              }}
              type='primary'
            >
              Cetak
            </CustomBtn>
          </>
        }
      >
        <Card.Stack fullPage={false} label='Ringkasan'>
          <Table columns={columns} dataSource={data} bordered={false} pagination={{ pageSize: 10 }} />
        </Card.Stack>
      </Card>
    </Content>
  )
}

export default RingkasanLogKeluar
