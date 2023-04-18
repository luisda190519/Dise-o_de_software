import { useState, useContext, useEffect } from "react";
import Jobcard from "../components/Jobcard";
import { AuthContext } from "../utils/AuthContext";
import { getRequest } from "../utils/request";

function Applications({ user }) {
    const [opcion, setOpcion] = useState(0);
    const [jobView, setJobView] = useState(false);
    const [applications, setApplications] = useState([]);
    const buttonStyle1 = {
        backgroundColor: "#BEE9E8",
        border: "none",
        color: "gray",
    };

    const handleClick = function (e, op) {
        setOpcion(op);
    };

    const goBack = function (e) {
        setJobView(false);
    };

    const getJob = function (e, jobId) {
        setJobView(applications.find((job) => job.id === jobId));
    };

    const getApplications = async function () {
        try {
            setApplications(user.jobApplications);
        } catch (error) {}
    };

    const getApplicationsComponent = function () {
        return applications.map((anuncio, key) => {
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
                                className="bi bi-1-circle-fill me-2 fs-1"
                                style={{ color: "#1B4965" }}
                            ></i>
                            <div className="">
                                <p className="my-0">Aplicado</p>
                                <p className="my-0">Más de 30 días</p>
                                <p className="mt-0">66 candidatos postulados</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    useEffect(() => {
        getApplications();
    }, []);

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
                                                <i className="bi bi-1-circle-fill me-2 text-white fs-1"></i>
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
                        <div className="col-6 mt-2">
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
                            style={opcion == 0 ? buttonStyle1 : {}}
                            onClick={(e) => handleClick(e, 0)}
                        >
                            Todas las aplicaciones
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={opcion == 1 ? buttonStyle1 : {}}
                            onClick={(e) => handleClick(e, 1)}
                        >
                            Aplicadas
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={opcion == 2 ? buttonStyle1 : {}}
                            onClick={(e) => handleClick(e, 2)}
                        >
                            HdV Vistas
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={opcion == 3 ? buttonStyle1 : {}}
                            onClick={(e) => handleClick(e, 3)}
                        >
                            En proceso
                        </button>
                        <button
                            className="btn btn-outline-secondary rounded-pill me-3"
                            style={opcion == 4 ? buttonStyle1 : {}}
                            onClick={(e) => handleClick(e, 4)}
                        >
                            Proceso finalizado
                        </button>
                    </div>
                    <div className="row gx-0 justify-content-start">
                        <div className="col-8">
                            {applications.length !== 0 ? (
                                getApplicationsComponent()
                            ) : (
                                <div
                                    className="card px-3 py-3 me-3"
                                    style={{
                                        backgroundColor: "#e9ebf6",
                                    }}
                                >
                                    No tienes aplicaciones registradas
                                </div>
                            )}
                        </div>
                        <div className="col-4">
                            <div className="card me-5">
                                <img
                                    src="https://www.naukrigulf.com/career-tips/wp-content/uploads/2019/01/Job-Apllication-Writing-Tips.jpg"
                                    className="img-fluid"
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
                                                className="bi bi-1-circle-fill me-2"
                                                style={{ color: "#1B4965" }}
                                            ></i>{" "}
                                            Postulado
                                        </p>
                                        <p>
                                            <i
                                                className="bi bi-2-circle-fill me-2"
                                                style={{ color: "#1B4965" }}
                                            ></i>
                                            CV Visto
                                        </p>
                                        <p>
                                            <i
                                                className="bi bi-3-circle-fill me-2"
                                                style={{ color: "#1B4965" }}
                                            ></i>
                                            Finalista
                                        </p>
                                        <p>
                                            <i
                                                className="bi bi-4-circle-fill me-2"
                                                style={{ color: "#1B4965" }}
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
