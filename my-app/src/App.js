import "./App.css";
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <p>WEATHER APP</p>
      <Search />
      <Current />
      <Forecast />
    </div>
  );
}

export default App;
