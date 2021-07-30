import { Component } from 'react';
import { Link } from 'react-router-dom';
import mockData from '../data/mockData';
import './Products.css';

export class Products extends Component {
  render() {
    return (
      <>
        <h3>전체상품조회</h3>
        <div class="top">
          <button>
            <Link to="/recentList">최근 본 상품</Link>
          </button>
        </div>
        <div className="container">
          {mockData.map(data => (
            <div className="product" key={data.title}>
              <div className="product-image">
                <i className="tags icon"></i>
              </div>
              <div className="product-details">
                <h4>{data.title}</h4>
                <div>
                  브랜드<span>{data.brand}</span>
                </div>
                <div>
                  가격 <span>&#65510; {data.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Products;
