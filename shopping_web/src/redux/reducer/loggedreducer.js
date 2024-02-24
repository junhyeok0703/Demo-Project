let initialState = {
  id: "",
  password: "",
  logged: false,
};

function loggedreducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload,
        password: payload.password,
        logged: true,
      };
    default:
      return { ...state };
  }
}

export default loggedreducer;
