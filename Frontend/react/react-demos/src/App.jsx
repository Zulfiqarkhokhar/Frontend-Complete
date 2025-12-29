import ConditionalRendering from "./components/ConditionalRendering";
import ContextApi from "./components/context/ContextApi";
import MyApp from "./components/context1/MyApp";
import CopyInput from "./components/CopyInput";
import Events from "./components/Events";
import ExpressionInJSX from "./components/ExpressionInJSX";
import FetchData from "./components/FetchData";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import List from "./components/List";
import MainComponent from "./components/MainComponent";
import Profile from "./components/Profile";
import Props from "./components/Props";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";
import UseEffectHook from "./components/UseEffectHook";
import UseStateHook from "./components/UseStateHook";

const App = () => {
  return (
    <section>
      {/* <UseStateHook /> */}
      {/* <TodoList /> */}
      {/* <Profile /> */}
      {/* <ShoppingList /> */}
      {/* <CopyInput /> */}
      {/* <UseEffectHook />
      <FetchData /> */}
      {/* <ContextApi /> */}
      <MyApp />
    </section>
  );
};

export default App;
