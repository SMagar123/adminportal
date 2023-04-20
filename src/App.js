import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import "./assets/styles/main.scss";
import { Dashboard } from "./pages";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Dashboard />
    </div>
    </BrowserRouter>
  );
}

export default App;
