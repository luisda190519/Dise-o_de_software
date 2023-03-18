import Jobcard from "../components/Jobcard";
import Jobannouncement from "../components/Jobannouncement";
import { useEffect, useState } from "react";
import {anuncios} from "../utils/jsonJobs"

function Main() {
    const [announcements, setAnnouncements] = useState([]);
    const [jobFocus, setJobfocus] = useState(anuncios[0]);

    const getAnnouncements = function () {
        setAnnouncements(anuncios);
    };

    useEffect(() => {
        getAnnouncements();
    }, [announcements, jobFocus]);

    return (
        <div>
            <div className="row gx-0 justify-content-start">
                <div className="col-5">
                    <div className="card" id="scrolleable">
                        {anuncios.map((anuncio, key) => {
                            return (
                                <div
                                    key={key}
                                    style={{ borderBottom: "1px solid #ccc" }}
                                >
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
                    <div className="">
                        <Jobcard job={jobFocus} />{" "}
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

export default Main;
