import { useState, useEffect } from "react";

function Jobannouncement({ job, setJobfocus, jobFocus }) {
    const [active, setActive] = useState(false);

    const seeJobAnnouncement = function (e) {
        e.preventDefault();
        setJobfocus(job);
    };

    useEffect(() => {
        if(job.id == jobFocus.id){
            return setActive(true)
        }
        return setActive(false)
    }, [job, jobFocus]);

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
                <div className="card-body">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <h4 className="card-title">{job.title}</h4>
                            <h5>{job.location}</h5>
                        </div>
                        <div className="col-md-4 d-flex flex-row-reverse">
                            <img
                                src={job.image}
                                className="img-fluid rounded-start w-75 h-75"
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
                    <p className="fs-8 text-muted">Hace {job.publishTime}</p>
                </div>
            </div>
        </div>
    );
}

export default Jobannouncement;
