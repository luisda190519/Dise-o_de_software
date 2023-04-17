import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginUser from "./Views/LoginUser";
import SignupUser from "./Views/SignupUser";
import App from "./App";
import Home from "./Views/Home";
import FillProfile from "./Views/FillProfile";
import JobForm from "./Views/JobForm";
import PageNotFound from "./Views/PageNotFound";
import { AuthContext, AuthProvider } from "./utils/AuthContext";

function Router() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/jobs/:title/:company/:location" Component={App} />
                    <Route path="/jobs" Component={App} />
                    <Route path="/home" Component={Home} />
                    <Route path="/login" Component={LoginUser} />
                    <Route path="/signup" Component={SignupUser} />
                    <Route path="/fillProfile" Component={FillProfile} />
                    <Route path="/jobform" Component={JobForm} />
                    <Route path="*" Component={PageNotFound} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default Router;
