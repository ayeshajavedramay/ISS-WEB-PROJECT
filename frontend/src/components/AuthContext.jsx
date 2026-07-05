import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // If the email is admin@iss.com, log in as admin
    if (email.toLowerCase() === "admin@iss.com") {
      setUser({
        name: "Admin User",
        email: email,
        role: "admin"
      });
      return { success: true, role: "admin" };
    } else {
      // For any other email, log in as standard customer
      setUser({
        name: email.split("@")[0],
        email: email,
        role: "user"
      });
      return { success: true, role: "user" };
    }
  };

  const logout = () => {
    setUser(null);
  };

  const registerUser = (fullName, email, password) => {
    // Register standard customer and log them in
    setUser({
      name: fullName,
      email: email,
      role: "user"
    });
    return { success: true, role: "user" };
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, login, logout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
}
