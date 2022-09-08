import styled from 'styled-components'
import { DownCircleOutlined } from '@ant-design/icons'

const MenuCardContainer = styled.div`
  font-size: 15px;
  width: 40%;
  margin: 10px;
  border: ${({ theme }) => (theme.darkmode ? '0.5px solid var(--clr-blue-tertiary)' : '0.5px solid rgba(0, 0, 0, 0.25)')};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background-color: ${({ theme }) => (theme.darkmode ? 'var(--clr-blue-secondary)' : 'var(--clr-white-primary)')};
  height: ${({ collapse }) => (collapse ? '190px' : 'auto')};
`

const MenuHeader = styled.div`
  border-bottom: ${({ theme }) => (theme.darkmode ? '0.5px solid var(--clr-blue-tertiary)' : '0.5px solid rgba(0, 0, 0, 0.25)')};
  padding: 10px;
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'black')};
  font-weight: bold;
  height: 40px;
`

const BottomBtn = styled.div`
  border-top: ${({ theme }) => (theme.darkmode ? '0.5px solid var(--clr-blue-tertiary)' : '0.5px solid rgba(0, 0, 0, 0.25)')};
  padding: 10px;
  color: #1890ff;
  font-size: 16px;
  height: 40px;
  cursor: pointer;
`

const ToggleButton = styled(DownCircleOutlined)`
  transition: transform 0.5s;
  font-size: 17px;
  transform: ${({ collapse }) => (collapse ? 'rotate(' + 0 + 'deg)' : 'rotate(' + 180 + 'deg)')};
  margin: 2px;
`

const LinkContainer = styled.div`
  height: ${({ collapse }) => (collapse ? '100px' : 'auto')};
  overflow: hidden;
`

export { MenuCardContainer, MenuHeader, BottomBtn, ToggleButton, LinkContainer }
