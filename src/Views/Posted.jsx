import { useState, useEffect } from "react";
import { getRequest } from "../utils/request";
import CVRecruiter from "./CVRecruiter";

function Posted({ user }) {
    const [jobView, setJobView] = useState(false);
    const [jobsPosted, setJobsposted] = useState([]);
    const [postulados, setPostulados] = useState([]);

    const goBack = function (e) {
        setJobView(false);
    };

    const getJob = async function (e, jobId) {
        e.preventDefault();
        const usuariosPostulados = await getRequest("/jobs/postulados/job/" + jobId)
        setPostulados(usuariosPostulados)
        setJobView(jobsPosted.find((job) => job._id === jobId));
    };

    const getJobsPosted = async function () {
        const jobs = await getRequest("/auth/jobsPosted/" + user._id);
        setJobsposted(jobs);
    };

    useEffect(() => {
        getJobsPosted();
    }, [jobsPosted]);

    return (
        <div className="my-3">
            {jobView ? (
                <div>
                    <button
                        className="btn btn-light fs-5 border rounded-pill"
                        onClick={(e) => goBack(e)}
                    >
                        <i className="bi bi-arrow-left me-3"></i>
                        Volver al listado
                    </button>

                    <div className="row mt-4">
                        <div className="col-11">
                            <CVRecruiter postulados={postulados} jobID={jobView._id}/>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Mis empleos publicados</h2>
                    <div className="row gx-0 justify-content-start mt-4">
                        <div className="col-8">
                            {jobsPosted.length !== 0 ? (
                                jobsPosted.map((anuncio, key) => {
                                    return (
                                        <div
                                            className="card me-4 mb-4 pt-3 px-4"
                                            key={key}
                                            id="applications"
                                            onClick={(e) =>
                                                getJob(e, anuncio._id)
                                            }
                                        >
                                            <div className="row g-0">
                                                <div className="col-md-8">
                                                    <h5>{anuncio.title}</h5>
                                                    <p>
                                                        {anuncio.company}{" "}
                                                        <i
                                                            className="bi bi-star-fill"
                                                            style={{
                                                                color: "yellow",
                                                            }}
                                                        ></i>{" "}
                                                        {anuncio.rating}{" "}
                                                        <span> </span>
                                                        {anuncio.location}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            ) : (
                                <div
                                    className="card px-3 py-3 me-3"
                                    style={{
                                        backgroundColor: "#e9ebf6",
                                    }}
                                >
                                    No tienes empleos que hayas publicado
                                </div>
                            )}
                        </div>
                        <div className="col-4">
                            <div className="card me-5">
                                <img
                                    src="https://www.lahora.com.ec/wp-content/uploads/2022/03/busqueda-trabajo-remoto-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="card-body">
                                    Revisa los candidatos, cada uno es un
                                    potencial empleador, la desicion esta en tus
                                    manos
                                </div>
                                <div className="d-flex justify-content-center mb-4">
                                    <button
                                        className="btn btn-primary w-75 rounded-pill"
                                        style={{
                                            backgroundColor: "#1B4965",
                                            border: "none",
                                        }}
                                    >
                                        Revisar Empleos
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Posted;
