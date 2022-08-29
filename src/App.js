import React from 'react';
import { useSelector } from 'react-redux';
import './style.css';

export default function App() {
  const counter = useSelector((state) => state.counter);
  const togglecounnter = () => {};

  return (
    <div>
      {counter}
      <button onClick={togglecounnter}> counter </button>
    </div>
  );
}
