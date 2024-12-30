import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button
          className="expense-item__price"
          onClick={() => props.deleteExpenseItem(props.id)}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
