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
      <Toast title={messageArray[0].title} text={messageArray[0].text} />
      <Toast title={messageArray[1].title} text={messageArray[1].text} />
      <Toast title={messageArray[2].title} text={messageArray[2].text} />
      <Toast title={messageArray[3].title} text={messageArray[3].text} />
      <Toast title={messageArray[4].title} text={messageArray[4].text} />
      <Toast title={messageArray[5].title} text={messageArray[5].text} />
    </div>
  );
}

export default App;
