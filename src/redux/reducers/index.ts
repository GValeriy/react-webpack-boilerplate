import * as ActionTypes from '../actions'
import { combineReducers } from 'redux';

const counterReducer = (state = 0, action) => {
    const { type } = action
  
    if (type === ActionTypes.COUNTER_INCREMENT) {
      return state + 1;
    }

    if (type === ActionTypes.COUNTER_DECREMENT) {
      return state - 1;
    }
  
    return state
}

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer;