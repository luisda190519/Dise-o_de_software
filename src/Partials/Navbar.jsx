import DropdownButtons from "../components/DropdownButtons";

function Navbar() {
    return (
        <div>
            <div class="container my-3">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img
                            src="https://cp.ct-stc.com/web/20230306.03/c/img/logos/logoct.svg?v=3.48"
                            alt=""
                            class="navbar-buttons mx-3"
                            id="clickeable"
                        />
                    </div>
                    <div
                        class="col-9 d-flex justify-content-start align-items-center"
                        id="button-group"
                    >
                        <div class="input-group mb-3 w-75">
                            <span class="input-group-text">
                                <i
                                    class="bi bi-briefcase"
                                    id="navbar-buttons"
                                ></i>
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Cargo o categoria"
                                aria-label="Username"
                            />
                            <span class="input-group-text">
                                <i
                                    class="bi bi-geo-alt"
                                    id="navbar-buttons"
                                ></i>
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Lugar"
                                aria-label="Server"
                            />
                            <span class="input-group-text">
                                <i class="bi bi-search" id="navbar-buttons"></i>
                            </span>
                        </div>

                        <div className="mx-5 d-flex align-items-end">
                            <a
                                className="text-dark "
                                href="https://www.youtube.com/shorts/2AKxs2n3CUk"
                            >
                                <b>¡Publica ofertas gratis!</b>
                            </a>
                            <button className="btn btn-white" id="hdv">
                                Crear HdV
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container my-4">
                <p>
                    <DropdownButtons
                        title={"Fecha"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />

                    <DropdownButtons
                        title={"Departamento"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />

                    <DropdownButtons
                        title={"Ciudad"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />

                    <DropdownButtons
                        title={"Experiencia"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />

                    <DropdownButtons
                        title={"Salario"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />

                    <DropdownButtons
                        title={"Jornada"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />

                    <DropdownButtons
                        title={"Contrato"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />

                    <DropdownButtons
                        title={"Discapacidad"}
                        filters={[
                            { title: "Urgente", value: 45.245 },
                            { title: "Hoy", value: 45.245 },
                            { title: "Últimos 3 días", value: 45.245 },
                            { title: "Última semana", value: 45.245 },
                            { title: "Ultimo mes", value: 45.245 },
                        ]}
                    />
                </p>
            </div>
        </div>
    );
}

export default Navbar;
