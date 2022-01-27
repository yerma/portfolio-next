import { useTranslation } from "react-i18next"
import { useState } from 'react'
import ProjectDetail from "../components/ProjectDetail"
import works from '../../data/works.json'

const CATEGORIES = [
  { key: 'all', label: 'portfolio.all', iconClasses: '' },
  { key: 'web', label: 'Web', iconClasses: 'fa fa-code fa-lg' },
  { key: 'editorial', label: 'Editorial', iconClasses: 'fa fa-book fa-lg' },
  { key: 'motion-graphics', label: 'Motion Graphics', iconClasses: 'fa fa-play fa-lg' },
  { key: 'branding', label: 'portfolio.corporate', iconClasses: 'fa fa-lightbulb-o fa-lg' }
]

const Portfolio = () => {
  const [filteredWorks, setFilteredWorks] = useState(works)
  const [activeCategory, setActiveCategory] = useState(null)
  const { t } = useTranslation()

  const onFilter = (category: string) => {
    if (!category || category === 'all') return setFilteredWorks(works)

    const filtered = works.filter(work => work.category === category)
    setFilteredWorks(filtered)
  }

  const renderFilters = CATEGORIES.map((cat, idx) => (
    <li key={idx}>
      <a className={`filter-btn ${activeCategory === cat.key ? 'active' : ''}`}
        onClick={() => onFilter(cat.key)} >
        <i className={cat.iconClasses} /><br />
        <span className="d-none d-md-block">{t(cat.label)}</span>
      </a>
    </li>
  ))
  
  return (
    <div className="trabajos">
      <ul className="categorias d-flex align-items-center justify-content-around">
        { renderFilters }
      </ul>
      <div className="trabajos-grid d-flex flex-wrap justify-content-around justify-content-md-start">
        { filteredWorks.map((work, index) =><ProjectDetail key={index} {...work} />) }
      </div>
    </div>
  )
}

export default Portfolio
