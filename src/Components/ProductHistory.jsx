import React, { Component } from 'react';
import mockData from '../data/mockData';

import './productHistory.css';
import './Products.css';

export default class ProductHistory extends Component {
  constructor() {
    super();
    localStorage.setItem('productHistory', JSON.stringify(tmp));

    this.state = {
      productHistoryOrigin: JSON.parse(localStorage.getItem('productHistory')) || [],
      productHistoryModified: [],
      ignoreFlag: false,
      checkedBrand: [],
      allBrand: [],
      sortValue: 'recent,',
    };
  }

  componentDidMount() {
    const setBrandList = () => {
      const sortBrand = mockData.map(brands => {
        return brands.brand;
      });
      const brandsArr = new Set(sortBrand);
      const brandList = [...brandsArr];
      this.setState({
        allBrand: brandList,
        checkedBrand: brandList,
      });
    };
    setBrandList();
  }

  shouldComponentUpdate(nextState) {
    if (this.state.productHistoryModified !== nextState.productHistoryModified) {
      return true;
    }
    if (this.state.checkedBrand !== nextState.checkedBrand) {
      return true;
    }
  }

  onClickIgnoreBox = () => {
    const { ignoreFlag, productHistoryOrigin } = this.state;
    if (!ignoreFlag) {
      this.setState({
        productHistoryModified: productHistoryOrigin.filter(product => !product.ignore),
        ignoreFlag: true,
      });
    } else {
      this.setState({
        productHistoryModified: productHistoryOrigin,
        ignoreFlag: false,
      });
    }
  };

  handleAllCheck = e => {
    const { allBrand, productHistoryOrigin } = this.state;
    if (e.target.checked) {
      this.setState({
        checkedBrand: allBrand,
        productHistoryModified: productHistoryOrigin,
      });
    } else {
      this.setState({
        checkedBrand: [],
      });
    }
  };

  handleSingleCheck = e => {
    const { checkedBrand, productHistoryModified, productHistoryOrigin } = this.state;

    if (productHistoryModified.length === 0) {
      this.setState({
        productHistoryModified: productHistoryOrigin,
      });
    }

    if (e.target.checked) {
      this.setState({
        checkedBrand: [...checkedBrand, e.target.value],
      });
    } else {
      const unCheck = e.target.value;
      this.setState({
        checkedBrand: checkedBrand.filter(brand => brand !== unCheck),
      });
    }
  };

  onChangeSort = e => {
    const sortTargetValue = e.target.value;
    const { productHistoryOrigin } = this.state;
    this.setState({
      sortValue: sortTargetValue,
    });

    switch (sortTargetValue) {
      case 'dateRecent':
        this.setState({
          productHistoryModified: productHistoryOrigin.sort(
            (item1, item2) => item1.date - item2.date,
          ),
        });
        break;
      case 'priceAscend':
        this.setState({
          productHistoryModified: productHistoryOrigin.sort(
            (item1, item2) => item1.price - item2.price,
          ),
        });
        break;
      case 'priceDescend':
        this.setState({
          productHistoryModified: productHistoryOrigin.sort(
            (item1, item2) => item2.price - item1.price,
          ),
        });
        break;
      default:
        console.log('no default');
    }
  };

  render() {
    const { allBrand, checkedBrand, productHistoryOrigin, productHistoryModified, sortValue } =
      this.state;
    return (
      <>
        <header>
          <h2>????????? ?????? ?????? ??????</h2>
        </header>
        <section>
          <div className="check_brand">
            <h4>????????? ??????</h4>
            <label className="check_all">
              <input
                checked={checkedBrand.length === allBrand.length ? true : false}
                onChange={e => this.handleAllCheck(e)}
                type="checkbox"
                name="??????"
                value="??????"
                style={{ marginRight: '5px' }}
              />
              ??????
            </label>
            {allBrand.map((el, idx) => {
              return (
                <label className="check_each">
                  <input
                    checked={checkedBrand.includes(allBrand[idx]) ? true : false}
                    onChange={e => this.handleSingleCheck(e)}
                    type="checkbox"
                    name={el}
                    value={el}
                    style={{ marginRight: '5px' }}
                  />
                  {el}
                </label>
              );
            })}
          </div>
          <br />
          <div className="filter-others">
            <label>
              <input
                style={{ margin: '0.5rem 5px 0 0' }}
                onClick={this.onClickIgnoreBox}
                type="checkbox"
                name="ignore"
                value="ignore"
              />
              ???????????? ?????? ????????????
            </label>
            <select className="sort-option" value={sortValue} onChange={this.onChangeSort}>
              <option value="dateRecent">?????????</option>
              <option value="priceAscend">?????? ?????? ??????</option>
              <option value="priceDescend">?????? ?????? ??????</option>
            </select>
          </div>
        </section>
        {console.log(productHistoryModified)}
        {productHistoryModified.length ? (
          <section className="container">
            {productHistoryModified.map((product, index) => {
              return (
                checkedBrand.includes(product.brand) && (
                  <article key={product.title}>
                    <div className="product-image">
                      <i className="tags icon"></i>
                    </div>
                    <div className="product-details">
                      <h4>{product.title}</h4>
                      <p>
                        ?????????<span>{product.brand}</span>
                      </p>
                      <p>
                        ?????? <span>&#65510; {product.price}</span>
                      </p>
                    </div>
                  </article>
                  // <div key={index} style={{ margin: '1rem 0' }}>
                  //   <div>?????????: {product.title}</div>
                  //   <div>?????????: {product.brand}</div>
                  //   <div>??????: {product.price}</div>
                  //   <div>{product.ignore ? `????????????` : `????????????`}</div>
                  //   <hr />
                  // </div>
                )
              );
            })}
          </section>
        ) : (
          ``
        )}
        {productHistoryOrigin.length && !productHistoryModified.length ? (
          <section className="container">
            {productHistoryOrigin.map((product, index) => (
              <article key={product.title}>
                <div className="product-image">
                  <i className="tags icon"></i>
                </div>
                <div className="product-details">
                  <h4>{product.title}</h4>
                  <p>
                    ?????????<span>{product.brand}</span>
                  </p>
                  <p>
                    ?????? <span>&#65510; {product.price}</span>
                  </p>
                </div>
              </article>
            ))}
          </section>
        ) : (
          !productHistoryModified.length && <h2>???????????? ???????????? ?????? ????????????!</h2>
        )}
      </>
    );
  }
}
const tmp = [
  {
    title: '?????? ????????? ?????? ?????? 245 30000???',
    brand: '?????????',
    price: 30000,
    date: '',
    ignore: true,
  },
  {
    title: '???????????? ?????? ?????? ???????????? ?????????',
    brand: '??????',
    price: 380000,
    date: '',
    ignore: false,
  },
  {
    title: '?????? ?????????????????? ??????????????? ????????? 95',
    brand: '??????????????????',
    price: 350000,
    date: '',
    ignore: true,
  },
  {
    title: '?????? ???????????? ????????? ????????? ?????????',
    brand: '????????????',
    price: 400000,
    date: '',
    ignore: false,
  },
  {
    title: '????????? ???????????? ?????? L',
    brand: '?????????',
    price: 60000,
    date: '',
    ignore: true,
  },
  {
    title: '?????????????????????',
    brand: '?????????',
    price: 68000,
    date: '',
    ignore: true,
  },
  {
    title: '?????? ?????? ???????????? (??????)',
    brand: '??????',
    price: 100000,
    date: '',
    ignore: false,
  },
  {
    title: '????????? ???????????? ????????????',
    brand: '?????????',
    price: 75000,
    date: '',
    ignore: true,
  },
];
