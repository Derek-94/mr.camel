import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Home from './Home';
import ProductHistory from './Components/ProductHistory';

class Router extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">홈으로</Link>
          </li>
          <li>
            <Link to="/">상품 상세 페이지</Link>
          </li>
          <li>
            <Link to="/recentList">상품 조회 이력 페이지</Link>
          </li>
        </ul>
        <Route exact path="/" component={Home} />
        <Route path="/product" exact component={Home} />
        <Route path="/recentList" component={ProductHistory} />
      </div>
    );
  }
}

export default Router;
