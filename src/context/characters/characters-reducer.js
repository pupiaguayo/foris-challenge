import {
  GET_CHARACTERS,
  GET_RANDOM_CHARACTERS,
  GET_SELECTED_MEMOCARD,
  GET_ANIMATION,
  GET_SHIFTS,
  GET_SUCCESS,
} from "../types";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_CHARACTERS:
      return {
        ...state,
        charactersList: payload,
      };
    case GET_RANDOM_CHARACTERS:
      return {
        ...state,
        randomCharacters: payload,
      };
    case GET_SELECTED_MEMOCARD:
      return {
        ...state,
        selectedMemocard: payload,
      };
    case GET_ANIMATION:
      return {
        ...state,
        animating: payload,
      };
      case GET_SUCCESS:
        return {
          ...state,
          success: payload,
        };
        case GET_SHIFTS:
          return {
            ...state,
            shifts: payload,
          };
    default:
      return state;
  }
};
