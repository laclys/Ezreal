import { ADD_NUM, SUBTRACT_NUM } from '../action-type/simple.action-type'

const initState = {
  num: 0
}

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_NUM:
      {
        const _state = {...state}
        _state.num = _state.num + 1
        return _state
      }
    case SUBTRACT_NUM:
      {
        const _state = {...state}
       _state.num = _state.num - 1
       return _state
      }
    default:
      return state
  }
}