import { useState, useEffect } from "react";

function SidebarButtons({ id, type, changeScreen, buttonActive }) {
    const [active, setActive] = useState(false);

    const handleHover = function (e) {
        e.target.classList.add("border");
    };

    const handleMouseLeave = function (e) {
        e.target.classList.remove("border");
    };

    const handleClick = function (e) {
        changeScreen(id);
    };

    const setActiveButton = function () {
        if (buttonActive == id) {
            return (setActive(true));
        }
        return (setActive(false));
    };

    useEffect(() => {
        setActiveButton();
    }, [active]);

    return (
        <li className="nav-item">
            <a
                href="#"
                aria-current="page"
                className={active ? "nav-link active py-3" : "nav-link py-3"}
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Home"
                onMouseEnter={(e) => handleHover(e)}
                onMouseLeave={(e) => handleMouseLeave(e)}
                onClick={(e) => handleClick(e)}
            >
                <i className={"bi bi-" + type + " text-white"}></i>
            </a>
        </li>
    );
}

export default SidebarButtons;
