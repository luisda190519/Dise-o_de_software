import Sidebar from "./Partials/Sidebar";
import Navbar from "./Partials/Navbar";
import Main from "./Views/Main";
import Applications from "./Views/Applications";
import Likes from "./Views/Likes";
import Notifications from "./Views/Notifications";
import MiArea from "./Views/MiArea";
import CV from "./Views/CV";
import Test from "./Views/Test";
import Config from "./Views/Config";
import { useState, useEffect } from "react";

function App() {
    const [screen, setScreen] = useState(0);

    const changeScreen = function (id) {
        setScreen(id);
    };

    const utils = {
        changeScreen,
        buttonActive: screen,
    };

    const screens = [
        <Main />,
        <Applications />,
        <Likes />,
        <Notifications />,
        <MiArea />,
        <CV />,
        <Test />,
        <Config />,
    ];

    useEffect(() => {
        changeScreen(0);
    }, []);

    useEffect(() => {}, [screen]);

    return (
        <div>
            <div className="text-left">
                <div className="row gx-0 justify-content-end">
                    <div className="col-1">{<Sidebar utils={utils} />}</div>
                    <div className="col-11 container-fluid">
                        <div className="mt-4">{<Navbar utils={utils} />}</div>
                        <div className="my-3" style={{ zIndex: "-1" }}>
                            {screens[screen]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
