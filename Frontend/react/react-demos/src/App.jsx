import ConditionalRendering from "./components/ConditionalRendering";
import ContextApi from "./components/context/ContextApi";
import MyApp from "./components/context1/MyApp";
import CopyInput from "./components/CopyInput";
import Counter from "./components/Counter";
import CounterWithReducer from "./components/CounterWithReducer";
import CustomHook from "./components/CustomHook";
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
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import UseEffectHook from "./components/UseEffectHook";
import UseIdHook from "./components/UseIdHook";
import UseRefComponent from "./components/UseRefComponent";
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
      {/* <MyApp /> */}
      {/* <CounterWithReducer /> */}
      {/* <Counter /> */}
      {/* <UseRefComponent /> */}
      {/* <Timer /> */}
      {/* <CustomHook /> */}
      <UseIdHook />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        ducimus praesentium rem voluptatum tempora cupiditate earum aspernatur
        ipsum. Voluptatibus voluptate similique quos asperiores modi illo quasi
        iste deleniti sequi quam?
      </p>
      <UseIdHook />
    </section>
  );
};

export default App;
