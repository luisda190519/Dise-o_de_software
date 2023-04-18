import { useState, useEffect, useContext } from "react";
import { postRequest } from "../utils/request";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";

function JobForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [company, setCompany] = useState("");
    const [rating, setRating] = useState("");
    const [publishTime, setPublishtime] = useState("");
    const [image, setImage] = useState("");
    const [requirements, setRequirements] = useState([]);
    const [tags, setTags] = useState([]);
    const navigate = useNavigate();
    const { userAuthenticated, logout } = useContext(AuthContext);
    const buttonStyle = { backgroundColor: "#1b4965", border: "none" };

    const handleTitleChange = function (e) {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = function (e) {
        setDescription(e.target.value);
    };

    const handleUbicacionChange = function (e) {
        setUbicacion(e.target.value);
    };

    const handleCompanyChange = function (e) {
        setCompany(e.target.value);
    };

    const handleRatingChange = function (e) {
        setRating(e.target.value);
    };

    const handlePublishtimeChange = function (e) {
        setPublishtime(e.target.value);
    };

    const handleImageChange = function (e) {
        setImage(e.target.value);
    };

    const addTags = function (e) {
        e.preventDefault();
        const tag = e.target.form3Example4.value;
        if (tag !== undefined && tag !== "") {
            const updatedExperiencias = [...tags, tag];
            setTags(updatedExperiencias);
            e.target.form3Example4.value = "";
        }
    };

    const getTags = function () {
        return tags.map((tag, key) => {
            return (
                <li className="my-3" key={key}>
                    {tag}
                </li>
            );
        });
    };

    const addRequirements = function (e) {
        e.preventDefault();
        const r = e.target.form3Example4.value;
        if (r !== undefined && r !== "") {
            const updatedEstudios = [...requirements, r];
            setRequirements(updatedEstudios);
            e.target.form3Example4.value = "";
        }
    };

    const getRequirements = function () {
        return requirements.map((requirement, key) => {
            return (
                <li className="my-3" key={key}>
                    {requirement}
                </li>
            );
        });
    };
    
    const finishFill = async function (e) {        
        const job = await postRequest("/jobs/postJob", {
            title: title,
            location: ubicacion,
            description: description,
            tags:tags,
            requirements:requirements,
            rating,
            image,
            publishTime,
            company,
            owner:userAuthenticated._id
        });
        return navigate("/");
    };

    useEffect(()=>{
        if(!userAuthenticated.isRecruiter){
            navigate("/jobs")
        }
    },[])

    useEffect(() => {}, [
        title,
        ubicacion,
        tags,
        requirements,
        rating,
        publishTime,
        image,
        company,
        description
    ]);

    return (
        <div className="container">
            <div className="card p-5 m-5">
                <h5 className="text-center mb-2">Publicar oferta de empleo</h5>
                <hr />
                <div className="form-outline mb-4 mt-2">
                    <label className="form-label" htmlFor="form3Example4">
                        Titulo de empleo
                    </label>
                    <input
                        type="text"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handleTitleChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Ubicacion
                    </label>
                    <input
                        type="text"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handleUbicacionChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Empresa o compañia
                    </label>
                    <input
                        type="text"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handleCompanyChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Descripcion del empleo
                    </label>
                    <textarea
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handleDescriptionChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Rating o valoracion
                    </label>
                    <textarea
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handleRatingChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Tiempo de publicacion de empleo
                    </label>
                    <textarea
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handlePublishtimeChange(e)}
                    />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form3Example4">
                        Imagen o logo de empresa
                    </label>
                    <textarea
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => handleImageChange(e)}
                    />
                </div>

                <div>
                    <div className="form-outline mb-4 mt-3">
                        <form onSubmit={(e) => addTags(e)}>
                            <label
                                className="form-label"
                                htmlFor="form3Example4"
                            >
                                Tags o caracteristicas del empleo
                            </label>
                            <ul>{getTags()}</ul>
                            <input
                                type="text"
                                id="form3Example4"
                                className="form-control"
                            />
                            <button
                                className="btn btn-primary mt-3"
                                style={buttonStyle}
                            >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>

                <div>
                    <div className="form-outline mb-4 mt-3">
                        <form onSubmit={(e) => addRequirements(e)}>
                            <label
                                className="form-label"
                                htmlFor="form3Example4"
                            >
                                Estudios
                            </label>
                            <ul>{getRequirements()}</ul>
                            <input
                                type="text"
                                id="form3Example4"
                                className="form-control"
                            />
                            <button
                                className="btn btn-primary mt-3"
                                style={buttonStyle}
                            >
                                Añadir
                            </button>
                        </form>
                    </div>
                </div>

                <button
                    className="btn btn-primary mt-3 w-100"
                    style={buttonStyle}
                    onClick={(e) => finishFill(e)}
                >
                    Completar
                </button>
            </div>
        </div>
    );
}

export default JobForm;
