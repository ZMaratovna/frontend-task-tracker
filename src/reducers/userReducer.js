import { GET_DEVELOPERS } from "../actions/user.actions";

let initialState = {
  username: "",
  position: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEVELOPERS:
      return {
        ...state,
        developers: action.devs,
      };
    default:
      return state;
  }
};

export default userReducer;
