import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

class Products extends Component {
  //constructor(props) {
  //  super(props);
  //}

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
          {this.props.productData.map(data => (
            <Link
              to={{
                pathname: `/product/${data.id}`,
              }}
              key={data.title}
              id={data.id}
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
