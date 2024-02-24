let initialState = {
  cnt: 0,
  id: "",
  password: "",
};

function reducer(state = initialState, action) {
  //액션을 가지고 어떤 작업을 할지 알려줘야함
  //state를 다 가지고있는 initialstate를 state로 받는다.
  //   switch (action.type)
  //   case
  switch (action.type) {
    case "증가하기":
      return { ...state, cnt: state.cnt + action.payload.num }; //...state는 다른 상태는 유지하데 cnt를 state.cnt+1을 해라
    case "로그인":
      return { ...state, id: action.payload.id, password: action.payload.pw };
    default:
      return { ...state };
  }
}

export default reducer;
