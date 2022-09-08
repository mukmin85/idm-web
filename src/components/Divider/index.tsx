// styled
import { Container } from './styled'

interface DividerProps {
  fluid?: boolean
  color?: string
}

const Divider = ({ fluid, color }: DividerProps) => {
  return <Container fluid={fluid} color={color} />
}

export default Divider
