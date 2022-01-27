import type { NextPage } from 'next'
import { useTranslation } from 'react-i18next'

const About: NextPage = () => {
  const { t } = useTranslation()

  return (
    <div className="about d-flex">
    <article className="col-md-6 offset-md-6 align-self-center">
        <div className="bio">
          <h3>{t("about.title")}</h3>
          <p>{t("about.description1")}</p>
          <p>{t("about.description2")}</p>
        </div>
        <hr />
        <div className="contact-details">
            <h4>{t("about.moreInfo")}</h4>
            <div className="contact-cols d-flex flex-wrap justify-content-around align-items-center">
                <div className="align-self-middle">
                    <a href="Yermain-Araya.pdf" target="_blank"><i className="fa fa-file-text-o fa-2x" />&nbsp;CV</a>
                </div>
                <div className="align-self-middle">
                    <a className="p-1" rel="noreferrer" href="https://github.com/yerma" target="_blank"><i className="fa fa-github fa-2x">&nbsp;</i></a>
                    <a className="p-1" rel="noreferrer" href="https://www.behance.net/yerma" target="_blank"><i className="fa fa-behance fa-2x">&nbsp;</i></a>
                    <a className="p-1" rel="noreferrer" href="https://www.linkedin.com/in/yermain-araya-villacura-6911a1103/" target="_blank"><i className="fa fa-linkedin fa-2x">&nbsp;</i></a>
                </div>
                <div className="align-self-middle">
                    <a className="p-1 align-self-middle" href="mailto:yerma.araya@gmail.com">
                        <i className="fa fa-envelope-o fa-lg" />&nbsp;yerma.araya@gmail.com</a>
                </div>
            </div>
        </div>
    </article>
</div>
  )
}

export default About
