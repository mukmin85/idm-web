import styled from 'styled-components'
import { noDataIcon, noDataIconDark } from '../../assets/index'

const NoDataText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ theme }) => (theme.darkmode ? 'var(--clr-white-primary)' : 'var(--clr-black)')};
`

const NoDataImg = styled.div`
  background-image: ${({ theme }) => (theme.darkmode ? `url(${noDataIconDark})` : `url(${noDataIcon})`)};
  background-repeat: no-repeat;
  height: 250px;
  width: 250px;
`

export { NoDataText, NoDataImg }
