import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useLang } from '../providers/language-provider'
import { useState } from 'react'

const Header = () => {
  const [navOpen, toggleNavOpen] = useState(false)
  const { t } = useTranslation()
  const { lang, setLang } = useLang()

  return (
    <nav className="navbar fixed-top navbar-expand-md px-md-5">
      <Link href="/">
        <a className="navbar-brand">
          <Image className="d-inline-block align-top" src='/img/logo.png' layout="fill" alt="logo principal" />
          <h1 className="d-inline-block align-middle align-sm-top">Yermaín Araya</h1>
        </a>
      </Link>

      <button type="button" className="hamburger hamburger--arrow collapsed d-md-none"
              onClick={() => toggleNavOpen(!navOpen)} data-target="#mainNavbar">
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>

      <div className={`navbar-collapse ${navOpen ? 'active' : ''}`}>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item d-md-none">
              <Link href="/">
                <a className="nav-link">{t('nav.home')}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">{t('nav.about')}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">
                <a className="nav-link">{t('nav.portfolio')}</a>
              </Link>
            </li>
            <li className="language dropdown d-none d-md-block">
              <button className="" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-globe fa-lg" />
              </button>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                <a className={"dropdown-item " + (lang == 'es'? 'active' : '')}
                  onClick={() => setLang('es')}>Español</a>
                <a className={"dropdown-item " + (lang === 'en'? 'active' : '')}
                  onClick={() => setLang('en')}>English</a>
              </div>
            </li>
              <div className="d-md-none pt-5 mt-5 contacto">
                  <div className="mail col-12">
                      <a className="p-2 align-self-middle" href="mailto:yerma.araya@gmail.com">
                          <i className="fa fa-envelope-o fa-lg">&nbsp;</i>&nbsp;yerma.araya@gmail.com</a>
                  </div>
                  <div className="col-12 pt-2 mt-2">
                    <a className="p-1" rel='noreferrer' href="https://github.com/yerma" target="_blank">
                        <i className="fa fa-github fa-2x">&nbsp;</i></a>
                    <a className="p-1" rel='noreferrer' href="https://www.behance.net/yerma" target="_blank">
                        <i className="fa fa-behance fa-2x">&nbsp;</i></a>
                    <a className="p-1" rel='noreferrer' href="https://www.linkedin.com/in/yermain-araya-villacura-6911a1103/" target="_blank">
                        <i className="fa fa-linkedin fa-2x">&nbsp;</i></a>
                  </div>
              </div>
          </ul>
      </div>
  </nav>
  )
}

export default Header
