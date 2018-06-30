import { ADD_NUM, SUBTRACT_NUM } from '../action-type/simple.action-type'
import { ASYNC_ADD_NUM, ASYNC_SUBTRACT_NUM } from '../action-type/async.action-type'
import { PENDING, SUCCESS } from '../constants/async_status'
import { updateChain } from 'immutability-helper-x'

const initState = {
  num: 0,
  status: 'DEFAULT'
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_NUM:
      return updateChain(state).$apply('num', val => val + 1).$set('status', SUCCESS).value()
    case SUBTRACT_NUM:
      return updateChain(state).$apply('num', val => val - 1).$set('status', SUCCESS).value()
    case ASYNC_ADD_NUM:
    case ASYNC_SUBTRACT_NUM:
      return updateChain(state).$set('status', PENDING).value()
    default:
      return state
  }
}