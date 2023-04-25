import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import { Dashboard, Login, Users, Product, Settings } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useState } from "react";
import { SideNav } from "./components";
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideNav />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="Users" element={<Users />} />
        <Route path="Product" element={<Product />} />
        <Route path="Settings" element={<Settings />} />
      </Route>

      //   // <Route path="/" element={<SideNav/>}>
      //   //   <Route path="Dashboard" element={<Dashboard/>}
      //   //   />
      //   // </Route>
    )
  );
  return (
    <RouterProvider router={router} />

    // <BrowserRouter>
    //   <div className="container">
    //     <Routes>
    //       <Route element={<Login stateTrigger={setLoggedIn} />} />
    //       <Route exact
    //         path="/Dashboard"
    //         element={
    //           <ProtectedRoute isLoggedIn={isLoggedIn}>
    //             <Dashboard />
    //           </ProtectedRoute>
    //         }
    //       />
    //       <Route path="/" element={<Dashboard />}>
    //         <Route exact path="/Dashboard/Products" element={<Product />} />
    //         <Route exact path="/Dashboard/Settings" element={<Settings />} />
    //       <Route>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
