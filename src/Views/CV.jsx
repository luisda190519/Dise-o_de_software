import { user } from "../utils/user";

function CV() {
    return (
        <div>
            <div className="row gx-0 justify-content-start">
                <div className="col-8">
                    <div className="card px-5 py-5 mb-4">
                        <div className="row">
                            <div className="row">
                                <div className="col-4">
                                    <img
                                        src={user.image}
                                        className="img-fluid rounded-pill"
                                    />
                                </div>

                                <div className="col-8">
                                    <h4>{user.name}</h4>
                                    <p>{user.city}</p>
                                    <p>
                                        <i className="bi bi-envelope me-2"></i>
                                        {user.email}{" "}
                                        <i className="bi bi-telephone me-5 ms-3">
                                            +57 {user.cellphone}
                                        </i>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5">
                                <h4>{user.estado}</h4>
                                <p>{user.description}</p>

                                <div
                                    className="container card px-3 py-3"
                                    style={{ backgroundColor: "#e9ebf6" }}
                                >
                                    Una descripción bien detallada y extensa de
                                    tu perfil profesional te ayudará a destacar
                                    entre otros candidatos.
                                </div>
                            </div>

                            <div className="mt-5">
                                <h4>Mis experiencias profesionales</h4>
                                <ul>
                                    {user.experiencia.map(
                                        (experiencia, key) => {
                                            return (
                                                <li className="my-3" key={key}>
                                                    {experiencia}
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h4>Mis estudios</h4>
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

                            <div className="mt-4">
                                <h4>Idiomas</h4>
                                <div className="row">
                                    {user.idiomas.map((idioma, key) => {
                                        return (
                                            <div className="col-auto border me-4 mt-2 rounded-pill px-2 py-1">
                                                {idioma}
                                                <button className="btn">
                                                    <i className="bi bi-x-lg"></i>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4>Conocimientos y habilidades</h4>
                                <div className="row">
                                    {user.habilidadesBlandas.map(
                                        (habilidad, key) => {
                                            return (
                                                <div className="col-auto border me-4 mt-2 rounded-pill px-2 py-1">
                                                    {habilidad}
                                                    <button className="btn">
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ms-5">
                    <div className="card">
                        <div className="card-body">
                            <p className="fs-4">Plantillas de CV</p>
                            Tienes disponibles varias plantillas para poder
                            descargar o imprimir tu hoja de vida de manera
                            cómoda y fácil.
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <button
                                className="btn btn-primary btn-lg w-75 rounded-pill"
                                style={{
                                    backgroundColor: "#0D3878",
                                    border: "none",
                                }}
                            >
                                Diseña tu HdV
                            </button>
                        </div>
                    </div>

                    <div
                        className="card mt-4"
                        style={{ border: "1px solid #59BAA8" }}
                    >
                        <div className="card-body">
                            <span style={{ color: "#59BAA8" }}>Premium</span>
                            <p className="fs-4">Cartas de presentación</p>
                            Crea o edita tus cartas de presentación y adjúntalas
                            a las ofertas en las que te postulas.{" "}
                            <b> Las empresas valoran muy positivamente</b>{" "}
                            aquellas aplicaciones a ofertas que incluyen una
                            carta de presentación.
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <button
                                className="btn btn-primary btn-lg w-75 rounded-pill"
                                style={{
                                    backgroundColor: "#59BAA8",
                                    border: "none",
                                }}
                            >
                                Crear Carta
                            </button>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-body">
                            <p className="fs-4">
                                <i className="bi bi-lightbulb me-2"></i>Cómo
                                mejorar mi HdV
                            </p>
                            <div>
                                <b>Sube tu HdV</b>
                                <p className="text-secondary">
                                    No adjuntar ninguna HdV en Word/PDF a mis
                                    postulaciones
                                </p>
                            </div>
                            <div>
                                <b>Test de Competencias</b>
                                <p className="text-secondary">
                                    Realiza el test gratis, descubre tus puntos
                                    fuertes y destaca entre el resto de
                                    candidatos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CV;
