function Ads() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <p className="fs-4">Plantillas de CV</p>
                    Tienes disponibles varias plantillas para poder descargar o
                    imprimir tu hoja de vida de manera cómoda y fácil.
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <button
                        className="btn btn-primary btn-lg w-75 rounded-pill"
                        style={{
                            backgroundColor: "#1B4965",
                            border: "none",
                        }}
                    >
                        Diseña tu HdV
                    </button>
                </div>
            </div>

            <div className="card mt-4" style={{ border: "1px solid #5FA8D3" }}>
                <div className="card-body">
                    <span style={{ color: "#5FA8D3" }}>Premium</span>
                    <p className="fs-4">Cartas de presentación</p>
                    Crea o edita tus cartas de presentación y adjúntalas a las
                    ofertas en las que te postulas.{" "}
                    <b> Las empresas valoran muy positivamente</b> aquellas
                    aplicaciones a ofertas que incluyen una carta de
                    presentación.
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <button
                        className="btn btn-primary btn-lg w-75 rounded-pill"
                        style={{
                            backgroundColor: "#5FA8D3",
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
                        <i className="bi bi-lightbulb me-2"></i>Cómo mejorar mi
                        HdV
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
                            Realiza el test gratis, descubre tus puntos fuertes
                            y destaca entre el resto de candidatos
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ads;
