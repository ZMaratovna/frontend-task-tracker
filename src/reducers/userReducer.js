import { SET_USERDATA } from "../actions/user.actions";

let initialState = {
  username: "",
  position: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERDATA:
      return {
        ...state,
        username: action.username,
        position: action.position,
      };

    default:
      return state;
  }
};

export default userReducer;
