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
import Authpopup from "./components/Authpopup";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./utils/AuthContext";

function App() {
    const [screen, setScreen] = useState(0);
    const [authPopup, setAuthpopup] = useState(false);
    const [blurScreen, setBlurScreen] = useState({});
    const { isAuthenticated, logout } = useContext(AuthContext);

    console.log(isAuthenticated);

    const changeScreen = function (id) {
        if (id !== 0 && id !== 6 && !isAuthenticated) {
            setBlurScreen({ filter: "blur(1px)", position: "absolute" });
            return setAuthpopup(
                <Authpopup
                    setAuthpopup={setAuthpopup}
                    setBlurScreen={setBlurScreen}
                />
            );
        }
        return setScreen(id);
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

    useEffect(() => {}, [screen, authPopup]);

    return (
        <div>
            <div className="text-left" style={blurScreen}>
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
            {authPopup}
        </div>
    );
}

export default App;
