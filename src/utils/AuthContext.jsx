import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [userAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const userString = localStorage.getItem("user");
        if (typeof userString !== "undefined" && userString !== null) {
            try {
                const user = JSON.parse(userString);
                setIsAuthenticated(user);
            } catch (error) {
                console.error("Error parsing user from localStorage:", error);
                setIsAuthenticated(false);
            }
        }
        return setIsAuthenticated(false);
    }, []);

    const login = (user) => {
        setIsAuthenticated(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    };

    return (
        <AuthContext.Provider value={{ userAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
