import styled from 'styled-components'
import { noDataIcon, noDataIconDark } from '../../assets/index'

const NoAccess = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: large;
  flex-direction: column;
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
`

const NoDataImg = styled.div`
  background-image: ${({ theme }) => (theme.darkmode ? `url(${noDataIconDark})` : `url(${noDataIcon})`)};
  background-repeat: no-repeat;
  height: 200px;
  width: 200px;
`

export { NoAccess, NoDataImg }
