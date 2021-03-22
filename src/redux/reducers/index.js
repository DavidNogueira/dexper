import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

//reducers
import showReducer from "./showReducer";
import detailsReducer from "./detailsReducer";

//sagas
import showSaga from "../sagas/showSaga";
import detailsSaga from "../sagas/detailsSaga";

export const rootReducer = combineReducers({
  show: showReducer,
  details: detailsReducer,
});

export function* rootSaga() {
  yield all([
      showSaga(),
      detailsSaga(),
      // put all the sagas inside this array
  ]);
}
