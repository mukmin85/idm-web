// styles, assets
import { TextWrap } from './styled'

type variant = 'title' | 'main' | 'secondary' | 'caption' | 'button' | 'link'

interface TextProps {
  children: string
  variant?: variant
  color?: string
  custom?: object
}

const Text = ({ children, variant = 'main', color, custom = {} }: TextProps) => {
  let font
  switch (variant) {
    case 'title':
      font = '19px'
      break
    case 'main':
      font = '21px'
      break
    case 'caption' || 'link' || 'secondary':
      font = '13px'
      break
    default:
      font = '12px'
      break
  }
  return (
    <TextWrap variant={variant} font={font} color={color} style={{ ...custom }}>
      {children}
    </TextWrap>
  )
}

export default Text
