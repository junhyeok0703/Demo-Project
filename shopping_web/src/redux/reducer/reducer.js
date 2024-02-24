let initialState = {
  productList: [],
};
function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
}
export default reducer;
