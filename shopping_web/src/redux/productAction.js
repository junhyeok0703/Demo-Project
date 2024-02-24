function handleData(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:4000/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    // setProductList(data);
  };
}

export const productAction = { handleData };
