import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Products from './Components/Products';
import Product from './Components/Product';

import Home from './Home';
import ProductHistory from './Components/ProductHistory';
import mockData from './data/mockData';

class Router extends Component {
  constructor(props) {
    super(props);
    for (let i = 0; i < mockData.length; i++) {
      mockData[i].id = i;
    }
    this.state = {
      productData: mockData,
      recentProducts: [],
    };
    console.log('mockData: ', this.state.productData);
    this.addRecentHistory = this.addRecentHistory.bind(this);
  }

  addRecentHistory(presentData) {
    const newRecentProduct = this.state.recentProducts.filter(item => item.id !== presentData.id);
    presentData.date = new Date();
    this.setState({ recentProducts: [...newRecentProduct, presentData] });
  }

  render() {
    console.log(this.state.productData);
    return (
      <div>
        <Route exact path="/" component={Home} />
        <Route
          path="/product"
          exact
          render={() => <Products productData={this.state.productData} />}
        />
        <Route
          path="/product/:id"
          exact
          render={props => (
            <Product
              {...props}
              productData={this.state.productData}
              addRecentHistory={this.addRecentHistory}
            />
          )}
        />
        <Route path="/recentList" component={ProductHistory} />
      </div>
    );
  }
}

export default Router;
