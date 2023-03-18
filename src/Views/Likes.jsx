import { anuncios } from "../utils/jsonJobs";

function Likes() {
    return (
        <div className="my-3">
            <h2>Mis favoritos</h2>
            <div className="row gx-0 justify-content-start mt-4">
                <div className="col-8">
                    {anuncios.map((anuncio, key) => {
                        return (
                            <div
                                className="card me-4 mb-4 pt-3 px-4"
                                key={key}
                                id="applications"
                            >
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <h5>{anuncio.title}</h5>
                                        <p>
                                            {anuncio.company}{" "}
                                            <i
                                                className="bi bi-star-fill"
                                                style={{ color: "yellow" }}
                                            ></i>{" "}
                                            {anuncio.rating}
                                            <p>{anuncio.location}</p>
                                        </p>
                                    </div>

                                    <div className="col-md-4 d-flex justify-content-end">
                                        <div className="my-3">
                                            <button
                                                className="btn btn-primary btn-lg rounded-pill me-4"
                                                style={{
                                                    backgroundColor: "#0D3878",
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
                            class="img-fluid"
                            alt=""
                        />
                        <div className="card-body">
                            Guarda con un ❤ las ofertas de empleo que más te
                            interesan y postúlate cuando lo desees
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <button
                                className="btn btn-primary w-75 rounded-pill"
                                style={{
                                    backgroundColor: "#0D3878",
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
    );
}

export default Likes;
