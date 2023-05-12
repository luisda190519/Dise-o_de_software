import Jobcard from "../components/Jobcard";
import Jobannouncement from "../components/Jobannouncement";
import { useContext, useEffect, useState } from "react";
import { getRequest } from "../utils/request";
import { useParams } from "react-router-dom";

function Jobs({ user }) {
    const [announcements, setAnnouncements] = useState([]);
    const [jobFocus, setJobfocus] = useState({});
    const { title = "", company = "", place = "" } = useParams();
    const [findedQuery, setFindedquery] = useState(false);
    const [usuario, setUsuario] = useState(user || false);
    
    const getAnnouncements = async function () {
        let anuncios = await getRequest(
            "/jobs" +
                (title.length !== 0 ? "/title/" + title : "") +
                (place.length !== 0 ? "/place/" + place : "")
        );

        if (anuncios.length > 0) {
            setAnnouncements(anuncios);
            setFindedquery(true);
            if (title.length === 0 && place.length === 0) {
                setFindedquery(false);
            }
            return setJobfocus(anuncios[0]);
        }

        anuncios = await getRequest("/jobs/randomJobs");
        setAnnouncements(anuncios);
        setFindedquery(false);
        return setJobfocus(anuncios[0]);
    };

    useEffect(() => {
        getAnnouncements();
    }, []);

    useEffect(() => {
        getAnnouncements();
    }, [title, company, place]);

    useEffect(() => {}, [jobFocus]);

    return (
        <div>
            {announcements.length > 0 ? (
                <div className="row gx-0 justify-content-start">
                    <div className="col-5">
                        {!findedQuery ? (
                            <div className="card text-secondary mb-3 p-3">
                                <div className="ms-3">
                                    <h4 className="card-title my-0">
                                        <i className="bi bi-exclamation-diamond me-2"></i>
                                        Empleos no encontrados
                                    </h4>
                                    <p className="">
                                        No se encontro el empleo,{" "}
                                        {title !== "" ? '"' + title + '"' : ""}
                                        <span> </span> Revise si escribio bien
                                        el titulo del empleo a buscar
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                        <div className="card" id="scrolleable">
                            {announcements.map((anuncio, key) => {
                                return (
                                    <div key={key}>
                                        <Jobannouncement
                                            job={anuncio}
                                            jobFocus={jobFocus}
                                            setJobfocus={setJobfocus}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="col-7" id="scrolleable">
                        <Jobcard job={jobFocus} user={usuario} />
                    </div>
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
}

export default Jobs;
