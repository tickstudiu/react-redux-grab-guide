import React, { Component } from "react";

import * as tools from "../utils";

export const AuthenRoute = ComposedComponent => {
  class AuthenRoute extends Component {
    componentDidMount() {
      const {path} = this.props.match;
      if (!tools.getLanguage()) {
        tools.setDefaultLanguage();
      }
      
      if(tools.isAuth()) {
        this.props.history.push('/')
      }
    }
    
    render() {
      return <ComposedComponent {...this.props}/>;
    }
  }
  
  return AuthenRoute;
};
