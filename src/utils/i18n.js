import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as languages from '../translations'

const i18nCb = (lang = 'en') => {
  const { en, es } = languages
  return i18n
    .use(initReactI18next)
    .init({
      resources: { en, es },
      lng: lang,
      fallbackLng: ['en', 'es'],
      load: 'languageOnly',
      interpolation: {
        escapeValue: false
      }
    })
}

export default i18nCb