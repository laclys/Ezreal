import { put, takeLatest } from 'redux-saga/effects'

import { add, subtract } from '../action/simple.action'
import { delay } from '../until/delay'
import {ASYNC_ADD_NUM, ASYNC_SUBTRACT_NUM} from '../action-type/async.action-type'

export function* delayAdd() {
  yield delay(3000)
  yield put(add())
}

export function* delaySubtract() {
  yield delay(3000)
  yield put(subtract())
}

// wacther saga
export default function* watchIncrementAsync() {
    yield takeLatest(ASYNC_ADD_NUM, delayAdd)
    yield takeLatest(ASYNC_SUBTRACT_NUM, delaySubtract)
}