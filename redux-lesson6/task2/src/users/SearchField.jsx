import React, { Component } from 'react';
import { fetchUserData } from './users.gateway';
import { connect } from 'react-redux';
import { isFetchingSelector, userDataSelector } from './users.selectors';
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
        this.props.showSpinner();
        fetchUserData(this.state.userName)
            .then(userData => {
                this.props.userDataReceived(userData);
            })
    }

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
    showSpinner: PropTypes.func.isRequired,
};

const mapDispatch = {
    showSpinner: usersActions.showSpinner,
    userDataReceived: usersActions.userDataReceived,
}

export default connect(null, mapDispatch)(SearchField);