import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginUser from "./Views/LoginUser";
import SignupUser from "./Views/SignupUser";
import App from "./App";
import Home from "./Views/Home";
import PageNotFound from "./Views/PageNotFound";
import { AuthContext, AuthProvider } from "./utils/AuthContext";

function Router() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={App} />
                    <Route path="/home" Component={Home} />
                    <Route path="/loginUser" Component={LoginUser} />
                    <Route path="/signupUser" Component={SignupUser} />
                    <Route path="*" Component={PageNotFound} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default Router;
