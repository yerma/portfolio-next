import type { NextPage } from 'next'
import { useRef } from 'react'
import useTyped from '../utils/hooks/useTyped'
import { useTranslation } from 'react-i18next'

const Home: NextPage = () => {
  const { t } = useTranslation()
  const typedEl = useRef(null)
  useTyped(typedEl, { strings: [
    t('home.line1'),
    t('home.line2'),
    t('home.line3')
  ]})

  return (
    <div className="home d-flex align-items-center">
      <div className="titulo">
        <h3>Yermaín Araya</h3>
        <p><span ref={typedEl} /></p>
      </div>
    </div>
  )
}

export default Home
