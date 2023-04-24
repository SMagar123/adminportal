import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Dashboard, Login } from "./pages";
import { ProtectedRoute } from "./components";
import { useEffect, useState } from "react";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Login stateTrigger={setLoggedIn} />} />
          <Route
            exact
            path="/dashboard"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
