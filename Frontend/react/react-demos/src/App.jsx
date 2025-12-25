import ExpressionInJSX from "./components/ExpressionInJSX";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Header from "./components/Header";
import List from "./components/List";
import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <section>
      <Header />
      <MainComponent />
      <Footer />
      <ExpressionInJSX />
      <List />
    </section>
  );
};

export default App;
