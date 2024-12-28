import React, { useState } from "react";

import "./PaymentForm.css";

const PaymentForm = ({ getPaymentFormData }) => {
  //여러 개의 state 한번에 관리하기
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: null,
  });
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState(0);
  // const [today, setToday] = useState(null);

  const inputTypeTextChangeHandler = (event) => {
    setObjectState((prevState) => ({ ...prevState, name: event.target.value }));
  };
  const inputTypeNumberChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };
  const inputTypeDateChangeHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  const buttonSubmitHandler = (event) => {
    event.preventDefault();
    getPaymentFormData(objectState); //부모컴포넌트에서 함수호출
    //console.log(objectState);
    //초기화
    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };
  return (
    <div className="new-payment">
      <form onSubmit={buttonSubmitHandler}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            <input
              type="text"
              onChange={inputTypeTextChangeHandler}
              value={objectState.name}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={inputTypeNumberChangeHandler}
              value={objectState.price}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              min="1990-01-01"
              max="2024-12-31"
              onChange={inputTypeDateChangeHandler}
              value={objectState.today}
            />
          </div>
        </div>
        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
