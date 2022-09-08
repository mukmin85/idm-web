import styled from 'styled-components'
import { Input } from 'antd'
import { SearchOutlined, QrcodeOutlined } from '@ant-design/icons'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SearchInput = styled(Input)`
  width: 100%;
  height: 100%;
`
const SearchIcon = styled(SearchOutlined)`
  color: ${({ theme }) => (theme.darkmode ? 'rgba(var(--clr-white-primary-rgb), 0.32)' : 'var(--clr-grey-primary)')};
  margin-right: 10px;
`
const QRIcon = styled(QrcodeOutlined)`
  color: ${({ theme }) => (theme.darkmode ? 'rgba(var(--clr-white-primary-rgb), 0.32)' : 'var(--clr-grey-primary)')};
  margin-right: 10px;
`

export { Container, SearchInput, SearchIcon, QRIcon }
