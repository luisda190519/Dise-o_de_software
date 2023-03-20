import { useState, useEffect } from "react";
import { anuncios } from "../utils/jsonJobs";
import Jobcard from "../components/Jobcard";

function Applications() {
    const [opcion, setOpcion] = useState(0);
    const [jobView, setJobView] = useState(false);

    const handleClick = function (e, op) {
        setOpcion(op);
    };

    const goBack = function (e) {
        setJobView(false);
    };

    const getJob = function (e, jobId) {
        setJobView(anuncios.find((job) => job.id === jobId));
    };

    useEffect(() => {}, [opcion, jobView]);

    return (
        <div className="my-3">
            {jobView ? (
                <div>
                    <div className="d-flex align-items-center">
                        <h3>
                            {" "}
                            <button
                                className="btn btn-light rounded-circle me-3"
                                onClick={(e) => goBack(e)}
                            >
                                <i className="bi bi-arrow-left"></i>
                            </button>
                            Estado del proceso de selección
                        </h3>
                    </div>

                    <div className="row gx-0">
                        <div className="col-6">
                            <div className="card mt-2">
                                <div
                                    className="card-header"
                                    style={{
                                        backgroundColor: "#005DA9",
                                        color: "white",
                                    }}
                                >
                                    <div className="row">
                                        <div className="col-4 ">
                                            <div className="d-flex justify-content-center align-items-center h-100">
                                                <i class="bi bi-1-circle-fill me-2 text-white fs-1"></i>
                                            </div>
                                        </div>
                                        <div className="col-8">
                                            <div className="my-3">
                                                <h5>Postulado</h5>
                                                <p>
                                                    El reclutador vio algo
                                                    interesante en tu CV
                                                </p>
                                                <p>vas por buen camino</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-body fs-5">
                                    <ul>
                                        <li className="mt-3">
                                            Aplicado -{" "}
                                            <span>Más de 30 días</span>
                                        </li>
                                        <li className="text-secondary mt-3">
                                            CV Visto
                                        </li>
                                        <li className="text-secondary mt-3">
                                            Finalista
                                        </li>
                                        <li className="text-secondary mt-3">
                                            Proceso finalizado
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <Jobcard job={jobView} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Aplicaciones</h2>
                    <div className="my-4">
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={
                                opcion == 0
                                    ? {
                                          backgroundColor: "#eaf3fb",
                                          border: "none",
                                          color: "gray",
                                      }
                                    : {}
                            }
                            onClick={(e) => handleClick(e, 0)}
                        >
                            Todas las aplicaciones
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={
                                opcion == 1
                                    ? {
                                          backgroundColor: "#eaf3fb",
                                          border: "none",
                                          color: "gray",
                                      }
                                    : {}
                            }
                            onClick={(e) => handleClick(e, 1)}
                        >
                            Aplicadas
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={
                                opcion == 2
                                    ? {
                                          backgroundColor: "#eaf3fb",
                                          border: "none",
                                          color: "gray",
                                      }
                                    : {}
                            }
                            onClick={(e) => handleClick(e, 2)}
                        >
                            HdV Vistas
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={
                                opcion == 3
                                    ? {
                                          backgroundColor: "#eaf3fb",
                                          border: "none",
                                          color: "gray",
                                      }
                                    : {}
                            }
                            onClick={(e) => handleClick(e, 3)}
                        >
                            En proceso
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={
                                opcion == 4
                                    ? {
                                          backgroundColor: "#eaf3fb",
                                          border: "none",
                                          color: "gray",
                                      }
                                    : {}
                            }
                            onClick={(e) => handleClick(e, 4)}
                        >
                            Proceso finalizado
                        </button>
                    </div>
                    <div className="row gx-0 justify-content-start">
                        <div className="col-8">
                            {anuncios.map((anuncio, key) => {
                                return (
                                    <div
                                        className="card me-4 mb-4 pt-3 px-4"
                                        key={key}
                                        id="applications"
                                        onClick={(e) => getJob(e, anuncio.id)}
                                    >
                                        <div className="row g-0">
                                            <div className="col-md-8">
                                                <h4>{anuncio.title}</h4>
                                                <p>
                                                    {anuncio.company}{" "}
                                                    <i
                                                        className="bi bi-star-fill"
                                                        style={{
                                                            color: "yellow",
                                                        }}
                                                    ></i>{" "}
                                                    {anuncio.rating}
                                                </p>
                                            </div>

                                            <div className="col-md-4 d-flex flex-row">
                                                <i
                                                    class="bi bi-1-circle-fill me-2 fs-1"
                                                    style={{ color: "#0D3878" }}
                                                ></i>
                                                <div className="">
                                                    <p className="my-0">
                                                        Aplicado
                                                    </p>
                                                    <p className="my-0">
                                                        Más de 30 días
                                                    </p>
                                                    <p className="mt-0">
                                                        66 candidatos postulados
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="col-4">
                            <div className="card me-5">
                                <img
                                    src="https://www.naukrigulf.com/career-tips/wp-content/uploads/2019/01/Job-Apllication-Writing-Tips.jpg"
                                    class="img-fluid"
                                    alt=""
                                />
                                <div className="card-body">
                                    Estos son los estados en los que puede estar
                                    tu candidatura.
                                    <div
                                        className="my-3 ms-2"
                                        style={{ fontSize: "1.1rem" }}
                                    >
                                        <p>
                                            <i
                                                class="bi bi-1-circle-fill me-2"
                                                style={{ color: "#0D3878" }}
                                            ></i>{" "}
                                            Postulado
                                        </p>
                                        <p>
                                            <i
                                                class="bi bi-2-circle-fill me-2"
                                                style={{ color: "#0D3878" }}
                                            ></i>
                                            CV Visto
                                        </p>
                                        <p>
                                            <i
                                                class="bi bi-3-circle-fill me-2"
                                                style={{ color: "#0D3878" }}
                                            ></i>
                                            Finalista
                                        </p>
                                        <p>
                                            <i
                                                class="bi bi-4-circle-fill me-2"
                                                style={{ color: "#0D3878" }}
                                            ></i>
                                            Proceso finalizado
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Applications;
