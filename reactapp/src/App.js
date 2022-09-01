import logo from "./logo.svg";
import "./App.css";
import ClothingStore from "./header";
import ClothingFooter from "./footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClothingStore />
      </header>
      <footer>
        <ClothingFooter />
      </footer>
    </div>
  );
}
export default App;
