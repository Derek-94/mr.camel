import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>product {this.props.match.params.id}</div>;
  }
}
