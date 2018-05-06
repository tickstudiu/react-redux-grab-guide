import React, { Component } from "react";

import * as tools from "../utils";

export const PublicRoute = ComposedComponent => {
  class PublicRoute extends Component {
    render() {
      if (!tools.getLanguage()) {
        tools.setDefaultLanguage();
      }
      return <ComposedComponent />;
    }
  }

  return PublicRoute;
};
