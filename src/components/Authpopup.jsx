import { useNavigate } from "react-router-dom";

function Authpopup({ setAuthpopup, setBlurScreen }) {
    const navigate = useNavigate();

    const deleteMe = function (e) {
        setAuthpopup(false);
        setBlurScreen({})
    };

    const buttonStyle1 = { backgroundColor: "#62B6CB", border: "none" };
    const buttonStyle2 = { backgroundColor: "#1b4965", border: "none" };

    return (
        <div
            className="card p-5 text-center"
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                margin: "auto",
                width: "fit-content",
                height: "fit-content",
                zIndex:999
              }}
        >
            <div
                style={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    fontSize: "1.2em",
                    cursor: "pointer",
                }}
            >
                <i className="bi bi-x-lg" onClick={(e) => deleteMe(e)}></i>
            </div>
            <p className="fs-4">Tu próximo trabajo está aquí</p>
            <p className="fs-5">Ingresa y postúlate a miles de empleos</p>
            <button className="btn btn-primary mt-2" style={buttonStyle1} onClick={e => navigate("/loginUser")}>
                Iniciar sesion
            </button>
            <div className="d-flex align-items-center justify-content-center">
                <hr className="flex-grow-1 mr-3" />
                <div className="font-weight-bold">o</div>
                <hr className="flex-grow-1 ml-3" />
            </div>

            <button className="btn btn-primary mt-2" style={buttonStyle2} onClick={e => navigate("/signupUser")}>
                Registrarse
            </button>
        </div>
    );
}

export default Authpopup;
