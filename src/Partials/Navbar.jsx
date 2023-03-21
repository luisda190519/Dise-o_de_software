import DropdownButtons from "../components/DropdownButtons";
import { useState, useEffect } from "react";

function Navbar({ buttonActive, changeScreen }) {
    const [option, setOption] = useState(false);

    const changeOptionPage = function (e, page) {
        setOption(page);
        changeScreen(page + 4);
    };

    useEffect(() => {}, [option]);

    useEffect(() => {
        if (buttonActive < 4) {
            return setOption(false);
        }
    }, [buttonActive]);

    const handleMouseEnter = function (e, page) {
        if (page !== option) {
            e.target.style.backgroundColor = "#0D3878";
            e.target.classList.add("text-white");
        }
    };

    const handleMouseLeave = function (e, page) {
        if (page !== option) {
            e.target.style.backgroundColor = "#eaf3fb";
            e.target.classList.remove("text-white");
        }
    };

    return (
        <div>
            <div className="container my-3">
                <div className="row">
                    <div className="d-flex align-items-center">
                        <div className="col-3">
                            <img
                                src="https://cp.ct-stc.com/web/20230306.03/c/img/logos/logoct.svg?v=3.48"
                                alt=""
                                className="navbar-buttons mx-3"
                                id="clickeable"
                            />
                        </div>
                        <div
                            className="col-9 d-flex justify-content-start align-items-center"
                            id="button-group"
                        >
                            <div className="input-group mb-3 w-75">
                                <span className="input-group-text">
                                    <i
                                        className="bi bi-briefcase"
                                        id="navbar-buttons"
                                    ></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Cargo o categoria"
                                    aria-label="Username"
                                />
                                <span className="input-group-text">
                                    <i
                                        className="bi bi-geo-alt"
                                        id="navbar-buttons"
                                    ></i>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Lugar"
                                    aria-label="Server"
                                />
                                <span className="input-group-text">
                                    <i
                                        className="bi bi-search"
                                        id="navbar-buttons"
                                    ></i>
                                </span>
                            </div>

                            <div className="mx-5 d-flex align-items-end">
                                <a
                                    className="text-dark "
                                    href="https://www.youtube.com/shorts/2AKxs2n3CUk"
                                >
                                    <b>¡Publica ofertas gratis!</b>
                                </a>
                                <button className="btn btn-white" id="hdv">
                                    Crear HdV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-4">
                {buttonActive == 0 ? (
                    <div className="d-flex justify-content-between">
                        <DropdownButtons
                            title={"Fecha"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />

                        <DropdownButtons
                            title={"Departamento"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />

                        <DropdownButtons
                            title={"Ciudad"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />

                        <DropdownButtons
                            title={"Experiencia"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />

                        <DropdownButtons
                            title={"Salario"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />

                        <DropdownButtons
                            title={"Jornada"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />

                        <DropdownButtons
                            title={"Contrato"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />

                        <DropdownButtons
                            title={"Discapacidad"}
                            filters={[
                                { title: "Urgente", value: 45.245 },
                                { title: "Hoy", value: 45.245 },
                                { title: "Últimos 3 días", value: 45.245 },
                                { title: "Última semana", value: 45.245 },
                                { title: "Ultimo mes", value: 45.245 },
                            ]}
                        />
                    </div>
                ) : (
                    <div
                        className="d-flex justify-content-between"
                        id="navbar-part"
                    >
                        <button
                            className={
                                option === 0
                                    ? "btn btn-outline-primary w-25 me-3 text-white border border-0"
                                    : "btn btn-outline-primary w-25 me-3 text-secondary border border-0"
                            }
                            onMouseEnter={(e) => handleMouseEnter(e, 0)}
                            onMouseLeave={(e) => handleMouseLeave(e, 0)}
                            onClick={(e) => changeOptionPage(e, 0)}
                            style={
                                option === 0
                                    ? { backgroundColor: "#0D3878" }
                                    : { color: "#eaf3fb" }
                            }
                        >
                            {" "}
                            <i class="bi bi-house-door me-2 "></i>Mi area
                        </button>
                        <button
                            className={
                                option === 1
                                    ? "btn btn-outline-primary w-25 me-3 text-white border border-0"
                                    : "btn btn-outline-primary w-25 me-3 text-secondary border border-0"
                            }
                            onMouseEnter={(e) => handleMouseEnter(e, 1)}
                            onMouseLeave={(e) => handleMouseLeave(e, 1)}
                            onClick={(e) => changeOptionPage(e, 1)}
                            style={
                                option === 1
                                    ? { backgroundColor: "#0D3878" }
                                    : { color: "#eaf3fb" }
                            }
                        >
                            {" "}
                            <i class="bi bi-file-earmark-person me-2"></i>Hoja
                            de Vida
                        </button>
                        <button
                            className={
                                option === 2
                                    ? "btn btn-outline-primary w-25 me-3 text-white border border-0"
                                    : "btn btn-outline-primary w-25 me-3 text-secondary border border-0"
                            }
                            onMouseEnter={(e) => handleMouseEnter(e, 2)}
                            onMouseLeave={(e) => handleMouseLeave(e, 2)}
                            onClick={(e) => changeOptionPage(e, 2)}
                            style={
                                option === 2
                                    ? { backgroundColor: "#0D3878" }
                                    : { color: "#eaf3fb" }
                            }
                        >
                            {" "}
                            <i class="bi bi-window-sidebar me-2"></i>Test y
                            evaluaciones
                        </button>
                        <button
                            className={
                                option === 3
                                    ? "btn btn-outline-primary w-25 ms-3 text-white border border-0"
                                    : "btn btn-outline-primary w-25 ms-3 text-secondary border border-0"
                            }
                            onMouseEnter={(e) => handleMouseEnter(e, 3)}
                            onMouseLeave={(e) => handleMouseLeave(e, 3)}
                            onClick={(e) => changeOptionPage(e, 3)}
                            style={
                                option === 3
                                    ? { backgroundColor: "#0D3878" }
                                    : { color: "#eaf3fb" }
                            }
                        >
                            {" "}
                            <i class="bi bi-gear me-2"></i>Configuración
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
