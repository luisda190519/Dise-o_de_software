function Jobcard({ job }) {
    return (
        <div className="mx-3">
            <div class="card text-start">
                <div class="card-body ms-3 mt-1">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <h4 className="card-title">{job.title}</h4>
                            <h5>{job.location}</h5>
                        </div>
                        <div className="col-md-4 d-flex flex-row-reverse">
                            <img
                                src={job.image}
                                class="img-fluid rounded-start"
                            />
                        </div>
                    </div>

                    <p>
                        {job.company}{" "}
                        <i
                            class="bi bi-star-fill"
                            style={{ color: "yellow" }}
                        ></i>{" "}
                        {job.rating}
                    </p>
                    <p>
                        <button className="btn btn-primary btn-lg rounded-pill me-2">
                            Postularme
                        </button>
                        <button className="btn btn-light btn-lg rounded-circle mx-2">
                            <i className="bi bi-heart"></i>
                        </button>
                        <button className="btn btn-light btn-lg rounded-circle mx-2">
                            <i class="bi bi-share"></i>
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

                <div class="card-body ms-3">
                    <div className="mb-3">
                        {job.tags.map((tag, key) => {
                            if (key == 0) {
                                return (
                                    <div className="my-2">
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark rounded-pill me-1"
                                            disabled
                                            style={{ color: "black" }}
                                        >
                                            {tag}
                                        </button>
                                    </div>
                                );
                            } else {
                                return (
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark rounded-pill mx-1"
                                        disabled
                                        style={{ color: "black" }}
                                    >
                                        {tag}
                                    </button>
                                );
                            }
                        })}
                    </div>
                    <p class="card-text">{job.description}</p>
                    <h5 class="card-title mb-3">Requerimientos</h5>
                    <ul>
                        {job.requirements.map((requirement, key) => {
                            return <li className="mb-2">{requirement}</li>;
                        })}
                    </ul>

                    <p className="fs-8 text-muted">Hace {job.publishTime}</p>
                </div>
            </div>
        </div>
    );
}

export default Jobcard;
