import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import ProductHistory from './Components/ProductHistory';

class Router extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/product" exact component={Home} />
        <Route path="/recentList" component={ProductHistory} />
      </div>
    );
  }
}

export default Router;
