import "./App.css";
import Cay from "./Components/Cay";
import Logo from "./Components/Logo";
import Kahve from "./Components/Kahve";
import Tost from "./Components/Tost";
import AraSicak from "./Components/AraSicak";
import Tatli from "./Components/Tatli";

function App() {
  return (
    <div className="App bg-yellow-100 flex flex-col  h-auto">
      <Logo />
      <Cay />
      <Kahve />
      <Tost />
      <AraSicak />
      <Tatli />
    </div>
  );
}

export default App;
