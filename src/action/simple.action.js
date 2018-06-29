import { ADD_NUM, SUBTRACT_NUM} from '../action-type/simple.action-type'

export function add () {
  return {type: ADD_NUM}
}

export function subtract () {
  return {type: SUBTRACT_NUM}
}