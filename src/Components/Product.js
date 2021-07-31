import React, { Component } from 'react';
import './Product.css';
import { getRandomNumber } from '../utils';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.callRandomProduct = this.callRandomProduct.bind(this);
    this.setIgnore = this.setIgnore.bind(this);
    this.gotoRecentHistory = this.gotoRecentHistory.bind(this);
  }

  getRandomValue(len) {
    let random = getRandomNumber(0, len);
    return random;
  }

  callRandomProduct() {
    this.getNewItem(false);
  }

  getNewItem(isIgnore) {
    const ignoreList = this.props.recentProducts
      .filter(item => item.ignore === true)
      .map(item => item.id);
    ignoreList.push(parseInt(this.props.match.params.id));

    const productList = this.props.productData.filter(
      item => !ignoreList.find(ignoreID => ignoreID === item.id),
    );
    if (productList.length === 0) {
      this.props.history.push(`/product/-1`);
    } else {
      let random = this.getRandomValue(productList.length);
      const nowProduct = productList[random];
      nowProduct.ignore = isIgnore;
      this.props.addRecentHistory(nowProduct);
      this.props.history.push(`/product/${nowProduct.id}`);
    }
  }

  setIgnore() {
    this.getNewItem(true);
  }

  gotoRecentHistory() {
    this.props.history.push(`/recentList`);
  }

  render() {
    const data = this.props.productData.find(
      item => item.id === parseInt(this.props.match.params.id),
    );
    const { title, brand, price, id } = data;
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
