import * as ActionTypes from '../actions'

export const incrementCount = () => ({
    type: ActionTypes.COUNTER_INCREMENT
});

export const decrementCount = () => ({
    type: ActionTypes.COUNTER_DECREMENT
});

export const incrementAsyncCount = () => ({
    type: ActionTypes.COUNTER_INCREMENT_ASYNC
});

export default ({
    incrementCount,
    decrementCount,
    incrementAsyncCount
});

