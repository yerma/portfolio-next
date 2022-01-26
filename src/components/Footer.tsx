import { useState } from 'react'

const Footer = () => {
  const [open, toggleOpen] = useState(false)
  return (
    <footer className={`p-3 ${open ? 'active' : ''}`} onClick={() => toggleOpen(!open)}>
        <h4><FormattedMessage id="nav.contact" /></h4>
        <div className="d-flex">
            <div className="col-xs-12 col-md-6 row">
                <a className="p-2 align-self-middle" href="mailto:yerma.araya@gmail.com">
                    <i className="fa fa-envelope-o fa-lg">&nbsp;</i>&nbsp;yerma.araya@gmail.com</a>
            </div>
            <div className="col-xs-12 col-md-6 d-flex align-items-center justify-content-md-end">
                <a className="p-1" rel="noreferrer" href="https://github.com/yerma" target="_blank"><i className="fa fa-github fa-lg">&nbsp;</i></a>
                <a className="p-1" rel="noreferrer" href="https://www.behance.net/yerma" target="_blank"><i className="fa fa-behance fa-lg">&nbsp;</i></a>
                <a className="p-1" rel="noreferrer" href="https://www.linkedin.com/in/yermain-araya-villacura-6911a1103/" target="_blank"><i className="fa fa-linkedin fa-lg">&nbsp;</i></a>
            </div>
        </div>
    </footer>
)
}

export default Footer
