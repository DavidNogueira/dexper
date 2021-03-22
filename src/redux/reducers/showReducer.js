import * as type from "../types";

const initialState = {
  data: {},
  loading: false,
  error: {},
};

export default function showReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_SHOW_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case type.GET_SHOW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default:
      return state;
  }
}
