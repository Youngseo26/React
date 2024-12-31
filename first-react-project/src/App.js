import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import "./App.css";

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "운동하기", id: "g1" },
    { text: "완강하기", id: "g2" },
  ]);

  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import "./App.css";
// //import NewPayment from "./components/NewPayment/NewPayment";
// //import Toast from "./components/Toast";
// //import AlexaImage from "./images/alexa.png";
// // import SiriImage from "./images/siri.png";
// import PaymentForm from "./components/NewPayment/PaymentForm";
// import Expenses from "./components/Payments/Expenses";

// function App() {
//   const [expenses, setExpenses] = useState([
//     {
//       id: "e1",
//       title: "수건",
//       amount: 12.33,
//       date: new Date(2022, 3, 14),
//     },
//     {
//       id: "e2",
//       title: "물티슈",
//       amount: 234.11,
//       date: new Date(2023, 8, 22),
//     },
//     {
//       id: "e3",
//       title: "모니터",
//       amount: 3331.33,
//       date: new Date(2021, 10, 22),
//     },
//     {
//       id: "e4",
//       title: "의자",
//       amount: 298,
//       date: new Date(2022, 1, 31),
//     },
//     {
//       id: "e4",
//       title: "의자",
//       amount: 298,
//       date: new Date(2021, 6, 1),
//     },
//   ]);

//   const getPaymentFormData = (data) => {
//     console.log("data", data);
//     console.log("expenses", expenses);
//     setExpenses([
//       {
//         id: Math.random().toString(),
//         title: data.name,
//         amount: data.price,
//         date: new Date(data.today),
//       },
//       ...expenses,
//     ]);
//   };

//   const deleteExpenseItem = (id) => {
//     console.log(id);
//     //1. filter
//     const newFilteredArray = expenses.filter((item) => item.id !== id); //expenses에서 선택한 id와 다른 것들만 모아줘
//     setExpenses(newFilteredArray);

//     //2. slice //index기준으로
//     // const beforeArray = expenses.slice(0, index);
//     // const afterArray = expenses.slice(index + 1);
//     // setExpenses([...beforeArray, ...afterArray]);
//   };

//   return (
//     <>
//       <PaymentForm getPaymentFormData={getPaymentFormData} />
//       <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
//     </>
//   );
// }

// export default App;
