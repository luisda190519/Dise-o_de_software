import DropdownButtons from "../components/DropdownButtons";
import RoundButton from "../components/RoundButton";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

function Navbar({ utils: { changeScreen, buttonActive } }) {
    const [option, setOption] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [lugar, setLugar] = useState("");
    const { userAuthenticated, logout } = useContext(AuthContext);
    const { title, company, location } = useParams();
    const navigate = useNavigate();

    const goHome = function (e) {
        return navigate("/home");
    };

    const typeTitulo = function (e) {
        setTitulo(e.target.value);
    };

    const typeLugar = function (e) {
        setLugar(e.target.value);
    };

    const searchJob = function (e) {
        return navigate(
            "/jobs" +
                (titulo.length !== 0 ? "/title/" + titulo : "") +
                (lugar.length !== 0 ? "/place/" + lugar : "")
        );
    };

    const getFilterDropdownButtons = function () {
        return (
            <>
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
            </>
        );
    };

    const getButtonGroup = function () {
        return (
            <>
                <RoundButton
                    type={"house-door"}
                    id={0}
                    option={option}
                    setOption={setOption}
                    text={"Mi area"}
                    changeScreen={changeScreen}
                />
                <RoundButton
                    type={"file-earmark-person"}
                    id={1}
                    option={option}
                    setOption={setOption}
                    text={"Hoja de Vida"}
                    changeScreen={changeScreen}
                />
                <RoundButton
                    type={"window-sidebar"}
                    id={2}
                    option={option}
                    setOption={setOption}
                    text={"Test y evaluaciones"}
                    changeScreen={changeScreen}
                />
                <RoundButton
                    type={"gear"}
                    id={3}
                    option={option}
                    setOption={setOption}
                    text={"Configuración"}
                    changeScreen={changeScreen}
                />
            </>
        );
    };

    //useEffect(() => {}, [option]);

    useEffect(() => {
        if (buttonActive < 4) {
            return setOption(false);
        }
    }, [buttonActive]);

    return (
        <div className="">
            <div className="my-3">
                <div className="row">
                    <div className="col-3">
                        <img
                            src="/logo.png"
                            className="img-fluid w-75"
                            id="clickeable"
                            onClick={(e) => goHome(e)}
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
                                placeholder={
                                    typeof title !== "undefined"
                                        ? title
                                        : "Cargo o categoria"
                                }
                                aria-label="Username"
                                onChange={(e) => typeTitulo(e)}
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
                                placeholder={
                                    typeof title !== "undefined"
                                        ? title
                                        : "Lugar o ubicacion"
                                }
                                aria-label="Server"
                                onChange={(e) => typeLugar(e)}
                            />
                            <span className="input-group-text">
                                <i
                                    className="bi bi-search"
                                    id="navbar-buttons"
                                    onClick={e => searchJob(e)}
                                ></i>
                            </span>
                        </div>
                    </div>
                    {userAuthenticated.isRecruiter ? (
                        <div className="col-2 text-center">
                            <a
                                className="text-dark  me-5"
                                onClick={(e) => navigate("/jobForm")}
                                style={{ cursor: "pointer" }}
                            >
                                <b>¡Publica ofertas gratis!</b>
                            </a>
                        </div>
                    ) : (
                        <div className="col-2"></div>
                    )}

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
                        {getFilterDropdownButtons()}
                    </div>
                ) : (
                    <div
                        className="d-flex justify-content-between"
                        id="navbar-part"
                    >
                        {getButtonGroup()}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
