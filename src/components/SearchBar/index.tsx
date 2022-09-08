// styles, assets
import { Container, SearchInput, SearchIcon, QRIcon } from './styled'

interface SearchBarProps {
  onSearchIcon?: () => void
  onQRCode?: () => void
  placeholder?: string
  width?: string
  onKeyPress?: () => void
}

const SearchBar = (props: SearchBarProps) => {
  const {
    onSearchIcon,
    onQRCode,
    placeholder,
    width = '100%',
    onKeyPress = () => {
      return null
    }
  } = props
  return (
    <Container>
      <SearchInput
        onKeyPress={(e) => e.key === 'Enter' && onKeyPress()}
        style={{ width }}
        size='large'
        placeholder={placeholder}
        prefix={onSearchIcon && <SearchIcon onClick={onSearchIcon} />}
        suffix={onQRCode && <QRIcon onClick={onQRCode} />}
      />
    </Container>
  )
}

export default SearchBar
