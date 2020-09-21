import { API } from "../API/api";

export const SET_USERDATA = "SET_USERDATA";

export const setUserData = (payload) => {
  return {
    type: SET_USERDATA,
    position: payload.position,
    username: payload.username,
  };
};

export const getUserData = (id) => (dispatch) => {
  API.getUser(id).then((user) => user);
};
