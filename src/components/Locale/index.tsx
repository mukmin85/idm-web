import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import i18n from '../../services/i18n'
import PropTypes from 'prop-types'

const Locale = ({ children }) => {
  const [lang, setLang] = useState(i18n.getDefaultLocale())
  const onChangeLanguage = (locale: string) => {
    setLang(locale)
  }
  const messages = i18n.getMessages(lang)
  return (
    <IntlProvider messages={messages} key={lang} locale={lang} defaultLocale={i18n.getDefaultLocale()}>
      {children}
    </IntlProvider>
  )
}

export default Locale

Locale.propTypes = {
  children: PropTypes.object
}
