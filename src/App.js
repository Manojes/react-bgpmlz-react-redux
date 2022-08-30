import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.css';

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showcounter);

  const incrementhandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementhandler = () => {
    dispatch({ type: 'decrement' });
  };

  const togglecounnter = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <div>
      {show && <div>counter- {counter} </div>}

      <button onClick={togglecounnter}> toggle </button>
      <button onClick={incrementhandler}> increment</button>
      <button onClick={decrementhandler}> decrement</button>
    </div>
  );
}
