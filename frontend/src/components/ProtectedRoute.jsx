import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

export function ProtectedRoute({ children, requiredRole }) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    alert("Access Denied: Please log in first!");
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    alert(`Access Denied: Only users with role '${requiredRole}' can access this page!`);
    return <Navigate to="/" replace />;
  }

  return children;
}
