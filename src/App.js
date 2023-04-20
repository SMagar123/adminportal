import { BrowserRouter,Routes, Route } from "react-router-dom";
import "./App.scss";
import { Dashboard, Login } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Dashboard /> */}
      </div>

    </BrowserRouter>
  );
}

export default App;
