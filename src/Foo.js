// @flow

import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
  loading: PropTypes.bool.isRequired,
  info: PropTypes.string
};

const defaultProps = {
  info: ""
};

class Foo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="foo">Bar</div>;
  }
}

Foo.propTypes = propTypes;
Foo.defaultProps = defaultProps;

export default Foo;
