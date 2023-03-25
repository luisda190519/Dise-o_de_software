import { user } from "../utils/user";
import Ads from "../components/Ads";

function CV() {
    return (
        <div>
            <div className="row justify-content-start">
                <div className="col-8">
                    <div className="card px-5 py-5 mb-4">
                        <div className="row">
                            <div className="row">
                                <div className="col-4">
                                    <img
                                        src={user.image}
                                        className="img-fluid rounded w-100 h-75"
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

                            <div className="mt-2">
                                <h4>{user.estado}</h4>
                                <p>{user.description}</p>

                                <div
                                    className="card px-3 py-3"
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
                    <Ads/>
                </div>
            </div>
        </div>
    );
}

export default CV;
