import Jobcard from "../components/Jobcard";
import Jobannouncement from "../components/Jobannouncement";
import { useEffect, useState } from "react";
import { getRequest } from "../utils/request";
import { useParams } from "react-router-dom";

function Jobs() {
    const [announcements, setAnnouncements] = useState([]);
    const [jobFocus, setJobfocus] = useState({});
    const { title, company, place } = useParams();
    const [findedQuery, setFindedquery] = useState(false);

    const getAnnouncements = async function () {
        let anuncios = await getRequest(
            "/jobs" +
                (title.length !== 0 ? "/title/" + title : "") +
                (location.length !== 0 ? "/place/" + place : "")
        );

        if (anuncios.length > 0) {
            setAnnouncements(anuncios);
            console.log(announcements);
            setFindedquery(true);
            return setJobfocus(anuncios[0]);
        }

        //anuncios = await getRequest("/jobs/randomJobs");
        //setAnnouncements(anuncios);
        //setFindedquery(false);
        //return setJobfocus(anuncios[0]);
    };

    useEffect(() => {
        getAnnouncements();
    }, []);

    console.log(findedQuery)

    useEffect(() => {
        getAnnouncements();
    }, [title, company, place]);

    return (
        <div>
            {announcements.length > 0 ? (
                <div className="row gx-0 justify-content-start">
                    <div className="col-5">
                        {!findedQuery ? <div>Hola</div> : <div></div>}
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
                    <div className="col-7">
                        <Jobcard job={jobFocus} />
                    </div>
                </div>
            ) : (
                <div>Cargando...</div>
            )}
        </div>
    );
}

export default Jobs;
