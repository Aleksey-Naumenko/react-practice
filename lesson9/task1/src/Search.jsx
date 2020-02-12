import React, { Component } from 'react';

class Search extends Component {
    state = {
        value: '',
    }

    onInputChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    }

    onSearch = () => {        
        alert(`Search text: ${this.state.value}`);
    }

    render() {
        return (
            <form className="search">
                <input type="text" className="search__input" onChange={this.onInputChange} value={this.state.value} />
                <button className="search__button" onClick={this.onSearch}>Search</button>
            </form>
        )
    }
}

export default Search;