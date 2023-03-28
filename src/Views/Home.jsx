function Home({ utils: { changeScreen, buttonActive } }) {
  const searchJob = function (e) {
    changeScreen(1);
  };
  return (
    <div className="background-image">
      <div className="">
        <div className="mx-0">
          <div className="row">
            <div className="col-3">
              <h1 className="fw-bold" style={{ color: "#FFFFFF" }}>
                Career<span style={{ color: "#06BEE1" }}>Hub</span>
              </h1>
            </div>
            <div className="col-9 mt-3">
              <div className="d-flex justify-content-end align-items-center">
                <a href="" className="mx-4 text-white">
                  Home{" "}
                </a>
                <a href="" className="mx-4 text-white">
                  Acerca de nosotros{" "}
                </a>
                <a href="" className="mx-4 text-white">
                  Blog{" "}
                </a>
                <a href="" className="mx-4 text-white">
                  Contacto{" "}
                </a>
                <button
                  className="btn btn-primary rounded-pill"
                  style={{
                    background:
                      "linear-gradient(180deg, #06BEE1 0%, rgba(6, 190, 225, 0) 100%)",
                    borderRadius: "10px",
                    border: "none",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "18px",
                    textAlign: "center",
                    lineHeight: "60px",
                  }}
                >
                  Publica un trabajo
                </button>

                <button
                  className="btn btn-primary  rounded-pill"
                  style={{
                    background:
                      "linear-gradient(180deg, #1EFFC9 0%, rgba(30, 255, 201, 0) 100%)",
                    borderRadius: "10px",
                    border: "none",
                    fontWeight: "bold",
                    color: "#fff",
                    fontSize: "18px",
                    textAlign: "center",
                    lineHeight: "60px",
                  }}
                >
                  Busca un trabajo
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#FFFFFF",
            padding: "2.5px",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px #888888",
            maxWidth: "800px",
            margin: "0 auto"
          }}
        >
          <div className="d-flex justify-content-center mt-5">
            <div class="input-group mb-3 me-3" style={{ maxWidth: "800px" }}>
              <span
                class="input-group-text"
                id="inputGroup-sizing-default"
              ></span>
              <input
                type="text"
                class="form-control me-3"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Habilidades, compañía o empresa"
              />
              <span
                class="input-group-text"
                id="inputGroup-sizing-default"
              ></span>
              <input
                type="text"
                class="form-control me-3"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                placeholder="Ubicación"
              />
              <button
                className="btn btn-primary"
                onClick={(e) => searchJob(e)}
                style={{
                  backgroundColor: "#06BEE1",
                  border: "none",
                  color: "#fff",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "10px",
                }}
              >
                Encuentra el tuyo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
