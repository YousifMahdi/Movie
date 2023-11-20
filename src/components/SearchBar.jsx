import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('search movie...');

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = () => {
        onSearch(searchTerm)
    }

    return (
        <div className="search-bar">
            <input
                type = "text"
                value = {searchTerm}
                onChange = {handleInputChange}
                onFocus = {() => setSearchTerm('')}
                onBlur = {() => setSearchTerm('search movie...')} 
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

export default SearchBar;