import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [userAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      setIsAuthenticated(id);
    }
  }, []);

  const login = (id) => {
    setIsAuthenticated(id);
    localStorage.setItem("id", id);
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("id");
  };

  return (
    <AuthContext.Provider value={{ userAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
