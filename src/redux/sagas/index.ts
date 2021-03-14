import { put, takeEvery, all } from 'redux-saga/effects'

import * as ActionTypes from "../actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: ActionTypes.COUNTER_INCREMENT })
}

export function* watchIncrementAsync() {
    yield takeEvery(ActionTypes.COUNTER_INCREMENT_ASYNC, incrementAsync)
}

export default function* rootSaga() {
    yield all([
      watchIncrementAsync()
    ])
}
