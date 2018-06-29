import { ASYNC_ADD_NUM, ASYNC_SUBTRACT_NUM } from '../action-type/async.action-type'

export function async_add () {
  return {type: ASYNC_ADD_NUM}
}

export function async_subtract () {
  return {type: ASYNC_SUBTRACT_NUM}
}