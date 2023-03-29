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
                    src="https://cloudbooking.com/wp-content/uploads/2022/08/activity-based-working-feature-.jpg"
                    className="img-fluid"
                    style={{
                        width: "100vw",
                        maxHeight: "75vh",
                        position: "absolute",
                        zIndex: "-5",
                        filter: "blur(1px)",
                    }}
                />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <img src="/logo.png" className="w-75 py-3" />
                        </div>
                        <div className="col-9 mt-3">
                            <div className="d-flex justify-content-end align-items-center">
                                <a href="" className="me-5 text-white">
                                    <b>Home</b>
                                </a>
                                <a href="" className="me-5 text-white">
                                    <b>About</b>
                                </a>
                                <a href="" className="me-5 text-white">
                                    <b>Blog</b>
                                </a>
                                <a href="" className="me-5 text-white">
                                    <b>Contact</b>
                                </a>
                                <button
                                    className="btn btn-primary  rounded-pill me-3"
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
                        ? { marginTop: "20vh", backgroundColor: "#ffff" }
                        : { marginTop: "20vh", backgroundColor: "#1B4965" }
                }
            >
                <button
                    className="btn btn-light border-0"
                    style={{
                        position: "absolute",
                        left: "-0.2px",
                        top: "-36px",
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
                        top: "-36px",
                        backgroundColor: "#1B4965",
                        zIndex: "10",
                    }}
                    onClick={(e) => changeSearchBar(e, 1)}
                >
                    Busca un candidato
                </button>
                <div class="input-group me-3">
                    <span
                        class="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <i class="bi bi-bar-chart-line"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control me-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder={
                            searchBar == 0
                                ? "título o palabras clave"
                                : "Carrera"
                        }
                    />
                    <span
                        class="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <i class="bi bi-building"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control me-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="Compañia"
                    />
                    <span
                        class="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <i class="bi bi-geo-alt"></i>
                    </span>
                    <input
                        type="text"
                        class="form-control me-3"
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
        </div>
    );
}

export default Home;
