import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContents = <p>No Data Found</p>;
  if (filteredExpenses.length > 0) {
    expensesContents = filteredExpenses.map((item) => (
      <ExpenseItem
        id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        deleteExpenseItem={props.deleteExpenseItem}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expensesContents}
      {/* {filteredExpenses.length >0 ? filteredExpenses.map((item) => (<ExpenseItem  id={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        deleteExpenseItem={props.deleteExpenseItem}/>)) : <p>No Data Found</p>} 로도 가능*/}
    </Card>
  );
};

export default Expenses;
