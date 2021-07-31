import { Component } from 'react';
import { Link } from 'react-router-dom';
import mockData from '../data/mockData';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);
    for (let i = 0; i < mockData.length; i++) {
      mockData[i].id = i;
    }
  }

  render() {
    return (
      <>
        <header>
          <h2>전체상품조회</h2>
          <button>
            <Link to="/recentList">최근 본 상품</Link>
          </button>
        </header>
        <section className="container">
          {mockData.map(data => (
            <Link
              to={{
                pathname: `/product/${data.id}`,
                state: {
                  data,
                },
              }}
              key={data.title}
            >
              <article key={data.title}>
                <div className="product-image">
                  <i className="tags icon"></i>
                </div>
                <div className="product-details">
                  <h4>{data.title}</h4>
                  <p>
                    브랜드<span>{data.brand}</span>
                  </p>
                  <p>
                    가격 <span>&#65510; {data.price}</span>
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </>
    );
  }
}

export default Products;
