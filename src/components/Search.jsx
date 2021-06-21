import React from 'react';
//import {mdSearch} from 'react-icons-md'
//styles
import '../styles/Search.css'
const Search = ({ handleSearchNote}) => {
    return (
        <div className="search">
  
            <input onChange={ (event) => handleSearchNote(event.target.value) } type="text" placeholder="type to search..."/>
        </div>

    )
}

export default Search;
