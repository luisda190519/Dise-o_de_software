import { useState, useEffect } from "react";

function Jobannouncement({
    job,
    active = false,
    setJobfocus
}) {

    const seeJobAnnouncement = function(e){
        e.preventDefault();
        setJobfocus(job)
    }

    return (
        <div
            className="job-announcement"
            onClick={(e) => seeJobAnnouncement(e)}
        >
            <div
                className={`card border-light text-start ${
                    active ? "bg-custom" : ""
                }`}
            >
                <div class="card-body">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <h4 className="card-title">{job.title}</h4>
                            <h5>{job.location}</h5>
                        </div>
                        <div className="col-md-4 d-flex flex-row-reverse">
                            <img src={job.image} class="img-fluid rounded-start" />
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
                    <p className="fs-8 text-muted">Hace {job.publishTime}</p>
                </div>
            </div>
        </div>
    );
}

export default Jobannouncement;
