import React from "react";
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Outlet,
} from "react-router-dom";
import LoginUser from "./Views/LoginUser";
import SignupUser from "./Views/SignupUser";
import Dashboard from "./Views/Dashboard";
import Home from "./Views/Home";
import FillProfile from "./Views/FillProfile";
import JobForm from "./Views/JobForm";
import PageNotFound from "./Views/PageNotFound";
import { AuthProvider } from "./utils/AuthContext";

function App() {    
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/jobs" />} />
                    <Route
                        path="/jobs/title/:title/company/:company/place/:place"
                        Component={Dashboard}
                    />
                    <Route
                        path="/jobs/title/:title/company/:company"
                        Component={Dashboard}
                    />
                    <Route path="/jobs/title/:title" Component={Dashboard} />
                    <Route
                        path="/jobs/title/:title/place/:place"
                        Component={Dashboard}
                    />
                    <Route path="/jobs" Component={Dashboard} />
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

export default App;
