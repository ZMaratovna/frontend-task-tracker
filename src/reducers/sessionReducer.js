import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  INVALID_TOKEN,
} from "../actions/session.actions";

const _nullUser = Object.freeze({
  id: null,
});

const sessionReducer = (state = _nullUser, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        username: action.payload.username,
        id: action.payload._id,
        email: action.payload.email,
        position: action.payload.position,
      };
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case INVALID_TOKEN:
      return {
        ...state,
        authError: "Incorrect email or password",
      };
    default:
      return state;
  }
};

export default sessionReducer;
