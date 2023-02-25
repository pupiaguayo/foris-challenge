import { GET_CHARACTERS } from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        charactersList: payload,
      };
    default:
      return state;
  }
};