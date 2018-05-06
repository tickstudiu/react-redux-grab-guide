import React, { Component } from "react";

import * as tools from "../utils";

export const PrivateRoute = ComposedComponent => {
  class PrivateRoute extends Component {
    componentDidMount() {
      const {path} = this.props.match;
      if (!tools.getLanguage()) {
        tools.setDefaultLanguage();
      }
  
      if (!tools.isAuth()) {
        this.props.history.push('/login')
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  return PrivateRoute;
};
