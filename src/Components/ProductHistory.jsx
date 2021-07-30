import React, { Component } from 'react';
import mockData from '../data/mockData';

export default class ProductHistory extends Component {
  constructor() {
    super();
    localStorage.setItem('productHistory', JSON.stringify(tmp));
    //1. 로컬스토리지에서 사용자 히스토리를 가져온다. storage.setItem(keyName, keyValue);
    // 히스토리에서 내가 필요한 것: (사용자가 본) 브랜드 이름.

    this.state = {
      productHistory: JSON.parse(localStorage.getItem('productHistory')) || [],
      allBrand: [],
      checkedBrand: [],
    };
  }

  componentDidMount() {
    //브랜드 리스트 배열 (중복X)
    const setBrandList = () => {
      const hi = mockData.map(el => {
        return el.brand;
      });
      const set = new Set(hi);
      const setBrand = [...set];
      this.setState({
        allBrand: setBrand,
      });
    };
    setBrandList();
  }

  // 체크박스 전체 선택
  handleAllCheck = checked => {
    const { allBrand } = this.state;

    if (checked) {
      let idxArr = [];
      allBrand.forEach(el => idxArr.push(el.idx));
      this.setState({
        checkedBrand: idxArr,
      });
    } else {
      this.setState({
        checkedBrand: [],
      });
    }
  };

  //  체크박스 브랜드 별 선택
  handleSingleCheck = (checked, idx) => {
    const { checkedBrand } = this.state;

    if (checked) {
      this.setState({
        checkedBrand: [...checkedBrand, idx],
      });
    } else {
      this.setState({
        checkedBrand: checkedBrand.filter(el => el !== idx),
      });
    }
  };

  render() {
    const { allBrand, productHistory, checkedBrand } = this.state;

    return (
      <>
        <h1>사용자 상품 조회 이력</h1>
        <section>
          <div>
            브랜드
            <label className="seletAll">
              <input
                checked={checkedBrand.length === allBrand.length ? true : false}
                onChange={e => this.handleAllCheck(e.target.checked)}
                type="checkbox"
                name="전체"
                value="전체"
              />
              전체 브랜드
            </label>
            {allBrand.map((el, idx) => {
              return (
                <label className="seletEach">
                  <input
                    checked={checkedBrand.includes(el.idx) ? true : false}
                    onChange={e => this.handleSingleCheck(e.target.checked, el.idx)}
                    type="checkbox"
                    name={el}
                    value={el}
                  />
                  {el}
                </label>
              );
            })}
          </div>

          <div>
            <label>
              <input type="checkbox" name="ignore" value="ignore" />
              관심없는 제품 제외하기
            </label>
          </div>
          <select>
            <option>최신순</option>
            <option>낮은 가격</option>
          </select>
        </section>
        {productHistory && checkedBrand.length > 0 ? (
          <div>
            <h2>여기에 이제 렌더링 할거에요!</h2>
            {productHistory.map(product => (
              <div style={{ margin: '1rem 0' }}>
                <div>상품명: {product.title}</div>
                <div>브랜드: {product.brand}</div>
                <div>가격: {product.price}</div>
              </div>
            ))}
          </div>
        ) : (
          <h2>사용자가 아무것도 보질 않았어요!</h2>
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
  {
    title: '나이키 윈드러너 블랙 L',
    brand: '나이키',
    price: 60000,
    date: '',
    ignore: true,
  },
  {
    title: '나이키바람막이',
    brand: '나이키',
    price: 68000,
    date: '',
    ignore: true,
  },
  {
    title: '구찌 정품 카드지갑 (급처)',
    brand: '구찌',
    price: 100000,
    date: '',
    ignore: false,
  },
  {
    title: '나이키 트레이닝 바람막이',
    brand: '나이키',
    price: 75000,
    date: '',
    ignore: true,
  },
];
