const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = redux.createStore(counterReducer);

//console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber); //스토어에서 subscribe 할때, counterSubscriber 함수를 통해 subscribe 하는데 그때마다 store의 가장 최신 값으로 받아온다는 의미
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
