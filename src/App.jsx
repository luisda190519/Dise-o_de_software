import Sidebar from "./Partials/Sidebar";
import Navbar from "./Partials/Navbar";
import Main from "./Views/Main";
import Applications from "./Views/Applications";
import Likes from "./Views/Likes";
import Notifications from "./Views/Notifications";
import PageNotFound from "./Views/PageNotFound";
import MiArea from "./Views/MiArea";
import CV from "./Views/CV";
import Test from "./Views/Test";
import Config from "./Views/Config";
import Home from "./Views/Home";
import { useState, useEffect } from "react";

function App() {
    const [screen, setScreen] = useState(0);
    const [navbar, setNavabar] = useState();
    const [sidebar, setSidebar] = useState();

    const changeScreen = function (id) {
        setScreen(id);
    };

    const utils = {
        changeScreen,
        buttonActive: screen,
    };

    const screens = [
        <Home utils={utils} />,
        <Main />,
        <Applications />,
        <Likes />,
        <Notifications />,
        <MiArea />,
        <CV />,
        <Test />,
        <Config />,
        <PageNotFound />,
    ];

    useEffect(() => {
        changeScreen(0);
    }, []);

    useEffect(() => {
        if (screen !== 0) {
            setNavabar(<Navbar utils={utils} />);
            return setSidebar(<Sidebar utils={utils} />);
        }
        setNavabar(null);
        return setSidebar(null);
    }, [screen, navbar, sidebar]);

    return (
        <div>
            <div className="text-left">
                {screen === 0 ? (
                    screens[screen]
                ) : (
                    <div className="row gx-0 justify-content-end">
                        <div className="col-1">{sidebar}</div>
                        <div className="col-11 container-fluid">
                            <div className="mt-4">{navbar}</div>
                            <div className="my-3">{screens[screen]}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
