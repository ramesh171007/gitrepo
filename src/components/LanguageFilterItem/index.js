import './index.css'

const LanguageFilterItem = props => {
  const {filterDetail, clickedTab, isTabActive} = props
  const {id, language} = filterDetail
  const onClickedTab = () => {
    clickedTab(id)
  }
  const activeTabStyle = isTabActive ? 'active-style' : ''
  return (
    <li className="li-container">
      <button
        type="button"
        className={`btn-style ${activeTabStyle}`}
        onClick={onClickedTab}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
