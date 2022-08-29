import { legacy_createStore as createStore} from 'redux'

const CounterReducer = (state = { counter: 1 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(CounterReducer);

export default store;
