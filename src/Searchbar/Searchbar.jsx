import PropTypes from 'prop-types'
import { Component } from 'react'
export default class Searchbar extends Component {
    
    state = {
        searchInput: " ",
    };
    
    handlerChange = (e) => {
        this.setState({ searchInput: e.target.value })
    };

    onSubmit = (e) => {
        
        e.preventDefault()
        this.props.onSubmit(this.state.searchInput)
        this.setState({searchInput: ""})
    }

    render() {

        return(
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.onSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
    
        <input
          className="SearchForm-input"
          value={this.state.searchInput}
          type="search"
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