function Home({ changeScreen, buttonActive }) {
    const searchJob = function (e) {
        changeScreen(1);
    };
    return (
        <div className="">
            <div className="mx-0">
                <div className="row">
                    <div className="col-3">
                        <img src="/logo.png" className="w-75 py-3" />
                    </div>
                    <div className="col-9 mt-3">
                        <div className="d-flex justify-content-end align-items-center">
                            <a href="" className="mx-4 text-dark">
                                Reclutadores ¡Publica ofertas gratis!{" "}
                            </a>
                            <button
                                className="btn btn-primary  rounded-pill"
                                style={{
                                    backgroundColor: "#1B4965",
                                    border: "none",
                                }}
                            >
                                Diseña tu HdV
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-5">
                <div
                    class="input-group mb-3 me-3"
                    style={{ maxWidth: "800px" }}
                >
                    <span
                        class="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <b>Qué</b>
                    </span>
                    <input
                        type="text"
                        class="form-control me-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="título, palabras clave o empresa"
                    />
                    <span
                        class="input-group-text"
                        id="inputGroup-sizing-default"
                    >
                        <b>Donde</b>
                    </span>
                    <input
                        type="text"
                        class="form-control me-3"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        placeholder="ciudad o departamento"
                    />
                    <button
                        className="btn btn-primary rounded-pill"
                        onClick={(e) => searchJob(e)}
                        style={{
                            backgroundColor: "#1B4965",
                            border: "none",
                        }}
                    >
                        Buscar Empleos
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
