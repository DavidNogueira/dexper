import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../types";
import Service from "../../services";

function* fetchDetail(action) {
  try {
    const data = yield call(Service.fetchEpisode, action.payload);
    yield put({ type: type.GET_DETAILS_SUCCESS, data: data });
  } catch (error) {
    yield put({ type: type.GET_DETAILS_FAILED, message: error.message });
  }
}

function* detailsSaga() {
  yield takeEvery(type.GET_DETAILS_REQUESTED, fetchDetail);
}

export default detailsSaga;
