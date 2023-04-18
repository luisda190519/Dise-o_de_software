import Jobcard from "../components/Jobcard";
import Jobannouncement from "../components/Jobannouncement";
import { useEffect, useState } from "react";
import { getRequest } from "../utils/request";
import { useParams } from "react-router-dom";

function Jobs() {
    const [announcements, setAnnouncements] = useState([]);
    const [jobFocus, setJobfocus] = useState({});
    const { title, company, location } = useParams();

    const getAnnouncements = async function () {
        const anuncios = await getRequest(
            "/jobs/" + title + "/" + company + "/" + location
        );
        setAnnouncements(anuncios);
        setJobfocus(anuncios[0]);
    };

    useEffect(() => {
        getAnnouncements();
    }, []);

    useEffect(() => {}, [announcements, jobFocus]);

    return (
        <div>
            {announcements.length > 0 ? (
                <div className="row gx-0 justify-content-start">
                    <div className="col-5">
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
