// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Foo extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    info: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      info: props.info || '',
      loading: props.loading,
    };
  }

  render() {
    return <div className={this.state.loading ? 'foo-loading' : 'foo'}>{this.state.info}</div>;
  }
}

export default Foo;
