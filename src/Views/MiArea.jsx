import Ads from "../components/Ads";
import Jobannouncement from "../components/Jobannouncement";

function MiArea({ user }) {
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <div className="card text-center mb-4">
                        <div className="d-flex justify-content-center">
                            <img
                                src={user.image}
                                className=" rounded w-50 vh-50 mt-3"
                            />
                        </div>

                        <div className="card-body">
                            <h6>
                                {user.firstName} <span></span> {user.lastName}
                            </h6>
                            <div className="text-secondary">{user.role}</div>
                            <button className="btn btn-outline-primary mt-3 rounded-pill">
                                Mejora tu perfil profesional
                            </button>

                            <div className="text-start mt-5">
                                Resumen del estado de tus aplicaciones
                                <div className="row mt-3 mb-2">
                                    <div className="col-10">
                                        Aplicado en <b>1 oferta</b>
                                    </div>
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-10">
                                        En proceso en <b>1 oferta</b>
                                    </div>
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-10">
                                        HdV vista en <b>1 oferta</b>
                                    </div>
                                    <div className="col-1">
                                        <i className="bi bi-arrow-right"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="py-2">
                                <a href="">Ver todas mis aplicaciones </a>
                            </div>
                        </div>
                    </div>

                    <Ads />
                </div>
                <div className="col-6">
                    <div className="">
                        {user.jobApplications.length !== 0 ? (
                            user.jobApplications.map((anuncio, key) => {
                                return (
                                    <div key={key} className="mb-4">
                                        <Jobannouncement job={anuncio} />
                                    </div>
                                );
                            })
                        ) : (
                            <div
                                className="card px-3 py-3"
                                style={{
                                    backgroundColor: "#e9ebf6",
                                }}
                            >
                                No tienes aplicaciones registradas
                            </div>
                        )}
                    </div>
                </div>
                <div className="col-3">
                    <div
                        className="card"
                        style={{ border: "1px solid #5FA8D3" }}
                    >
                        <img
                            src="/logo.png"
                            className="img-fluid w-75 h-50 py-3 px-3"
                        />
                        <div className="card-body">
                            <div>
                                <b>
                                    Mejora la visibilidad de tu HdV con la
                                    Cuenta Premium
                                </b>{" "}
                                Descubre sus beneficios exclusivos
                            </div>
                            <div className="mt-2">
                                <button
                                    className="btn btn-primary w-100 rounded-pill"
                                    style={{
                                        backgroundColor: "#5FA8D3",
                                        border: "none",
                                    }}
                                >
                                    Activa cuenta premium
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MiArea;
