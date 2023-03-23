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
            e.target.style.backgroundColor = "#1B4965";
            e.target.classList.add("text-white");
            e.target.style.borderRadius = "500px";
        }
    };

    const handleMouseLeave = function (e, page) {
        if (page !== option) {
            e.target.style.backgroundColor = "#CAE9FF";
            e.target.style.borderRadius = "500px";
            e.target.classList.remove("text-white");
        }
    };

    return (
        <div className="">
            <div className="my-3">
                <div className="row">
                    <div className="col-3">
                        <img
                            src="/logo.png"
                            className="img-fluid w-75"
                            id="clickeable"
                        />
                    </div>
                    <div className="col-6" id="button-group">
                        <div className="input-group mb-3">
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
                    </div>
                    <div className="col-2 text-center">
                        <a
                            className="text-dark  me-5"
                            href="https://www.youtube.com/shorts/2AKxs2n3CUk"
                        >
                            <b>¡Publica ofertas gratis!</b>
                        </a>
                    </div>
                    <div className="col-1">
                        <button className="btn btn-white" id="hdv">
                            Crear HdV
                        </button>
                    </div>
                </div>
            </div>

            <div className="my-4">
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
                                    ? { backgroundColor: "#1B4965" }
                                    : { color: "#CAE9FF" }
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
                                    ? { backgroundColor: "#1B4965" }
                                    : { color: "#CAE9FF" }
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
                                    ? { backgroundColor: "#1B4965" }
                                    : { color: "#CAE9FF" }
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
                                    ? { backgroundColor: "#1B4965" }
                                    : { color: "#CAE9FF" }
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
