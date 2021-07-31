import React, { Component } from 'react';
import './Product.css';

export default class Product extends Component {
  constructor(props) {
    super(props);
    console.log(props.location.state.data);
  }

  render() {
    const { title, brand, price, id } = this.props.location.state.data;
    return (
      <div className="content-container">
        <div className="product-img"></div>

        <div className="content">
          <div className="content-info">
            <p>{id}</p>
            <h4>{title}</h4>
            <h4>{brand}</h4>
            <h4>{price}</h4>
          </div>
          <input className="product-btn" type="button" value="랜덤 상품 조회" />
          <input className="product-btn" type="button" value="관심 없음" />
          <input className="product-btn" type="button" value="최근 본 상품" />
        </div>
      </div>
    );
  }
}
