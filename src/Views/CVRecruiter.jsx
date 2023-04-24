import Postulado from "./Postulado";
import { useState, useEffect } from "react";

function CVRecruiter({ postulados, jobID }) {
    const [userView, setUserview] = useState(false);

    const goBack = function (e) {
        setUserview(false);
    };

    const getUser = async function (e, userID) {
        e.preventDefault();
        setUserview(postulados.find((user) => user._id === userID));
    };

    return (
        <div>
            {userView ? (
                <div>
                    <button
                        className="btn btn-light fs-5 border rounded-pill"
                        onClick={(e) => goBack(e)}
                    >
                        <i className="bi bi-arrow-left me-3"></i>
                        Volver a la lista de aplicantes
                    </button>

                    <div className="row mt-4">
                        <div className="col-11">
                            <Postulado user={userView} jobID={jobID}/>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>Usuarios aplicados para este empleo</h2>
                    <div className="mt-4">
                        {postulados.map((user, key) => {
                            return (
                                <div className="card mb-4" key={key} id="clickeable" onClick={e => getUser(e, user._id)}>
                                    <div className="row">
                                        <div className="col-2 d-flex align-items-center justify-content-center">
                                            <img
                                                src={
                                                    typeof user.image !==
                                                    "undefined"
                                                        ? user.image
                                                        : "https://www.kindpng.com/picc/m/421-4212275_transparent-default-avatar-png-avatar-img-png-download.png"
                                                }
                                                className="img-fluid w-50 h-75"
                                            />
                                        </div>
                                        <div className="col-10 d-flex flex-column justify-content-center mt-3">
                                            <h5>
                                                {user.firstName +
                                                    " " +
                                                    user.lastName}
                                            </h5>
                                            <div>
                                                <p>
                                                    {user.email} <br />
                                                    {user.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}

export default CVRecruiter;
