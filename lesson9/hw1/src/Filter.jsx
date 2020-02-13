import React from 'react';

const Filter = props => {

        return (
            <div className="filter">
                <span className="filter__count">{props.count}</span>
                <input
                    type="text"
                    className="filter__input"
                    name="search"
                    value={props.filterText}
                    onChange={props.onChange}
                />
            </div>
        )
};

export default Filter;