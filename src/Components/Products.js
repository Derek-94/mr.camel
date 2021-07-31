import { Component } from 'react';
import { Link } from 'react-router-dom';
import mockData from '../data/mockData';
import './Products.css';

class Products extends Component {
  constructor(props) {
    super(props);

    // add id to mockData
    let iterator = 1;
    function addIdentifier(target) {
      target.id = iterator;
      iterator++;
    }

    function loop(obj) {
      for (let i in obj) {
        let j = obj[i];
        if (typeof j === 'object') {
          if (j.length === undefined) {
            addIdentifier(j);
          }
          loop(j);
        }
      }
    }

    loop(mockData);
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
            <Link to={`/product/${data.id}`}>
              <article key={data.id}>
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
