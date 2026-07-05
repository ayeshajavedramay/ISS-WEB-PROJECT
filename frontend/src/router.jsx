import { createBrowserRouter } from "react-router-dom";
import Landingpg from "./components/Landingpg";
import Login from "./components/Login";
import Registration from "./components/Registration";
import About from "./components/About";
import Shopping from "./components/Shopping";
import Admin_panel from "./components/Admin_panel";
import Add_product from "./components/Add_product";
import Delete_product from "./components/Delete_product";
import Update_product from "./components/Update_product";
import View from "./components/View";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Cart from "./components/Cart";

const router = createBrowserRouter([
  { path: "/", element: <Landingpg /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
  { path: "/about", element: <About /> },
  { path: "/shopping", element: <Shopping /> },
  { path: "/cart", element: <Cart /> },
  { path: "/admin", element: <ProtectedRoute requiredRole="admin"><Admin_panel /></ProtectedRoute> },
  { path: "/add", element: <ProtectedRoute requiredRole="admin"><Add_product /></ProtectedRoute> },
  { path: "/delete", element: <ProtectedRoute requiredRole="admin"><Delete_product /></ProtectedRoute> },
  { path: "/update", element: <ProtectedRoute requiredRole="admin"><Update_product /></ProtectedRoute> },
  { path: "/view", element: <ProtectedRoute requiredRole="admin"><View /></ProtectedRoute> },
]);

export default router;
