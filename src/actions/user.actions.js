import { API } from "../API/api";
export const GET_DEVELOPERS = "GET_DEVELOPERS";

export const getDevelopersThunk = () => (dispatch) => {
  API.getDevelopers().then((devs) => dispatch(getDevelopers(devs)));
};

export const getDevelopers = (payload) => {
  console.log("get developers payload", payload);
  return {
    type: GET_DEVELOPERS,
    devs: payload,
  };
};
