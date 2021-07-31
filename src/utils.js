export const getProductData = async () => {
  try {
    const data = await fetch('../public/products.json');
    const jsonData = await data.json();
    return jsonData;
  } catch (e) {
    console.log('error: json file load fail');
  }
};

export const getLocalStorage = key => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

export const getRecentHistory = () => {
  return getLocalStorage('productHistory');
};

export const setLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const setRecentHistory = value => {
  setLocalStorage('productHistory', value);
};

export const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};
