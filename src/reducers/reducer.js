import { ADD_NUM, SUBTRACT_NUM } from '../action-type/simple.action-type'
import { ASYNC_ADD_NUM, ASYNC_SUBTRACT_NUM } from '../action-type/async.action-type'
import { PENDING, SUCCESS } from '../constants/async_status'

const initState = {
  num: 0,
  status: 'DEFAULT'
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_NUM:
      {
        const _state = {...state}
        _state.num = _state.num + 1
        _state.status = SUCCESS
        return _state
      }
    case SUBTRACT_NUM:
      {
        const _state = {...state}
       _state.num = _state.num - 1
       _state.status = SUCCESS
       return _state
      }
    case ASYNC_ADD_NUM:
      {
        const _state = {...state}
        _state.status = PENDING
        return _state
      }
    case ASYNC_SUBTRACT_NUM:
      {
        const _state = {...state}
        _state.status = PENDING
        return _state
      }
    default:
      return state
  }
}