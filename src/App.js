import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.scss";
import { Dashboard, Users, AddUsers,EditUsers, Product, Settings } from "./pages";
import { SideNav } from "./components";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideNav />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="Users" element={<Users />} />  
        <Route path="AddUsers" element={<AddUsers />} />  
        <Route path="EditUsers" element={<EditUsers />} />  
        <Route path="Product" element={<Product />} />
        <Route path="Settings" element={<Settings />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
