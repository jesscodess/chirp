import React from 'react'
import './Search.css'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
                <input 
                type="text"
                placeholder="Search bird name..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                />
        </div>
    )
}

export default Search