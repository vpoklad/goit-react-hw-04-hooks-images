import PropTypes from 'prop-types'
import { Component } from 'react'
export default class Searchbar extends Component {
    
    state = {
        searchInput: " ",
    };
    
    handlerChange = (e) => {
        this.setState({ searchInput: e.target.value })
    };

    render() {

        return(
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={(e) => {
                    e.preventDefault()
                    console.log(this.props.onSubmit)
                    console.log(this.state.searchInput)
                    this.props.onSubmit(this.state.searchInput)
                }}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
    
        <input
          className="SearchForm-input"
          value={this.state.searchQue}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.handlerChange}
        />
      </form>
    </header>
        )
        
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}