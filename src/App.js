import "./App.css";
import Search from "./Search";
import TimeAndDate from "./TimeAndDate";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Search city={"oaxaca"} />
      <TimeAndDate />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
