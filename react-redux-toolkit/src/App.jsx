import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";
function App() {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value); //fetching the count from the Redux store
  const dispatch = useDispatch(); //action that are defined in the Redux store are dispatched here
  const Increment = () => {
    dispatch(increment());
  };
  const Decrement = () => {
    dispatch(decrement());
  };
  const handleReset = () => {
    dispatch(reset()); //resetting the count to the current value
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="container">
      <button onClick={Increment}>+</button>
      <h1>Count:{count}</h1>
      <button onClick={Decrement}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <input
        type="Number"
        value={amount}
        placeholder="enter amount"
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <button onClick={handleIncrementByAmount}>increment by amount</button>
    </div>
  );
}

export default App;
