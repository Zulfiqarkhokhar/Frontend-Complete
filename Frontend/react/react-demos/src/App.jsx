import ConditionalRendering from "./components/ConditionalRendering";
import ExpressionInJSX from "./components/ExpressionInJSX";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import List from "./components/List";
import MainComponent from "./components/MainComponent";
import Props from "./components/Props";

const App = () => {
  return (
    <section>
      <Header />
      <MainComponent />
      <Footer />
      <ExpressionInJSX />
      <List />
      <Props>
        <h1>Welcome To My World</h1>
        <h1>This Zulfiqar Ali, The Software Engineer</h1>
      </Props>
      <ConditionalRendering />
    </section>
  );
};

export default App;
