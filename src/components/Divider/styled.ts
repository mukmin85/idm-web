import { Divider } from 'antd'
import styled from 'styled-components'

const Container = styled(Divider)`
  border-top: ${({ theme, color }) => `1px solid ${!theme.darkmode ? 'var(--clr-grey-secondary)' : !color ? 'var(--clr-black)' : color}`};
  width: ${({ fluid }) => (fluid ? '100%' : 'calc(100% - 100px)')};
  min-width: ${({ fluid }) => (fluid ? '100%' : 'calc(100% - 100px)')};
  margin-left: auto;
  margin-right: auto;
`
export { Container }
