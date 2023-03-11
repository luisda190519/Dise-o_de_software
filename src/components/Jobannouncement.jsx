function Jobannouncement({
    title,
    company,
    location,
    publishTime,
    image,
    rating,
    active = false,
}) {
    return (
        <div className="">
            <div class="card border-light text-start" >
                <div class="card-body">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <h4 className="card-title">{title}</h4>
                            <h5>{location}</h5>
                        </div>
                        <div className="col-md-4 d-flex flex-row-reverse">
                            <img src={image} class="img-fluid rounded-start" />
                        </div>
                    </div>

                    <p>
                        {company}{" "}
                        <i
                            class="bi bi-star-fill"
                            style={{ color: "yellow" }}
                        ></i>{" "}
                        {rating}
                    </p>
                    <p className="fs-8 text-muted">Hace {publishTime}</p>
                </div>
            </div>  
        </div>
    );
}

export default Jobannouncement;
