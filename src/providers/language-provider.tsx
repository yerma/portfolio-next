import { createContext, useContext, useEffect, useState } from 'react'
import i18nCb from '../utils/i18n'

interface LangContext {
  lang: string;
  setLang: () => string
}

const LanguageStateContext = createContext({} as LangContext)

const LanguageProvider = ({ children } ) => {
  const [lang, setLang] = useState('en')

  useEffect(() => {
    i18nCb(lang)
  }, [lang])

  return <LanguageStateContext.Provider value={{ lang, setLang }}>
    {children}
  </LanguageStateContext.Provider>
}

function useLang () {
  const context = useContext(LanguageStateContext)
  if (context === undefined) {
    throw new Error('useLang must be used within a LanguageProvider')
  }
  return context
}

export { LanguageProvider, useLang }
