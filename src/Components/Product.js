import React, { Component } from 'react';
import './Product.css';
import { getProductData } from '../utils';

export default class Product extends Component {
  //constructor(props) {
  //  super(props);
  //  //(async () => {
  //  //  const data = await getProductData();
  //  //  console.log(data);
  //  //})();
  //}

  //callRandomProduct() {}

  //setIgnore() {}

  render() {
    const data = this.props.productData.find(
      item => item.id === parseInt(this.props.match.params.id),
    );
    const { title, brand, price, id } = data;
    console.log(this.props.match.params.id);
    console.log(this.props.productData);
    return (
      <div className="content-container">
        <div className="product-img"></div>
        <div className="content">
          <div className="content-info">
            <p>{id}</p>
            <h4>{title}</h4>
            <h4>{brand}</h4>
            <h4>{price} 원</h4>
          </div>
          <input className="product-btn" type="button" value="랜덤 상품 조회" />
          <input className="product-btn" type="button" value="관심 없음" />
          <input className="product-btn" type="button" value="최근 본 상품" />
        </div>
      </div>
    );
  }
}
