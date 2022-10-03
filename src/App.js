import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1 className="text-3xl">This is bigger header</h1>

      <p>I love paragraph tags</p>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
