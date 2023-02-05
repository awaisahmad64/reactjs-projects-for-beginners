import React from 'react';
import { useReducer } from 'react';
import './App.css';
export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate',
};
const reducer = (state, { type, payload }) => {
  switch(type){
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,{
          currentOperand:`${currentOperand}${payload.digit}`}
        }
      }
  }
}
function App() {
  const [currentOperand, previousOperand, operation, dispatch] = useReducer(
    reducer,
    {}
  );
  return (
    <div className="calculator-grid">
      <div className="calculator-output">
        <div className="previous-oprand">
          {previousOperand}
          {operations}
        </div>
        <div className="current-oprand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
