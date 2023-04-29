import { useState, useEffect } from "react";

function SidebarButtons({ id, type, changeScreen, buttonActive }) {
    const [active, setActive] = useState(false);

    const handleHover = function (e) {
        e.preventDefault();
        e.target.classList.add("border");
    };

    const handleMouseLeave = function (e) {
        e.preventDefault();
        e.target.classList.remove("border");
    };

    const handleClick = function (e) {
        e.preventDefault();
        changeScreen(id);
    };

    useEffect(() => {
        setActive(buttonActive == id)
    }, [buttonActive, id]);

    return (
        <li className="nav-item">
            <a
                href="#"
                className={active ? "nav-link active py-3" : "nav-link py-3"}
                onMouseEnter={(e) => handleHover(e)}
                onMouseLeave={(e) => handleMouseLeave(e)}
                onClick={(e) => handleClick(e)}
                style={active ? {backgroundColor:"#62B6CB"} : {backgroundColor:"#1B4965"}}
            >
                <i className={"bi bi-" + type + " text-white"}></i>
            </a>
        </li>
    );
}

export default SidebarButtons;
