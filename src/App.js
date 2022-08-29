import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './style.css';

export default function App() {
  const dispatch=useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementhandler=()=>{
    dispatch({type:'increment'})
  }
  

  console.log(counter)
  const togglecounnter = () => {

  };

  return (
    <div>
      counter- {counter}
      <button onClick={togglecounnter}> counter </button>
      <button onClick={incrementhandler}> increment</button>
    </div>
  );
}
