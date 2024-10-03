import logo from "./logo.svg";
import "./App.css";
import TextComponent from "./components/TextComponent";
import Section from "./components/Section";
import Toast from "./components/Toast";

function App() {
  const messageArray = [
    {
      title: "success",
      text: "Right on!",
    },
    {
      title: "success",
      text: "Right on!",
    },
    {
      title: "warning",
      text: "Hmmmm..",
    },
    {
      title: "warning",
      text: "Hmmmm..",
    },
    {
      title: "error",
      text: "Uh oh!",
    },
    {
      title: "error",
      text: "Uh oh!",
    },
  ];
  return (
    <div className="wrapper">
      {messageArray.map((message) => (
        <Toast message={message} />
      ))}
    </div>
  );
}

export default App;
