const getProductDetail = (id) => {
  return async (dispatch, getState) => {
    const url = `http://localhost:4000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
};

export const productDetailAction = { getProductDetail };
