function JobExpanded({ job }) {
    return (
        <div className="row">
            <div className="col-8">
                <div className="card">
                    <h4 className="ms-4 mt-4">{job.title}</h4>

                    <div className="card-body">
                        <div className="mb-3">
                            {job.tags.map((tag, key) => {
                                return (
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark rounded-pill me-3"
                                        disabled
                                        style={{ color: "black" }}
                                        key={key}
                                    >
                                        {tag}
                                    </button>
                                );
                            })}
                        </div>
                        <p className="card-text" style={{ whiteSpace: "pre-wrap" }}>{job.description}</p>
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

                        <p className="fs-8 text-muted">
                            Hace {job.publishTime}
                        </p>
                    </div>
                </div>
            </div>

            <div className="col-4">
                <div className="card py-3">
                    <div className="text-center">
                        <img src={job.image} className="img-fluid w-50" />
                    </div>

                    <div className="card-body">
                        <h5>{job.title}</h5>
                        <p>{job.location}</p>
                        <div>
                            <p>
                                <button
                                    className="btn btn-light rounded-pill me-2 text-white w-75"
                                    style={{ backgroundColor: "#1B4965" }}
                                >
                                    Postularme
                                </button>
                                <button className="btn btn-light rounded-circle w-0">
                                    <i className="bi bi-heart"></i>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobExpanded;
