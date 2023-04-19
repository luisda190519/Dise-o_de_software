import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { opiniones } from "../utils/opinions";
import { anuncios } from "../utils/jsonJobs";
import { AuthContext } from "../utils/AuthContext";

function Home() {
    const [searchBar, setSearchBar] = useState(0);
    const [titulo, setTitulo] = useState("");
    const [lugar, setLugar] = useState("");
    let [index, setIndex] = useState(3);
    const [move, setMove] = useState(opiniones.slice(0, index));
    const navigate = useNavigate();
    const { userAuthenticated, logout } = useContext(AuthContext);
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
    };
    const backgroundRed = {
        backgroundColor: "#e63946",
        border: "none",
        color: "white",
    };

    const searchJob = function (e) {
        return navigate(
            "/jobs" +
                (titulo.length !== 0 ? "/title/" + titulo : "") +
                (lugar.length !== 0 ? "/place/" + lugar : "")
        );
    };

    const changeSearchBar = function (e, id) {
        setSearchBar(id);
    };

    const typeTitulo = function (e) {
        setTitulo(e.target.value);
    };

    const typeLugar = function (e) {
        setLugar(e.target.value);
    };

    const moveOpinions = function (e) {
        e.preventDefault();

        if (index >= opiniones.length) {
            setMove(opiniones.slice(0, 3));
            return setIndex(3);
        }

        setMove(opiniones.slice(index, index + 3));
        setIndex((index += 3));
    };

    return (
        <div className="bg-white">
            <div
                className="bg-white"
                style={{
                    position: "fixed",
                    width: "100%",
                    top: "0",
                    left: "0",
                    zIndex: "999",
                }}
            >
                <div className="my-3">
                    <div className="row">
                        <div className="col-3 ms-3">
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
                                    placeholder={"Cargo o categoria"}
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
                                    placeholder={"Lugar o ubicacion"}
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

                    <div
                        className="text-white p-2 mt-3"
                        style={backgroundColorDarkBlue}
                    >
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
                                    <i className="bi bi-lightbulb me-3 fs-5"></i>
                                    {userAuthenticated ? (
                                        userAuthenticated.isRecruiter ? (
                                            <div className="me-3">
                                                <button
                                                    className="btn btn-primary "
                                                    style={
                                                        backgroundColorLightBlue
                                                    }
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
                                                style={backgroundColorLightBlue}
                                                onClick={(e) =>
                                                    navigate("/login")
                                                }
                                            >
                                                Iniciar sesion
                                            </button>
                                            <button
                                                className="btn btn-primary mx-3"
                                                style={backgroundRed}
                                                onClick={(e) =>
                                                    navigate("/signup")
                                                }
                                            >
                                                Registrarse
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="p-5 w-75 mx-auto"
                style={{ marginTop: "30vh", backgroundColor: "#C6DAE5 " }}
            >
                <div className="row">
                    <div className="col-8">
                        <h2 style={colorDarkBlue}>
                            <span style={red}>El sitio de empleo #1 </span> para
                            encontrar trabajos - sin anuncios, estafas ni
                            basura. Encuentra tu próximo trabajo en HireMeNow
                        </h2>
                        <div className="mt-5">
                            <button
                                className="btn btn-primary"
                                style={backgroundRed}
                                onClick={(e) => navigate("/jobs")}
                            >
                                Buscar Empleos
                            </button>
                            <button
                                className="btn btn-primary ms-3"
                                style={backgroundColorDarkBlue}
                                onClick={(e) => navigate("/signup")}
                            >
                                Publica ofertas
                            </button>
                        </div>
                    </div>
                    <div className="col-4">
                        <img
                            src="/home.png"
                            className="img-fluid h-100 w-100"
                        />
                    </div>
                </div>
            </div>

            <hr className="mt-5 mb-4" />

            <div>
                <h3 className="text-center mb-4">
                    Lo que dicen nuestros miembros
                </h3>
                <div className="row d-flex align-items-center">
                    <div className="col-1">
                        <i
                            className="bi bi-arrow-left fs-2 ms-5"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => moveOpinions(e)}
                        ></i>
                    </div>
                    <div className="col-10">
                        <div className="row row-cols-1 row-cols-md-3 g-4 px-5">
                            {move.map((opinion, key) => {
                                return (
                                    <div className="col" key={key}>
                                        <div
                                            className="card h-100"
                                            style={
                                                key === 1
                                                    ? backgroundColorDarkBlue
                                                    : {
                                                          backgroundColor:
                                                              "#C6DAE5",
                                                      }
                                            }
                                        >
                                            <div className="card-body">
                                                {opinion.message}
                                            </div>
                                            <img
                                                src={opinion.image}
                                                className="img-fluid w-25 h-25 rounded-pill mx-auto"
                                            />
                                            <p className="text-center mt-3">
                                                {opinion.name}{" "}
                                                <i className="bi bi-dot"></i>{" "}
                                                {opinion.location}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-1">
                        <i
                            className="bi bi-arrow-right fs-2 me-5"
                            style={{ cursor: "pointer" }}
                            onClick={(e) => moveOpinions(e)}
                        ></i>
                    </div>
                </div>
            </div>

            <hr className="mt-5" />

            <div className="pb-5">
                <div className="mt-5 border-bottom mb-5 pb-5 ">
                    <div className="text-center mt-5">
                        <h3>Si buscas trabajo HireMeNow es tu mejor aliado!</h3>
                        <p className="fs-5 text-secondary">
                            Miles de ofertas de empleo están esperándote
                        </p>
                    </div>
                    <div className="d-flex justify-content-center">
                        <div className="row mt-5">
                            <div className="col-4">
                                <img
                                    src="https://cp.ct-stc.com/web/20230328.12/c/img/encontrar_empleo.png"
                                    className="img-fluid"
                                />
                            </div>
                            <div className="col-8 ps-5">
                                <h3>Te ayudamos a encontrar un empleo mejor</h3>
                                <p className="fs-6 text-secondary">
                                    Haz que tu currículum sea visible para miles
                                    de empresas en nuestra bolsa de trabajo
                                </p>
                                <div>
                                    <div className="d-flex">
                                        <i className="bi bi-check-lg text-success me-2"></i>
                                        <b>Registro gratuito</b>
                                        <p className="text-secondary ms-2">
                                            Encuentra tu próximo trabajo hoy.
                                        </p>
                                    </div>
                                    <div className="d-flex">
                                        <i className="bi bi-check-lg text-success me-2"></i>
                                        <b>Ofertas cada día.</b>
                                        <p className="text-secondary ms-2">
                                            Empleos que se ajustan a tu perfil.
                                        </p>
                                    </div>
                                    <div className="d-flex">
                                        <i className="bi bi-check-lg text-success me-2"></i>
                                        <b>Alertas personalizadas.</b>
                                        <p className="text-secondary ms-2">
                                            Tú crea alertas de empleo y nosotros
                                            te avisaremos.
                                        </p>
                                    </div>
                                    <div className="d-flex">
                                        <i className="bi bi-check-lg text-success me-2"></i>
                                        <b>Completa tu perfil..</b>
                                        <p className="text-secondary ms-2">
                                            Muéstrate profesional y ganarás
                                            visibilidad.
                                        </p>
                                    </div>
                                    <button
                                        className="btn btn-primary btn-lg rounded-pill mt-3"
                                        style={{
                                            backgroundColor: "#1B4965",
                                            border: "none",
                                        }}
                                        onClick={(e) => searchJob(e)}
                                    >
                                        Buscar un empleo
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 mb-5">
                    <div className="container">
                        <h2 className="text-center">
                            Publica tus ofertas en el portal de empleo con mayor
                            audiencia en Colombia
                        </h2>
                    </div>
                    <div className="row mt-5 ms-5">
                        <div className="col-4">
                            <div className="row gx-0">
                                <div className="col-2 d-flex align-items-center justify-content-center text-danger">
                                    <i className="bi bi-newspaper fs-1"></i>
                                </div>
                                <div className="col-8">
                                    <h5>Publica tu vacante</h5>
                                    Crea fácilmente tu oferta de trabajo y
                                    publícala en un click.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row gx-0">
                                <div className="col-2 d-flex align-items-center justify-content-center text-primary">
                                    <i className="bi bi-eye fs-1"></i>
                                </div>
                                <div className="col-8">
                                    <h5>Revisa las postulaciones</h5>
                                    Selecciona a los mejores candidatos entre
                                    todos los CVs recibidos.
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row gx-0">
                                <div className="col-2 d-flex align-items-center justify-content-center text-warning">
                                    <i className="bi bi-star fs-1"></i>
                                </div>
                                <div className="col-8">
                                    <h5>Contrata</h5>
                                    Encuentra al candidato que mejor se adapta
                                    al perfil buscado.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
