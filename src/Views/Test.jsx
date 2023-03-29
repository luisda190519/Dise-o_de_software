function Test() {
    return (
        <div className="container mb-3">
            <div className="card border-0">
                <div className="row">
                    <div className="col-8 py-4 px-5">
                        <h5
                            style={{
                                color: "#5FA8D3",
                            }}
                        >
                            Cuenta Premium
                        </h5>
                        <h4>Pon a prueba tu nivel de idiomas</h4>
                        <p>
                            Mejora la calidad de tu HdV demostrando tus
                            conocimientos con los test de idiomas disponibles.
                        </p>

                        <button
                            className="btn btn-primary btn-lg w-50 rounded-pill mt-3"
                            style={{
                                backgroundColor: "#5FA8D3",
                                border: "none",
                            }}
                        >
                            Activa tu Cuenta Premium
                        </button>
                    </div>
                    <div className="col-4">
                        <img
                            className="img-fluid"
                            src="https://fotografias.flooxernow.com/clipping/cmsimages02/2019/12/23/FA7C1DC1-B48C-479D-9DA4-DC082E9F579D/98.jpg?crop=1300,731,x0,y13&width=1900&height=1069&optimize=high&format=webply"
                        />
                    </div>
                </div>
            </div>

            <h3 className="text-center mt-4">
                Más beneficios destacados de la{" "}
                <b style={{ color: "#5FA8D3" }}>Cuenta Premium</b>{" "}
            </h3>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-2">
                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://candidato.co.computrabajo.com/c/img/premium/visibilidad_cv.jpg"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Mayor visibilidad de tu HdV
                            </h5>
                            <p className="card-text">
                                Incrementa tus posibilidades de ser visto con la
                                insignia de Cuenta Premium y aparece en las
                                primeras posiciones cuando los reclutadores
                                buscan candidatos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://candidato.co.computrabajo.com/c/img/premium/DISC.jpg"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Evaluación DISC de Thomas
                            </h5>
                            <p className="card-text">
                                Accede a una de las evaluaciones de
                                comportamiento con mayor reputación a nivel
                                mundial. Descubre tus fortalezas y analiza que
                                cargos son adecuados para ti.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://candidato.co.computrabajo.com/c/img/premium/empresa.jpg"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Descubre qué empresas ven tu perfil
                            </h5>
                            <p className="card-text">
                                Conoce qué empresas están interesadas en tu
                                perfil y a través de qué palabras te han
                                encontrado.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://candidato.co.computrabajo.com/c/img/premium/reapply.jpg"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Vuelve a aplicar a las ofertas
                            </h5>
                            <p className="card-text">
                                Puedes refrescar tu aplicación y volver a
                                aplicar a aquesllas vacantes donde las empresas
                                aún no han revisado tu HdV o donde has eliminado
                                tu candidatura.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://candidato.co.computrabajo.com/c/img/premium/carta_presentacion.jpg"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                Carta y Vídeo de Presentación
                            </h5>
                            <p className="card-text">
                                Llama la atención del reclutador con una carta o
                                vídeo de presentación y destaca entre los otros
                                candidatos.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <img
                            src="https://candidato.co.computrabajo.com/c/img/premium/telf_verificado.jpg"
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Teléfono verificado</h5>
                            <p className="card-text">
                                Haz que te llamen más proporcionando un teléfono
                                validado a los reclutadores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Test;
