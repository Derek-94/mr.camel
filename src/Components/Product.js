import React, { Component } from 'react';
import './Product.css';
import { getProductData, getRandomNumber } from '../utils';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.callRandomProduct = this.callRandomProduct.bind(this);
    this.setIgnore = this.setIgnore.bind(this);
    this.gotoRecentHistory = this.gotoRecentHistory.bind(this);
  }

  getRandomValue() {
    let random = getRandomNumber(0, this.props.productData.length);
    return random;
  }

  callRandomProduct() {
    let random = this.getRandomValue();
    const nowProduct = this.props.productData.find(item => item.id === random);
    nowProduct.ignore = false;
    this.props.addRecentHistory(nowProduct);
    this.props.history.push(`/product/${random}`);
  }

  setIgnore() {
    let random = this.getRandomValue();

    const nowProduct = this.props.productData.find(item => item.id === random);
    nowProduct.ignore = true;
    this.props.addRecentHistory(nowProduct);
    this.props.history.push(`/product/${random}`);
  }

  gotoRecentHistory() {
    this.props.history.push(`/recentList`);
  }

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
          <input
            className="product-btn"
            type="button"
            value="랜덤 상품 조회"
            onClick={this.callRandomProduct}
          />
          <input className="product-btn" type="button" value="관심 없음" onClick={this.setIgnore} />
          <input
            className="product-btn"
            type="button"
            value="최근 본 상품"
            onClick={this.gotoRecentHistory}
          />
        </div>
      </div>
    );
  }
}
