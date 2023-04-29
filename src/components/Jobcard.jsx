import { postRequest, getRequest } from "../utils/request";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

function Jobcard({ job, user }) {
    const [like, setLike] = useState(false);
    const [postulado, setPostulado] = useState(false);
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const postularEmpleo = async function (e) {
        e.preventDefault();
        if (auth) {
            const message = await postRequest(
                "/jobs/postular/" + job._id + "/user/" + user._id
            );
            return setPostulado(message);
        }
        return navigate("/login");
    };

    const likeEmpleo = async function (e) {
        e.preventDefault();
        if (auth) {
            const message = await postRequest(
                "/jobs/like/" + job._id + "/user/" + user._id
            );
            return setLike(message);
        }
        return navigate("/login");
    };

    const isJobIdInJobApplications = () => {
        if (!user || !user.jobApplications) {
            return false;
        }
        return user.jobApplications.some(
            (application) => application.job.toString() === job._id
        );
    };

    const isJobIdInJobLike = () => {
        if (!user || !user.jobLikes) {
            return false;
        }
        return user.jobLikes.includes(job._id);
    };

    const updateUser = async function () {
        if (user) {
            user = await getRequest("/auth/" + user._id);
            setPostulado(isJobIdInJobApplications());
            setAuth(true);
            login(user)
            return setLike(isJobIdInJobLike());
        }
        return setAuth(false);
    };

    useEffect(() => {
        updateUser();
    }, [job, like]);

    return (
        <div className="mx-3" id="scrolleable">
            <div className="card text-start">
                <div className="card-body ms-3 mt-1">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <h4 className="card-title">{job.title}</h4>
                            <h5>{job.location}</h5>
                        </div>
                        <div className="col-md-4 d-flex flex-row-reverse">
                            <img
                                src={job.image}
                                className="img-fluid rounded-start h-50"
                            />
                        </div>
                    </div>

                    <p>
                        {job.company}{" "}
                        <i
                            className="bi bi-star-fill"
                            style={{ color: "yellow" }}
                        ></i>{" "}
                        {job.rating}
                    </p>
                    <p>
                        <button
                            className="btn btn-light btn-lg rounded-pill me-2 text-white"
                            style={
                                postulado
                                    ? {
                                          backgroundColor: "#62B6CB",
                                          border: "none",
                                      }
                                    : {
                                          backgroundColor: "#1B4965",
                                          border: "none",
                                      }
                            }
                            onClick={(e) => postularEmpleo(e)}
                        >
                            {postulado ? "Empleo postulado" : "Postularme"}
                        </button>
                        <button
                            className="btn btn-light btn-lg rounded-circle mx-2"
                            onClick={(e) => likeEmpleo(e)}
                            style={
                                like
                                    ? {
                                          backgroundColor: "#e63946",
                                          color: "white",
                                      }
                                    : {}
                            }
                        >
                            <i className="bi bi-heart"></i>
                        </button>
                        <button className="btn btn-light btn-lg rounded-circle mx-2">
                            <i className="bi bi-share"></i>
                        </button>
                    </p>
                </div>
                <div className="d-flex justify-content-center">
                    <hr
                        style={{
                            width: "90%",
                            marginTop: "-7px",
                            marginBottom: "-7px",
                        }}
                    />
                </div>

                <div className="card-body ms-3">
                    <div className="mb-3">
                        {job.tags.map((tag, key) => {
                            return (
                                <button
                                    type="button"
                                    className="btn btn-outline-dark rounded-pill me-3 mb-2"
                                    disabled
                                    style={{ color: "black" }}
                                    key={key}
                                >
                                    {tag}
                                </button>
                            );
                        })}
                    </div>
                    <p className="" style={{ whiteSpace: "pre-wrap" }}>
                        {job.description}
                    </p>
                    <h5 className="card-title mb-3">Requerimientos</h5>
                    <ul>
                        {job.requirements.map((requirement, key) => {
                            return (
                                <li key={key} className="mb-2">
                                    {requirement}
                                </li>
                            );
                        })}
                    </ul>

                    <p className="fs-8 text-muted">Hace {job.publishTime}</p>
                </div>
            </div>
        </div>
    );
}

export default Jobcard;
