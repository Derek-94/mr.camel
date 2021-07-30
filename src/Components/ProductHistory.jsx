import React, { Component } from 'react';

export default class ProductHistory extends Component {
  constructor(props) {
    super();
    localStorage.setItem('productHistory', JSON.stringify(tmp));

    this.state = {
      productHistoryOrigin: JSON.parse(localStorage.getItem('productHistory')) || [],
      productHistoryModified: [],
      brandSelected: [],
      ignoreFlag: false,
    };
  }

  shouldComponentUpdate(nextState) {
    if (this.state.productHistoryModified !== nextState.productHistoryModified) {
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

  render() {
    const { productHistoryOrigin, productHistoryModified } = this.state;
    return (
      <>
        <h1>사용자 상품 조회 이력</h1>
        <section>
          <div>
            브랜드
            <label>
              <input type="checkbox" name="스톤아일랜드" value="스톤아일랜드" />
              스톤아일랜드
            </label>
            <label>
              <input type="checkbox" name="polo" value="polo" />
              polo
            </label>
          </div>
          <div>
            <label>
              <input onClick={this.onClickIgnoreBox} type="checkbox" name="ignore" value="ignore" />
              관심없는 제품 제외하기
            </label>
          </div>
          <select>
            <option>최신순</option>
            <option>낮은 가격</option>
          </select>
        </section>
        {productHistoryModified.length ? (
          <div>
            <h2>상품</h2>
            {productHistoryModified.map((product, index) => (
              <div key={index} style={{ margin: '1rem 0' }}>
                <div>상품명: {product.title}</div>
                <div>브랜드: {product.brand}</div>
                <div>가격: {product.price}</div>
                <div>{product.ignore ? `관심없음` : `관심있음`}</div>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          ``
        )}
        {productHistoryOrigin.length && !productHistoryModified.length ? (
          <div>
            <h2>상품</h2>
            {productHistoryOrigin.map((product, index) => (
              <div key={index} style={{ margin: '1rem 0' }}>
                <div>상품명: {product.title}</div>
                <div>브랜드: {product.brand}</div>
                <div>가격: {product.price}</div>
                <div>{product.ignore ? `관심없음` : `관심있음`}</div>
                <hr />
              </div>
            ))}
          </div>
        ) : (
          !productHistoryModified.length && <h2>사용자가 아무것도 보질 않았어요!</h2>
        )}
      </>
    );
  }
}

const tmp = [
  {
    title: '중고 나이키 테아 흰검 245 30000원',
    brand: '나이키',
    price: 30000,
    date: '',
    ignore: true,
  },
  {
    title: '거의새것 정품 구찌 보스턴백 토트백',
    brand: '구찌',
    price: 380000,
    date: '',
    ignore: false,
  },
  {
    title: '중고 스톤아일랜드 쉐도우와팬 봄니트 95',
    brand: '스톤아일랜드',
    price: 350000,
    date: '',
    ignore: true,
  },
  {
    title: '중고 루이비통 장지갑 백화점 풀구성',
    brand: '루이비통',
    price: 400000,
    date: '',
    ignore: false,
  },
  { title: '나이키 윈드러너 블랙 L', brand: '나이키', price: 60000, date: '', ignore: true },
  { title: '나이키바람막이', brand: '나이키', price: 68000, date: '', ignore: true },
  { title: '구찌 정품 카드지갑 (급처)', brand: '구찌', price: 100000, date: '', ignore: false },
  { title: '나이키 트레이닝 바람막이', brand: '나이키', price: 75000, date: '', ignore: true },
];
