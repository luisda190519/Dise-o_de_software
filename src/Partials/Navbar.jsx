import DropdownButtons from "../components/DropdownButtons";
import RoundButton from "../components/RoundButton";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

function Navbar({ utils: { changeScreen, buttonActive }, user }) {
    const [option, setOption] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [lugar, setLugar] = useState("");
    const { title, place } = useParams();
    const navigate = useNavigate();
    const colorDarkBlue = { color: "#1b4965", border: "none" };
    const colorLightBlue = { color: "#62B6CB", border: "none" };
    const red = { color: "#e63946", border: "none" };
    const backgroundColorDarkBlue = {
        backgroundColor: "#1b4965",
        border: "none",
        color: "white",
    };
    const backgroundColorLightBlue = {
        backgroundColor: "#62B6CB",
        border: "none",
        color: "white",
        paddingLeft: "7em",
    };
    const backgroundRed = {
        backgroundColor: "#e63946",
        border: "none",
        color: "white",
    };

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
        <div
            className=""
            style={{
                marginTop: "-2em",
                width: "100vw",
                marginLeft: "-10vw",
            }}
        >
            <div className="bg-white pt-3 pb-2" style={{ paddingLeft: "7em" }}>
                <div className="row">
                    <div className="col-3">
                        <div className="">
                            <h1
                                style={colorDarkBlue}
                                onClick={(e) => goHome(e)}
                                id="clickeable"
                            >
                                <span style={red}>H</span>ire
                                <span style={red}>M</span>e
                                <span style={red}>N</span>ow
                            </h1>
                        </div>
                    </div>
                    <div className="col-8 mt-2" id="button-group">
                        <div className="input-group">
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
                                        ? place
                                        : "Lugar o ubicacion"
                                }
                                aria-label="Server"
                                onChange={(e) => typeLugar(e)}
                            />
                            <span
                                className="input-group-text"
                                style={{
                                    backgroundColor: "#e63946",
                                    cursor: "pointer",
                                }}
                            >
                                <i
                                    className="bi bi-search text-white"
                                    id="navbar-buttons"
                                    onClick={(e) => searchJob(e)}
                                ></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-white py-2" style={backgroundColorLightBlue}>
                <div className="row">
                    <div
                        className="col-8 d-flex align-items-center"
                        style={{ fontSize: "0.9em" }}
                    >
                        <a className="text-white" href="">
                            Porque HireMeNow
                        </a>
                        <a className="text-white ms-5" href="">
                            Lo que dicen nuestros miembros
                        </a>
                        <a className="text-white ms-5" href="">
                            Contactenos
                        </a>
                    </div>
                    <div className="col-4">
                        <div className="d-flex justify-content-end align-items-center">
                            <i
                                className="bi bi-lightbulb me-3 fs-5"
                                id="clickeable"
                            ></i>
                            {user ? (
                                user.isRecruiter ? (
                                    <div className="me-3">
                                        <button
                                            className="btn btn-primary "
                                            style={backgroundColorDarkBlue}
                                            onClick={(e) =>
                                                navigate("/jobform")
                                            }
                                        >
                                            Publica ofertas
                                        </button>
                                    </div>
                                ) : (
                                    <div></div>
                                )
                            ) : (
                                <div>
                                    <button
                                        className="btn btn-primary "
                                        style={backgroundColorDarkBlue}
                                        onClick={(e) => navigate("/login")}
                                    >
                                        Iniciar sesion
                                    </button>
                                    <button
                                        className="btn btn-primary mx-3"
                                        style={backgroundRed}
                                        onClick={(e) => navigate("/signup")}
                                    >
                                        Registrarse
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="my-4 row d-flex justify-content-center mb-5"
                style={{ paddingLeft: "7em" }}
            >
                {buttonActive == 0 ? (
                    <div className="col-11">{getFilterDropdownButtons()}</div>
                ) : (
                    <div
                        className="col-11 d-flex justify-content-between"
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
