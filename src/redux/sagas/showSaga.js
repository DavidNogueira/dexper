import { call, put, takeEvery } from "redux-saga/effects";
import * as type from "../types";
import Service from "../../services";



function* fetchShow() {
  try {
    const data = yield call(Service.fetchShow);
    const episode_id = data.id;
    const data_episodes = yield call(Service.fetchEpisodes, episode_id);

    // add episodes to the show data
    data["episodes"] = data_episodes;

    // put all the show+episodes fetched info into data
    yield put({ type: type.GET_SHOW_SUCCESS, data: data });
  } catch (error) {
    yield put({ type: type.GET_SHOW_FAILED, message: error.message });
  }
}

function* showSaga() {
  yield takeEvery(type.GET_SHOW_REQUESTED, fetchShow);
}

export default showSaga;
