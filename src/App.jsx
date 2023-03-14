import Sidebar from "./Partials/Sidebar";
import Navbar from "./Partials/Navbar";
import Main from "./Views/Main";
import Applications from "./Views/Applications";
import Likes from "./Views/Likes";
import Notifications from "./Views/Notifications";
import PageNotFound from "./Views/PageNotFound";
import { useState, useEffect } from "react";

function App() {
    const [screen, setScreen] = useState("main");

    const changeScreen = function (id) {
        setScreen(id);
    };

    useEffect(() => {changeScreen("job-search")}, []);

    useEffect(() => {}, [screen]);

    return (
        <div>
            <div className="mt-4">
                <Navbar />
            </div>
            <div className="text-left h-100">
                <div className="row gx-0 justify-content-end">
                    <div className="col-1">
                        <Sidebar changeScreen={changeScreen} />
                    </div>
                    <div className="col-11">
                        {screen == "job-search" ? (
                            <Main />
                        ) : screen == "applications" ? (
                            <Applications />
                        ) : screen == "likes" ? (
                            <Likes />
                        ) : screen == "notifications" ? (
                            <Notifications />
                        ) : (
                            <PageNotFound />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
