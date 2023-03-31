import { anuncios } from "../utils/jsonJobs";
import { useState } from "react";
import JobExpanded from "./JobExpanded";

function Likes() {
    const [jobView, setJobView] = useState(false);

    const goBack = function (e) {
        setJobView(false);
    };

    const getJob = function (e, jobId) {
        setJobView(anuncios.find((job) => job.id === jobId));
    };

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
                            <JobExpanded job={jobView} />
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Mis favoritos</h2>
                    <div className="row gx-0 justify-content-start mt-4">
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
                                                <h5>{anuncio.title}</h5>
                                                <p>
                                                    {anuncio.company}{" "}
                                                    <i
                                                        className="bi bi-star-fill"
                                                        style={{
                                                            color: "yellow",
                                                        }}
                                                    ></i>{" "}
                                                    {anuncio.rating}
                                                    {anuncio.location}
                                                </p>
                                            </div>

                                            <div className="col-md-4 d-flex justify-content-end">
                                                <div className="my-3">
                                                    <button
                                                        className="btn btn-primary btn-lg rounded-pill me-4"
                                                        style={{
                                                            backgroundColor:
                                                                "#1B4965",
                                                            border: "none",
                                                        }}
                                                    >
                                                        Aplicar
                                                    </button>
                                                    <button className="btn btn-danger btn-lg rounded-circle">
                                                        <i className="bi bi-heart"></i>
                                                    </button>
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
                                    src="https://www.lahora.com.ec/wp-content/uploads/2022/03/busqueda-trabajo-remoto-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <div className="card-body">
                                    Guarda con un ❤ las ofertas de empleo que
                                    más te interesan y postúlate cuando lo
                                    desees
                                </div>
                                <div className="d-flex justify-content-center mb-4">
                                    <button
                                        className="btn btn-primary w-75 rounded-pill"
                                        style={{
                                            backgroundColor: "#1B4965",
                                            border: "none",
                                        }}
                                    >
                                        Buscar empleos
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

export default Likes;
