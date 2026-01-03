import Button from "./components/Button";
import Counter from "./components/Counter";
import CounterWithContext from "./components/CounterWithContext";
import CounterWithUseReducer from "./components/CounterWithUseReducer";
import Form from "./components/Form";
import Profile from "./components/Profile";
import ReactHookForm from "./components/ReactHookForm";
import Todo from "./components/Todo";
import UseEffectWithTypeScript from "./components/UseEffectWithTypeScript";
import User from "./components/User";
import UserProfile from "./components/UserProfile";
import UserWithChildren from "./components/UserWithChildren";
import UserWithDestructureProps from "./components/UserWithDestructureProps";
import UserwithInterfaceProps from "./components/UserwithInterfaceProps";
import UserWithTypeAliasProps from "./components/UserWithTypeAliasProps";

const App = () => {
  return (
    <div>
      {/* <User name={"Zulfiqar"} age={28} />
      <UserWithDestructureProps name={"Zulfiqar"} age={28} />
      <UserWithTypeAliasProps name={"Zulfiqar"} age={28} />
      <UserwithInterfaceProps name={"Zulfiqar"} age={28} />
      <UserWithChildren>
        <p>
          Hello bro... this is react with children of interface shape with react
          node
        </p>
      </UserWithChildren> */}

      {/* <Button
        label="Click"
        onClick={() => console.log("You Clicked Me")}
        disable={true}
      />
      <Profile />
      <Counter />
      <UserProfile />
      <Todo />
      <Form />
      <CounterWithContext />
      <CounterWithUseReducer /> */}

      {/* <UseEffectWithTypeScript /> */}
      <ReactHookForm />
    </div>
  );
};

export default App;
