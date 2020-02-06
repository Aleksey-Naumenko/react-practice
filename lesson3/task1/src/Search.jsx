import React from 'react';

const Search = (props) => {
    return (
        <div className="search">
            <h1 className="serch__title">{`Hello, ${props.name}. What to search for you?`}</h1>
            <div className="search__field">
                <input type="text" className="search__input"/>
                <button className="search__button">Search</button>
            </div>
        </div>
    );
}

export default Search; 