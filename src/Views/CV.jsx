import Ads from "../components/Ads";

function CV({ user }) {
    const completaTuPerfil = function () {
        return (
            <div>
                <p>
                    Completa tu perfil{" "}
                    <a
                        href="/fillProfile"
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                    >
                        aqui
                    </a>
                </p>
            </div>
        );
    };

    return (
        <div>
            <div className="row justify-content-start">
                <div className="col-8">
                    <div className="card px-5 py-5 mb-4">
                        <div className="row">
                            <div className="row">
                                <div className="col-4">
                                    <img
                                        src="https://img.freepik.com/fotos-premium/concepto-personas-felicidad-adolescente-sonriente-sobre-fondo-blanco_380164-63917.jpg"
                                        className="img-fluid rounded w-75 h-75"
                                    />
                                </div>

                                <div className="col-8">
                                    <h4>
                                        {user.firstName} <span></span>{" "}
                                        {user.lastName}
                                    </h4>
                                    <p>{user.location}</p>
                                    <p>
                                        <i className="bi bi-envelope me-2"></i>
                                        {user.email}{" "}
                                        <i className="bi bi-telephone me-5 ms-3">
                                            +57 {user.cellphone}
                                        </i>
                                    </p>
                                </div>
                            </div>

                            <div className="mt-2">
                                <h4>{user.role}</h4>
                                <p>
                                    {typeof user.description !== 'undefined' ? (
                                        user.description
                                    ) : (
                                        <div
                                            className="card px-3 py-3"
                                            style={{
                                                backgroundColor: "#e9ebf6",
                                            }}
                                        >
                                            Una descripción bien detallada y
                                            extensa de tu perfil profesional te
                                            ayudará a destacar entre otros
                                            candidatos.
                                        </div>
                                    )}
                                </p>
                            </div>

                            <div
                                className="mt-5"
                                style={{ whiteSpace: "pre-wrap" }}
                            >
                                <h4>Mis experiencias profesionales</h4>
                                <ul>
                                    {user.experience .length !== 0 ? (
                                        user.experience.map(
                                            (experiencia, key) => {
                                                return (
                                                    <li
                                                        className="my-3"
                                                        key={key}
                                                    >
                                                        {experiencia}
                                                    </li>
                                                );
                                            }
                                        )
                                    ) : (
                                        <div>{completaTuPerfil()}</div>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h4>Mis estudios</h4>
                                <ul>
                                    {user.estudios .length !== 0 ? (
                                        user.estudios.map((estudio, key) => {
                                            return (
                                                <li className="my-3" key={key}>
                                                    {estudio}
                                                </li>
                                            );
                                        })
                                    ) : (
                                        <div>{completaTuPerfil()}</div>
                                    )}
                                </ul>
                            </div>

                            <div className="mt-4">
                                <h4>Idiomas</h4>
                                <div className="row">
                                    {user.idiomas .length !== 0 ? (
                                        user.idiomas.map((idioma, key) => {
                                            return (
                                                <div
                                                    key={key}
                                                    className="col-auto border me-4 mt-2 rounded-pill ps-4 pt-1"
                                                >
                                                    {idioma}
                                                    <button className="btn">
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div>{completaTuPerfil()}</div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-4">
                                <h4>Conocimientos y habilidades</h4>
                                <div className="row">
                                    {user.skills .length !== 0 ? (
                                        user.skills.map((habilidad, key) => {
                                            return (
                                                <div
                                                    key={key}
                                                    className="col-auto border me-4 mt-2 rounded-pill ps-4 pt-1"
                                                >
                                                    {habilidad}
                                                    <button className="btn">
                                                        <i className="bi bi-x-lg"></i>
                                                    </button>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div>{completaTuPerfil()}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 ms-5">
                    <Ads />
                </div>
            </div>
        </div>
    );
}

export default CV;
