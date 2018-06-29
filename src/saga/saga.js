import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

import { add, subtract } from '../action/simple.action'
import { delay } from '../until/delay'
import {ASYNC_ADD_NUM, ASYNC_SUBTRACT_NUM} from '../action-type/async.action-type'

export function* delayAdd() {
  yield delay(1000)
  yield put(add())
}

export function* delaySubtract() {
  yield delay(1000)
  yield put(subtract())
}

// wacther saga
export default function* watchIncrementAsync() {
    yield takeEvery(ASYNC_ADD_NUM, delayAdd)
    yield takeEvery(ASYNC_SUBTRACT_NUM, delaySubtract)
}