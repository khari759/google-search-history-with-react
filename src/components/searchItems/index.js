import './index.css'

const SearchItem = props => {
  const {Items, deleteBtn} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = Items

  const delBtn = () => {
    deleteBtn(id)
  }

  return (
    <li className="list-card">
      <p className="time">{timeAccessed}</p>
      <div className="container">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <div className="card">
          <div className="title-card">
            <h1 className="title-name">{title}</h1>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button
            type="button"
            className="button"
            testid="delete"
            onClick={delBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}
export default SearchItem
