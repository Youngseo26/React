import { createStore } from "redux";

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  if (action.type === "increment") {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }
  if (action.type === "increase") {
    return {
      ...state,
      counter: state.counter + action.amount,
    };
  }

  if (action.type === "toggle") {
    return {
      //counter: state.counter, 도 되지만 스프레드 연산자 사용하고 바뀌는 값만 명시
      ...state,
      showCounter: !state.showCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
