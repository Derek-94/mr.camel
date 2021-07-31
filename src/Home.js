import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <h1>Home</h1>
        <ul>
          <li>
            <Link to="/">홈으로</Link>
          </li>
          <li>
            <Link to="/product">상품 상세 페이지</Link>
          </li>
          <li>
            <Link to="/recentList">상품 조회 이력 페이지</Link>
          </li>
        </ul>
      </>
    );
  }
}
