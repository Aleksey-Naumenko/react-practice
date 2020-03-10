import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import PropTypes from 'prop-types';

class SearchField extends Component {
    state = {
        userName: '',
    }
    onChange = e => {
        this.setState({
            userName: e.target.value,
        })
    };

    handleUserSearch = () => {
        this.props.getUserData(this.state.userName);
    };

    render() {
        return (
            <div className="name-form">
                <input
                    type="text"
                    className="name-form__input"
                    value={this.state.userName}
                    onChange={this.onChange} />
                <button
                    className="name-form__btn btn"
                    onClick={this.handleUserSearch}
                >Show</button>
            </div>
        );
    }
};

SearchField.propTypes = {
    getUserData: PropTypes.func.isRequired,
};

const mapDispatch = {
    getUserData: usersActions.getUserData
}

export default connect(null, mapDispatch)(SearchField);