import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState('');
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
    setAmount('');
  }

  function handleAmountClick() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
      <div className="container">
        <input
          type="number"
          value={amount}
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleAmountClick}> Increase by amount </button>
        <br />
        <br />
        <button onClick={handleIncrementClick}> ➕ </button>
        <h1>Count: {count} </h1>
        <button onClick={handleDecrementClick}> ➖ </button>
        <br />
        <br />
        <button onClick={handleResetClick}> Reset </button>
      </div>
    </>
  );
}

export default App;
