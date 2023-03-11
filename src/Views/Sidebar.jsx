function Sidebar() {
    const handleHover = function (e) {
        e.target.classList.add("border");
    };

    const handleMouseLeave = function (e) {
        e.target.classList.remove("border");
    };

    return (
        <div
            class="d-flex flex-column flex-shrink-0"
            style={{ width: "4.5rem", height: "100%" }}
            id="sidebar"
        >
            <a
                href="/"
                class="d-block p-3 link-white text-decoration-none"
                title=""
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                data-bs-original-title="Icon-only"
            >
                <h1>
                    <i class="bi bi-bootstrap text-white"></i>
                </h1>
            </a>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center my-5">
                <li class="nav-item">
                    <a
                        href="#"
                        aria-current="page"
                        className="nav-link active py-3"
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Home"
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                    >
                        <i class="bi bi-search" id="sidebar-buttons"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link py-3 "
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Dashboard"
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                    >
                        <i class="bi bi-send" id="sidebar-buttons"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link py-3"
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Orders"
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                    >
                        <i class="bi bi-heart" id="sidebar-buttons"></i>
                    </a>
                </li>
                <li>
                    <a
                        href="#"
                        class="nav-link py-3"
                        title=""
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        data-bs-original-title="Products"
                        onMouseEnter={(e) => handleHover(e)}
                        onMouseLeave={(e) => handleMouseLeave(e)}
                    >
                        <i class="bi bi-bell" id="sidebar-buttons"></i>
                    </a>
                </li>
            </ul>
            <div class="dropdown border-top">
                <a
                    href="#"
                    class="d-flex align-items-center justify-content-center p-3 link-white text-decoration-none dropdown-toggle mb-1"
                    id="dropdownUser3"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    <img
                        src="https://github.com/mdo.png"
                        alt="mdo"
                        width="24"
                        height="24"
                        class="rounded-circle"
                    />
                </a>
                <ul
                    class="dropdown-menu text-small shadow"
                    aria-labelledby="dropdownUser3"
                >
                    <li>
                        <a class="dropdown-item" href="#">
                            New project...
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Settings
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Profile
                        </a>
                    </li>
                    <li>
                        <a class="dropdown-item" href="#">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
