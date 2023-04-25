import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import { Dashboard, Loginadmin, Users, Product, Settings } from "./pages";
import { SideNav } from "./components";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideNav />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="Users" element={<Users />} />
        <Route path="Product" element={<Product />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
