import { useState, useContext, useEffect } from "react";

function Home({ utils: { changeScreen, buttonActive } }) {
    const [searchBar, setSearchBar] = useState(0);

    const searchJob = function (e) {
        changeScreen(1);
    };

    const changeSearchBar = function (e, id) {
        setSearchBar(id);
    };

    useEffect(() => {}, [searchBar]);

    return (
        <div>
            <div className="mx-0">
                <img
                    src="/home.png"
                    className="img-fluid"
                    style={{
                        width: "100vw",
                        height: "75vh",
                        position: "absolute",
                        top: "1vh",
                        zIndex: "-5",
                    }}
                />

                <div className="bg-white container-fluid border border-top-0">
                    <div className="row">
                        <div className="col-3">
                            <img src="/logo.png" className="w-75 py-3" />
                        </div>
                        <div className="col-9 pt-3">
                            <div className="d-flex justify-content-end align-items-center">
                                <a href="" className="me-5 text-black fs-5">
                                    Home
                                </a>
                                <a href="" className="me-5 text-black fs-5">
                                    About
                                </a>
                                <a href="" className="me-5 text-black fs-5">
                                    Blog
                                </a>
                                <a href="" className="me-5 text-black fs-5">
                                    Contact
                                </a>
                                <button
                                    className="btn btn-primary rounded-pill me-3"
                                    style={{
                                        backgroundColor: "#62B6CB",
                                        border: "none",
                                    }}
                                >
                                    Publica un trabajo
                                </button>
                                <button
                                    className="btn btn-primary  rounded-pill"
                                    style={{
                                        backgroundColor: "#1B4965",
                                        border: "none",
                                    }}
                                >
                                    Buscar un empleo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="container card d-flex justify-content-center align-items-center p-4 w-75 border-0"
                style={
                    searchBar == 0
                        ? { marginTop: "25vh", backgroundColor: "#ffff" }
                        : { marginTop: "25vh", backgroundColor: "#1B4965" }
                }
            >
                <div
                    className="rounded"
                    style={{
                        position: "absolute",
                        backgroundColor: "#f6f7f8",
                        padding: "7rem 35rem",
                        zIndex: "-1",
                        boxShadow:"0 9px 46px 0 9px 46px rgb(47 54 57 / 5%), 0 18px 38px rgb(47 54 57 / 6%), 0 11px 15px rgb(47 54 57 / 7%)"
                    }}
                ></div>
                <button
                    className="btn btn-light border-0"
                    style={{
                        position: "absolute",
                        left: "-0.2px",
                        top: "-2.3rem",
                        backgroundColor: "#ffff",
                        zIndex: "10",
                    }}
                    onClick={(e) => changeSearchBar(e, 0)}
                >
                    Busca un empleo
                </button>
                <button
                    className="btn btn-light border-0 text-white"
                    style={{
                        position: "absolute",
                        left: "150px",
                        top: "-2.3rem",
                        backgroundColor: "#1B4965",
                        zIndex: "10",
                    }}
                    onClick={(e) => changeSearchBar(e, 1)}
                >
                    Busca un candidato
                </button>
                <div className="input-group me-3">
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <i className="bi bi-bar-chart-line"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control me-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder={
                            searchBar == 0
                                ? "título o palabras clave"
                                : "Carrera"
                        }
                    />
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <i className="bi bi-building"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control me-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Compañia"
                    />
                    <span
                        className="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <i className="bi bi-geo-alt"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control me-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Lugar, ubicacion"
                    />
                    <button
                        className="btn btn-primary rounded-pill"
                        onClick={(e) => searchJob(e)}
                        style={
                            searchBar == 0
                                ? {
                                      backgroundColor: "#1B4965",
                                      border: "none",
                                  }
                                : {
                                      backgroundColor: "#fff",
                                      color: "#000",
                                      border: "none",
                                  }
                        }
                    >
                        Buscar Empleos
                    </button>
                </div>
            </div>

            <div
                className="pb-5"
                style={{ marginTop: "40vh", backgroundColor: "#fff" }}
            >
                <hr />
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
                            audiencia en Latinoamérica
                        </h2>
                    </div>
                    <div className="row mt-5">
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
