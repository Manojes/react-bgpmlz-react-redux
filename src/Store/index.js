import { legacy_createStore as createStore} from 'redux'

const initialState ={counter:0,showcounter:true}
const CounterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showcounter:state.showcounter
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showcounter:state.showcounter
    };
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter ,
      showcounter:!state.showcounter
    };
  }

  return state;
};

const store = createStore(CounterReducer);

export default store;
