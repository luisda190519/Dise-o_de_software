import { getRequest, putRequest } from "../utils/request";
import { useEffect, useState } from "react";

function Postulado({ user, jobID }) {
    const [estado, setEstado] = useState("Pendiente");
    const jobIndex = user.jobApplications.findIndex(
        (application) => application.job.toString() === jobID
    );

    const buttonStyleBlue = {
        backgroundColor: "#1b4965",
        border: "none",
    };

    const buttonStyleRed = {
        backgroundColor: "#e63946",
        border: "none",
        color: "white",
    };

    const buttonStyleLightBlue = {
        backgroundColor: "#62B6CB",
        border: "none",
        color: "white",
    };

    const changeState = async function (state) {
        const req = await putRequest("/jobs/editState", {
            userID: user._id,
            jobID: jobID,
            state: state,
        });
        return req;
    };

    const respuestaAplicante = async function (e, elegido) {
        if (elegido === 3) {
            setEstado("Usuario seleccionado");
            return changeState(3);
        }
        setEstado("Usuario descartado");
        return changeState(4);
    };

    useEffect(() => {
        changeState(2);
        respuestaAplicante(null, user.jobApplications[jobIndex].state);
    }, []);

    return (
        <div>
            <div className="card px-5 py-5 mb-4">
                <div className="row">
                    <div className="row">
                        <div className="col-4">
                            <img
                                src={
                                    typeof user.image !== "undefined"
                                        ? user.image
                                        : "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                                }
                                className="img-fluid rounded w-75 h-75"
                            />
                        </div>

                        <div className="col-8">
                            <h4>
                                {user.firstName} <span></span> {user.lastName}
                            </h4>
                            <p>{user.location ? user.location : <div></div>}</p>
                            <p>
                                <i className="bi bi-envelope me-2"></i>
                                {user.email}{" "}
                                <i className="bi bi-telephone me-5 ms-3">
                                    +57 {user.cellphone}
                                </i>
                            </p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <h4>{user.role ? user.role : <div></div>}</h4>
                        <p>
                            {user.description ? user.description : <div></div>}
                        </p>
                    </div>

                    {user.experience.length !== 0 ? (
                        <div
                            className="mt-5"
                            style={{ whiteSpace: "pre-wrap" }}
                        >
                            <h4>Experiencias profesional</h4>
                            <ul>
                                {user.estudios.map((estudio, key) => {
                                    return (
                                        <li className="my-3" key={key}>
                                            {estudio}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : (
                        <div></div>
                    )}

                    {user.estudios.length !== 0 ? (
                        <div className="mt-4">
                            <h4>Estudios</h4>
                            <ul>
                                {user.experience.map((experiencia, key) => {
                                    return (
                                        <li className="my-3" key={key}>
                                            {experiencia}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : (
                        <div></div>
                    )}

                    {user.idiomas.length !== 0 ? (
                        <div className="mt-4">
                            <h4>Idiomas</h4>
                            <div className="row">
                                {user.idiomas.map((idioma, key) => {
                                    return (
                                        <div
                                            key={key}
                                            className="col-auto border rounded-pill py-2 px-3 me-2"
                                        >
                                            {idioma}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}

                    {user.skills.length !== 0 ? (
                        <div className="mt-4">
                            <h4>Conocimientos y Skills</h4>
                            <div className="row">
                                {user.skills.map((habilidad, key) => {
                                    return (
                                        <div
                                            key={key}
                                            className="col-auto border rounded-pill py-2 px-3 me-2"
                                        >
                                            {habilidad}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ) : (
                        <div></div>
                    )}

                    <div className="row mt-5">
                        <div className="col-6">
                            <button
                                className="btn btn-primary w-100 p-2"
                                style={buttonStyleBlue}
                                onClick={(e) => respuestaAplicante(e, true)}
                            >
                                Elegir
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                className="btn btn-primary w-100 p-2"
                                style={buttonStyleRed}
                                onClick={(e) => respuestaAplicante(e, false)}
                            >
                                Descartar
                            </button>
                        </div>
                    </div>

                    <div
                        className="row text-white p-2 fs-5 d-flex justify-content-center mt-5"
                        style={buttonStyleLightBlue}
                    >
                        Estado: {estado}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Postulado;
