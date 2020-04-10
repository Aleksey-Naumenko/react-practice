import React, { Component } from "react";
import User from "./User";

class App extends Component {
  state = {
    userId: "facebook",
  };

  setUser = (userId) => {
    this.setState({
      userId,
    });
  };

  shouldComponentUpdate(nextProps, nextState) {
    const { userId } = this.state;
    return nextState.userId !== userId;
  };

  render() {
    const { userId } = this.state;
    return (
      <div className="page">
        <div className="page__content">
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <button type="button" onClick={() => this.setUser("facebook")}>
                Facebook
              </button>
            </li>
            <li className="navigation__item">
              <button type="button" onClick={() => this.setUser("github")}>
                Github
              </button>
            </li>
          </ul>
        </div>
        <User userId={userId} />
      </div>
    );
  }
}

export default App;
