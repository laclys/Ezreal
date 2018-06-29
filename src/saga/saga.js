import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import {ASYNC_ADD_NUM, ASYNC_SUBTRACT_NUM} from '../action-type/async.action-type'

export function* func() {
  console.log('Hello Sagas!')
}

// wacther saga
export default function* watchIncrementAsync() {
    yield takeEvery(ASYNC_ADD_NUM, func)
    yield takeEvery(ASYNC_SUBTRACT_NUM, func)
}