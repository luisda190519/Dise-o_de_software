import SidebarButtons from "../components/SidebarButtons";
import { useState, useEffect } from "react";

function Sidebar({ changeScreen, buttonActive }) {
    useEffect(() => {}, [buttonActive]);

    return (
        <div
            className="d-flex flex-column flex-shrink-0"
            style={{ width: "4.5rem", height: "100vh" }}
            id="sidebar"
        >
            <a
                href="/"
                className="d-block p-3 link-white text-decoration-none"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Icon-only"
            >
                <h1>
                    <i className="bi bi-bootstrap text-white"></i>
                </h1>
            </a>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center my-5">
                <SidebarButtons
                    id={0}
                    type={"search"}
                    changeScreen={changeScreen}
                    buttonActive={buttonActive}
                />
                <SidebarButtons
                    id={1}
                    type={"send"}
                    changeScreen={changeScreen}
                    buttonActive={buttonActive}
                />
                <SidebarButtons
                    id={2}
                    type={"heart"}
                    changeScreen={changeScreen}
                    buttonActive={buttonActive}
                />
                <SidebarButtons
                    id={3}
                    type={"bell"}
                    changeScreen={changeScreen}
                    buttonActive={buttonActive}
                />
            </ul>
            <div className="dropdown border-top">
                <a
                    href="#"
                    className="d-flex align-items-center justify-content-center p-3 link-white text-decoration-none dropdown-toggle mb-1"
                    id="dropdownUser3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt="mdo"
                        width="24"
                        height="24"
                        className="rounded-circle"
                    />
                </a>
                <ul
                    className="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser3"
                >
                    <li>
                        <a className="dropdown-item" href="#">
                            New project...
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
