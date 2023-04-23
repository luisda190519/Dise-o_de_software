import SidebarButtons from "../components/SidebarButtons";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ utils: { changeScreen, buttonActive }, user, logout }) {
    const [button, setButton] = useState(buttonActive);
    const [jobsCreated, setJobscreated] = useState(false)
    const navigate = useNavigate();

    const goHome = function (e) {
        return navigate("/home");
    };

    const handleLogout = function (e) {
        logout();
        return navigate("/home");
    };

    const verifyRecruiter = function(){
        if(user.isRecruiter){
            return (
                <SidebarButtons
                    id={8}
                    type={"file-post"}
                    changeScreen={changeScreen}
                    buttonActive={button}
                />
            )
        }
        return null;
    }

    useEffect(() => {
        setButton(buttonActive);
    }, [buttonActive]);

    return (
        <div
            className="d-flex flex-column flex-shrink-0"
            style={{ width: "4.5rem", height: "100vh" }}
            id="sidebar"
        >
            <a
                className="d-block p-3 link-white text-decoration-none"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Icon-only"
                onClick={(e) => goHome(e)}
                style={{ cursor: "pointer" }}
            >
                <h1>
                    <img className="img-fluid mt-4" src="/icon.png" />
                </h1>
            </a>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center my-5">
                <SidebarButtons
                    id={0}
                    type={"search"}
                    changeScreen={changeScreen}
                    buttonActive={button}
                />
                <SidebarButtons
                    id={1}
                    type={"send"}
                    changeScreen={changeScreen}
                    buttonActive={button}
                />
                <SidebarButtons
                    id={2}
                    type={"heart"}
                    changeScreen={changeScreen}
                    buttonActive={button}
                />
                {verifyRecruiter()}
                <SidebarButtons
                    id={3}
                    type={"bell"}
                    changeScreen={changeScreen}
                    buttonActive={button}
                />
            </ul>
            <div className="dropdown border-top">
                <a
                    href="#"
                    className="d-flex align-items-center justify-content-center p-3 link-white text-decoration-none dropdown-toggle mb-1 text-white"
                    id="dropdownUser3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src={
                            typeof user.image !== "undefined"
                                ? user.image
                                : "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                        }
                        alt="mdo"
                        width="24"
                        height="24"
                        className="rounded-circle"
                    />
                </a>

                {typeof user._id !== "undefined" ? (
                    <ul
                        className="dropdown-menu text-small shadow"
                        aria-labelledby="dropdownUser3"
                        style={{ position: "absolute", zIndex: "999" }}
                    >
                        <li>
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a
                                className="dropdown-item"
                                href=""
                                onClick={(e) => handleLogout(e)}
                            >
                                Sign out
                            </a>
                        </li>
                    </ul>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
