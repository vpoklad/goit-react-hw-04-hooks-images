import PropTypes from 'prop-types'
import { useState } from 'react'


 

export default function Searchbar ({ onSubmit }) {
    
    const [searchInput, setSearchInput] = useState("");
    
    
    const handlerChange = (e) => {
        setSearchInput(e.target.value)
    };

   const handleSubmit = (e) => {
        
        e.preventDefault()
        if (searchInput.trim() === "") {
            alert('Input something!')
            return              
        }
       onSubmit(searchInput);
       setSearchInput('');
    }

    

        return(
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
    
        <input
          className="SearchForm-input"
          value={searchInput}
          type="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handlerChange}
        />
      </form>
    </header>
        )
        
    
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}