import { useState } from 'react'

// router

// api, cookies, query

// redux
// import { useSelector } from "react-redux"
// import { themeData } from "../../redux/slices/theme"

// styles, assets
import { SearchButton, Container } from './styled'

// components
import { Card, SearchBar, Modal } from '../../components'

// antd
import { Layout, Row, Col } from 'antd'
const { Content } = Layout

const SemakanRekodPelanggan = () => {
  const [modalConfig, setModalConfig] = useState<any>({})

  // useEffect(() => {
  //   getExample()
  // }, [])
  // const isDarkMode: any = useSelector(themeData).darkmode

  const onSearch = () => {
    setModalConfig({
      visible: true,
      variant: 'success',
      rightBtnText: 'Ok',
      rightBtnClick: () => {
        setModalConfig({ visible: false })
      },
      label: 'No. dokumen/ID telah didaftarkan',
      rightBtnType: 'primary'
    })
  }

  return (
    <Content>
      <Modal {...modalConfig} />
      <Card fullPage={false} label='Semakan Rekod Pelanggan'>
        <Card.Stack>
          <Container>
            <Col span={12}>
              <SearchBar onKeyPress={onSearch} onSearchIcon={onSearch} />
            </Col>
            <Col span={3}>
              <SearchButton onClick={onSearch} size='large' type='primary'>
                Semak
              </SearchButton>
            </Col>
          </Container>
        </Card.Stack>
      </Card>
    </Content>
  )
}

export default SemakanRekodPelanggan
