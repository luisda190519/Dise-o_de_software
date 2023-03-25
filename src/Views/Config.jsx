import { user } from "../utils/user";

function Config() {
    return (
        <div className="mb-4">
            <div>
                <h5>Modificar e-mail y clave</h5>
                <div className="card p-3 mt-2">
                    <div className="text-body">
                        Estás registrado con el e-mail{" "}
                        <b style={{ color: "#1B4965" }}>{user.email}.</b> A esta
                        dirección te enviaremos las notificaciones sobre nuevas
                        ofertas y tus aplicaciones.
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h5>Modificar nivel de privacidad</h5>
                <div className="card p-3 mt-2">
                    <div className="text-body">
                        <div className="">
                            <input
                                type="radio"
                                name="1"
                                id="1"
                                className="form-check-inpu me-2"
                                checked
                            />
                            <label htmlFor="1" className="form-check-label">
                                Hoja de vida visible para las empresas
                            </label>
                        </div>

                        <div className="mt-3">
                            <input
                                type="radio"
                                name="2"
                                id="2"
                                className="form-check-inpu me-2"
                            />
                            <label htmlFor="2" className="form-check-label">
                                Hoja de vida no visible para las empresas
                            </label>
                            <div>
                                Las empresas no tienen acceso a tus datos y no
                                pueden contactar contigo. Solamente las empresas
                                a cuyos empleos aplicas, pueden visualizar tus
                                datos y contactarte.
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary w-25 mt-3"
                        style={{ backgroundColor: "#1B4965", border: "none" }}
                    >
                        Modificar mi privacidad
                    </button>
                </div>
            </div>

            <div className="mt-5">
                <h5>Eliminar cuenta</h5>
                <div className="card p-3 mt-2">
                    <div className="text-body">
                        <input
                            type="checkbox"
                            name="1"
                            id="1"
                            className="form-check-input"
                        />
                        <label htmlFor="1" className="ms-2">
                            Eliminar cuenta <b>{user.email}</b>
                        </label>
                        <div>
                        Esta opción hace que tu cuenta
                        <b>{user.email}</b> se elimine de manera
                        definitiva junto con toda tu actividad en Computrabajo y
                        todos los servicios contratados hasta la fecha.
                        </div>
                    </div>
                    <button
                        className="btn btn-primary w-25 mt-3"
                        style={{ backgroundColor: "#1B4965", border: "none" }}
                    >
                        Eliminar cuenta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Config;
