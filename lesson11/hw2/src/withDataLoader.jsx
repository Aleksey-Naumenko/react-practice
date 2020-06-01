import React, { Component } from "react";
import Spinner from "./Spinner";

export const withDataLoader = (url) => {
  return function (WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
      }

      componentDidMount() {
        return fetch(url)
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }

            throw new Error("FAILED TO FETCH!");
          })
          .then((data) =>
            this.setState({
              data,
            })
          );
      }

      render() {
        const data = this.state.data;
        const props = this.props;
        if (!data) {
          return <Spinner />;
        } else {
          return <WrappedComponent data={data} {...props} />;
        }
      }
    };
  };
};
