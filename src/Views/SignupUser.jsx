import { useState, useContext } from "react";
import { AuthContext } from "../utils/AuthContext";
import { postRequest } from "../utils/request";
import { useNavigate } from "react-router-dom";

function SignupUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [number, setNumber] = useState("");
    const [role, setRole] = useState("user");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleLastnameChange = (e) => {
        setLastname(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await postRequest("/auth/signup", {
            email,
            password,
            firstName: name,
            lastName: lastname,
            cellphone: number,
            role: role,
        });

        if (typeof user === "object" && user !== null) {
            login(user._id);
            if (role === "user") {
                return navigate("/fillProfile");
            }
            return navigate("/");
        }
    };

    return (
        <div
            className="px-4 py-5 px-md-5 text-center text-lg-start d-flex align-items-center"
            style={{ backgroundColor: "hsl(0, 0%, 96%)", height: "100vh" }}
        >
            <div className="container">
                <div className="row gx-lg-5 align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="my-5 display-3 fw-bold ls-tight">
                            Las mejores ofertas de empleo con <span></span>
                            <span className="text" style={{ color: "#1b4965" }}>
                                HireMeNow
                            </span>
                        </h1>
                    </div>

                    <div className="col-lg-6 mb-5" style={{marginTop:"10em"}}>
                        <div className="card">
                            <div className="card-body py-5 px-md-5">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label
                                                    className="form-label"
                                                    htmlFor="form3Example1"
                                                >
                                                    Nombres
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example1"
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        handleNameChange(e)
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <label
                                                    className="form-label"
                                                    htmlFor="form3Example2"
                                                >
                                                    Apellidos
                                                </label>
                                                <input
                                                    type="text"
                                                    id="form3Example2"
                                                    className="form-control"
                                                    onChange={(e) =>
                                                        handleLastnameChange(e)
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example3"
                                        >
                                            Celular
                                        </label>
                                        <input
                                            type="number"
                                            id="form3Example3"
                                            className="form-control"
                                            onChange={(e) =>
                                                handleNumberChange(e)
                                            }
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example3"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="form3Example3"
                                            className="form-control"
                                            onChange={(e) =>
                                                handleEmailChange(e)
                                            }
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example4"
                                        >
                                            Contraseña
                                        </label>
                                        <input
                                            type="password"
                                            id="form3Example4"
                                            className="form-control"
                                            onChange={(e) =>
                                                handlePasswordChange(e)
                                            }
                                        />
                                    </div>

                                    <div className="form-outline mb-4">
                                        <label htmlFor="role" className="me-3">
                                            Sign up as:
                                        </label>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                id="user"
                                                value="user"
                                                checked={
                                                    role === "user"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setRole("user")
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="user"
                                            >
                                                Usuario
                                            </label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                id="recruiter"
                                                value="recruiter"
                                                checked={
                                                    role !== "user"
                                                        ? true
                                                        : false
                                                }
                                                onChange={(e) =>
                                                    setRole("recruiter")
                                                }
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="recruiter"
                                            >
                                                Reclutador
                                            </label>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100 mb-4"
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        Sign up
                                    </button>

                                    <div>
                                        Ya tiene cuenta,{" "}
                                        <a
                                            className="text-primary"
                                            style={{ cursor: "pointer" }}
                                            href="/login"
                                        >
                                            inicie sesion aqui
                                        </a>
                                    </div>

                                    <hr />

                                    <div className="text-center">
                                        <p>o ingrese con:</p>
                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-facebook"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-google"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-twitter"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="bi bi-github"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupUser;
