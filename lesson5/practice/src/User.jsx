import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    userData: null,
  };

  componentDidMount() {
    const { userId } = this.props;
    this.fetchUser(userId);
  };

  componentDidUpdate(prevProps) {
    console.log("==> User update");
    const { userId } = this.props;
    if (prevProps.userId !== userId) {
      this.fetchUser(userId);
    }
  };

  fetchUser(userId) {
    fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          userData: data,
        });
      });
  };

  render() {
    console.log("==> User render");
    const { userData } = this.state;
    if (!userData) {
      return null;
    }
    const { avatar_url, name, location } = userData;
    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
};

User.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default User;
