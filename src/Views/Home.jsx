function Home() {
    return (
        <div className="">
            <div className="card border-0 mx-0">
                <img
                    src="https://www.roberthalf.com/sites/default/files/2021-04/shutterstock_412257712-2.jpg"
                    className="card-img"
                    style={{ maxHeight :"70vh", marginLeft:"0rem"}}
                />
                <div className="row card-img-overlay">
                    <div className="col-3">
                        <img src="/logo.png" className="w-75 py-3" />
                    </div>
                    <div className="col-9 mt-3">
                        <div className="d-flex justify-content-end align-items-center">
                            <a href="" className="mx-4 text-dark">
                                Reclutadores ¡Publica ofertas gratis!{" "}
                            </a>
                            <button className="btn btn-primary rounded-pill">
                                Crear HdV
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
