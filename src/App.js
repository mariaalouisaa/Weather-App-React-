import "./App.css";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Search />
      <Current />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
