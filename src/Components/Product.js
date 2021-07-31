import React, { Component } from 'react';

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.data);
  }

  render() {
    const { title, brand, price, id } = this.props.location.state.data;
    return (
      <article>
        <div>
          <h4>
            id: {id} {title}
          </h4>
          <h4>{brand}</h4>
          <h4>{price}</h4>
        </div>
      </article>
    );
  }
}
