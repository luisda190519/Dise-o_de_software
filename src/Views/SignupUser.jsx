import { useState } from "react";

function SignupUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [number, setNumber] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic using email and password state
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

                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="card">
                            <div className="card-body py-5 px-md-5">
                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="form3Example1"
                                                    className="form-control"
                                                    onClick={(e) =>
                                                        handleNameChange(e)
                                                    }
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="form3Example1"
                                                >
                                                    Nombres
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-4">
                                            <div className="form-outline">
                                                <input
                                                    type="text"
                                                    id="form3Example2"
                                                    className="form-control"
                                                    onClick={(e) =>
                                                        handleLastnameChange(e)
                                                    }
                                                />
                                                <label
                                                    className="form-label"
                                                    htmlFor="form3Example2"
                                                >
                                                    Apellidos
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="number"
                                            id="form3Example3"
                                            className="form-control"
                                            onClick={(e) =>
                                                handleNumberChange(e)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example3"
                                        >
                                            Celular
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="email"
                                            id="form3Example3"
                                            className="form-control"
                                            onClick={(e) =>
                                                handleEmailChange(e)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example3"
                                        >
                                            Email
                                        </label>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input
                                            type="password"
                                            id="form3Example4"
                                            className="form-control"
                                            onClick={(e) =>
                                                handlePasswordChange(e)
                                            }
                                        />
                                        <label
                                            className="form-label"
                                            htmlFor="form3Example4"
                                        >
                                            Contraseña
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mb-4"
                                    >
                                        Sign up
                                    </button>

                                    <div className="text-center">
                                        <p>o ingrese con:</p>
                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="fab fa-facebook-f"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="fab fa-google"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="fab fa-twitter"></i>
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-link btn-floating mx-1"
                                        >
                                            <i className="fab fa-github"></i>
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
