import React, { useState } from "react";
import "./App.css";
//import NewPayment from "./components/NewPayment/NewPayment";
//import Toast from "./components/Toast";
//import AlexaImage from "./images/alexa.png";
//import SiriImage from "./images/siri.png";
import PaymentForm from "./components/NewPayment/PaymentForm";
import Expenses from "./components/Payments/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14),
    },
  ]);
  const [parentObjectState, setParentObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  const getPaymentFormData = (data) => {
    console.log(data);
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
      },
    ]);
  };

  return (
    <>
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
