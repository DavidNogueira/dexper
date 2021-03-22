import * as type from "../types";

const initialState = {
  data: {},
  loading: false,
  error: {},
};

export default function detailsReducer(state = initialState, action) {
  switch (action.type) {
    case type.GET_DETAILS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
      };
    case type.GET_DETAILS_FAILED:
      return {
        ...state,
        error: action.message,
        loading: false,
      };
    default:
      return state;
  }
}
