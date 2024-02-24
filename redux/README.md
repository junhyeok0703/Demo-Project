# redux가 필요한이유

### - redux 개념

    쇼핑물 프로젝트를 예를 들것이다.
    - 로그인 페이지에서 로그인여부에 따라(isloged)이 상태를
    가지고 header컴포넌트에서는 로그인아이콘을 보여줄것인가 로그아웃을 보여줄것인가를 판단했고 privateroute에서 즉 productDetail을
    보여줄것인가 login페이지를 보여줄것인가 판단하여서
    모든 페이지에서 필요하여 app.js에서 상태를 주었다.
    같은 자식 컴포넌트간에 상태공유를 못하기때문에 상관없는 app은
    로그인여부상태를 가지고 있어야되는 상태였던것이다. props로 계속
    넘겨줬다.
    리액트는 한방향 소통이라서 그랬다.
    결론은 같은 자식 컴포넌트간에 상태를 공유할수없음으로 그의 부모컴포넌트가 상관없어도 가지고 있어야하고 props로 계속 넘겨줘야한다.
    단점 : props를 많이 씀 , 부모역할이 커짐

    그래서 redux가 나옴. store라는곳에 상태를 다가지고있음.
    store에서 가져옴

    근데 컴포넌트가 직접적으로 가져올수없음.
    순서가 필요함
    1. 컴포넌트는 action을 던짐(행동). - 상품정보가져와 (던질때 useDispatch)
    2. reducer(작업지시서) case안에 액션을 확인해서 상태에게 작업함
    3. store은 그냥 저장해둔걸 바뀌는곳
    4. 컴포넌트에서 쓸때 useSelector을 사용해서 가져와야함.

### - redux 셋업하기

    - react-redux(훅제공),redux설치
    1. <Provider store={store}>
        -> store을 app에 적용하기!
    2.store.js만들어주기 -> createStore로 store를 만들어야함
    3.let store = createStore(Reducer)
        -> 스토어를 만들건데 reudcer이라는 매개변수가 있다.
        -> 스토어를 바꾸는건 reudcer임
        -> 스토어->reducer을 추가해 provider로 app에 적용 이런순서가 나옴
    4.reducer만들기 (reducer은 함수임)
      let initialState = {

        cnt: 0,
        };

        function reducer(state = initialState, action) {
        //액션을 가지고 어떤 작업을 할지 알려줘야함
        //state를 다 가지고있는 initialstate를 state로 받는다.

        }
        ->이런 형식을 가지고 있다.
    5. index.js와 store.js에 세팅해주기
    import { createstore } from "redux";
    import { reducer } from "./reducer/reducer";
    let store = createstore(reducer);

    export default store;

### - redux 적용하기

    1. dispatch로 액션 던져주기
    const dispatch = useDispatch();
    const onClick = () => {
    dispatch({ type: "증가하기" });
    };
    2.액션에 따른 상태값 바꾸기
    let initialState = {
    cnt: 0,
    };

    function reducer(state = initialState, action) {
    //액션을 가지고 어떤 작업을 할지 알려줘야함
    //state를 다 가지고있는 initialstate를 state로 받는다.
    // switch (action.type)
    // case
    switch (action.type) {
    case "증가하기":
    return { ...state, cnt: state.cnt + 1 }; //...state는 다른 상태는 유지하데 cnt를 state.cnt+1을 해라
    default:
    return { ...state };
    }
    }

    export default reducer;
    3. 상태값 useSelector로 상태값가져오기
    const cnt = useSelector((state) => state.cnt);

### - useSelector : 리덕스의 진정한 묘미

    어디든지 쓸수있다.
    다른 컴포넌트를 하나 만들어보자 (Box라는 컴포넌트)
    1.Box컴포넌트에서 가져다가 쓰기
    import React from "react";
    import { useSelector } from "react-redux";

    const Box = () => {
    let cnt = useSelector((state) => state.cnt);
    return <div>{cnt}</div>;
    };

    export default Box;
    이런식으로 useSelector으로 그냥 가져오면 댐

### - payload : 함수 매개변수 같은것

    payload - 필요한 정보를 보내줄수있음.
    const onClick = () => {
    dispatch({ type: "증가하기", payload: { num: 5 } });

    };
    const cnt = useSelector((state) => state.cnt);
    const login = () => {
    dispatch({ type: "로그인", payload: { id: "혁", pw: "0000" } });
    };
    이런식으로 payload주게 되면
    function reducer(state = initialState, action) {

    //액션을 가지고 어떤 작업을 할지 알려줘야함
    //state를 다 가지고있는 initialstate를 state로 받는다.
    // switch (action.type)
    // case
    switch (action.type) {
    case "증가하기":
    return { ...state, cnt: state.cnt + action.payload.num }; //...state는 다른 상태는 유지하데 cnt를 state.cnt+1을 해라
    case "로그인":
    return { ...state, id: action.payload.id, password: action.payload.pw };
    default:
    return { ...state };
    }
    }
    이렇게 할수있다.
    const id = useSelector((state) => state.id);
    const pw = useSelector((state) => state.password);
    값도 가져올수있다!
