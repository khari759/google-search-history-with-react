import {Component} from 'react'

import SearchItem from '../searchItems'

import './index.css'

class History extends Component {
  state = {searchInput: ''}

  onchange = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteBtn = id => {
    console.log(id)
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchInput} = this.state

    const searchResults = initialHistoryList.filter(each =>
      each.title.includes(searchInput),
    )

    console.log(searchResults)
    let result

    if (searchResults.length !== 0) {
      result = true
    } else {
      result = false
    }

    return (
      <div className="bg">
        <nav className="history-nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
            alt="app logo"
            className="history-img"
          />
          <div className="history-search">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-img"
            />
            <input
              type="search"
              placeholder="Search history"
              className="search-input"
              onChange={this.onchange}
            />
          </div>
        </nav>
        <div className="cards-container">
          {result ? (
            <ul className="cards-list">
              {searchResults.map(each => (
                <SearchItem
                  key={each.id}
                  Items={each}
                  deleteBtn={this.deleteBtn}
                />
              ))}
            </ul>
          ) : (
            <h1 className="no-history">There is no history to show</h1>
          )}
        </div>
      </div>
    )
  }
}
export default History
