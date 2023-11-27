import "./index.css";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleMinusStep() {
    setStep((s) => s - 1);
  }

  function handlePlusStep() {
    setStep((s) => s + 1);
  }

  function handleMinusCount() {
    setCount((c) => c - step);
  }

  function handlePlusCount() {
    setCount((c) => c + step);
  }

  return (
    <div className="container">
      <div className="step-container">
        <button onClick={handleMinusStep}>-</button>
        <span>Step: {step}</span>
        <button onClick={handlePlusStep}>+</button>
      </div>
      <div className="count-container">
        <button onClick={handleMinusCount}>-</button>
        <span>Count: {count}</span>
        <button onClick={handlePlusCount}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is: "
          : count > 0
          ? `${count} days from today is: `
          : `${Math.abs(count)} days ago was: `}
      </span>
      <span>
        <p>{date.toDateString()}</p>
      </span>
    </div>
  );
}
