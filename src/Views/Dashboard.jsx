import Sidebar from "../Partials/Sidebar";
import Navbar from "../Partials/Navbar";
import Jobs from "./Jobs";
import Applications from "./Applications";
import Likes from "./Likes";
import Notifications from "./Notifications";
import MiArea from "./MiArea";
import CV from "./CV";
import Test from "./Test";
import Config from "./Config";
import Authpopup from "../components/Authpopup";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { getRequest } from "../utils/request";

function Dashboard() {
    const [screen, setScreen] = useState(0);
    const [authPopup, setAuthpopup] = useState(false);
    const [blurScreen, setBlurScreen] = useState({});
    const { userAuthenticated, logout } = useContext(AuthContext);
    const [user, setUser] = useState({});

    const changeScreen = function (id) {
        if (id !== 0 && id !== 6 && !userAuthenticated) {
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
        (props) => <Jobs {...props} />,
        (props) => <Applications {...props} />,
        (props) => <Likes {...props} />,
        (props) => <Notifications {...props} />,
        (props) => <MiArea {...props} />,
        (props) => <CV {...props} />,
        (props) => <Test {...props} />,
        (props) => <Config {...props} />,
    ];

    const findUser = async function () {
        if (userAuthenticated) {
            const user = await getRequest("/auth/" + userAuthenticated._id);
            await setUser(user);
        }
    };

    useEffect(() => {
        changeScreen(0);
        findUser();
    }, []);

    useEffect(() => {}, [screen, userAuthenticated]);

    useEffect(() => {
        findUser();
    }, [authPopup]);

    return (
        <div>
            <div className="text-left" style={blurScreen}>
                <div className="row gx-0 justify-content-end">
                    <div className="col-1">{<Sidebar utils={utils} user={user}/>}</div>
                    <div className="col-11 container-fluid">
                        <div className="mt-4 ">{<Navbar utils={utils} user={user}/>}</div>
                        <div className="my-3" style={{ zIndex: "-1" }}>
                            {user ? screens[screen]({ user: user }) : {}}
                        </div>
                    </div>
                </div>
            </div>
            {authPopup}
        </div>
    );
}

export default Dashboard;
