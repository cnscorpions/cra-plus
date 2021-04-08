import * as types from "../actionTypes/types";

export const login = token => ({
  type: types.LOGIN,
  payload: token
});

