import React, { Component } from 'react';
import { fetchUserData } from './users.gateway';
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
        this.props.showSpinner();
        this.props.getUserData();
        // fetchUserData(this.state.userName)
        //     .then(userData => {
        //         this.props.userDataReceived(userData);
        //     })
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
    showSpinner: PropTypes.func.isRequired,
    userDataReceived: PropTypes.func.isRequired,
    getUserData: PropTypes.func.isRequired,
};

const mapDispatch = {
    showSpinner: usersActions.showSpinner,
    userDataReceived: usersActions.userDataReceived,
    getUserData: usersActions.getUserData
}

export default connect(null, mapDispatch)(SearchField);