import classes from "./Counter.module.css";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const toggleCounterHandler = () => {};
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const increase10Handler = () => {
    dispatch({ type: "increase", amount: 10 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>토글 카운터</button>
      <button onClick={incrementHandler}>숫자 증가</button>
      <button onClick={increase10Handler}>숫자 10 증가</button>
      <button onClick={decrementHandler}>숫자 감소</button>
    </main>
  );
};

export default Counter;
