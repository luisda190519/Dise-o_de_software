import Jobcard from "../components/Jobcard";
import Jobannouncement from "../components/Jobannouncement";
import { useEffect, useState } from "react";

let card_test = {
    title: "Guarda de Seguridad",
    location: "Bogota",
    company: "MANPOWER PROFESSIONAL LTDA",
    description:
        "Importante multinacional de Seguridad requiere vincular Guardas de Seguridad con experiencia reciente mínima 3 años, no estar reportado en datacredito, ser bachiller tener acta y diploma, tener libreta militar de primera o segunda, tener curso de vigilancia y excelente actitud. Para laboral inicialmente en el área de disponibilidad. Salario mínimo legal vigente + todas las prestaciones de ley + Contrato directo con la compañía a término indefinido",
    requirements: [
        "Educación mínima: Bachillerato / Educación Media",
        "3 años de experiencia",
    ],
    rating: 4.4,
    tags: [
        "$ 1.000.000,00 (Mensual)",
        "Contrato a término indefinido",
        "Tiempo Completo",
        "Buen ambiente",
    ],
    publishTime: "18 minutos",
    image: "https://ii.ct-stc.com/1/logos/empresas/2020/03/26//manpower141207thumbnail.png",
};

let anuncios = [
    card_test,
    card_test,
    card_test,
    card_test,
    card_test,
    card_test,
    card_test,
];

function Main() {
    const [announcements, setAnnouncements] = useState([]);

    const getAnnouncements = function () {
        setAnnouncements(anuncios);
    };

    useEffect(() => {
        getAnnouncements();
    }, [announcements]);

    return (
        <div class="text-left h-100">
            <div class="container my-3">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img
                            src="https://cp.ct-stc.com/web/20230306.03/c/img/logos/logoct.svg?v=3.48"
                            alt=""
                            class="navbar-buttons mx-3"
                        />
                    </div>
                    <div
                        class="col-9 d-flex justify-content-start align-items-center"
                        id="button-group"
                    >
                        <div class="input-group mb-3 w-75">
                            <span class="input-group-text">
                                <i
                                    class="bi bi-briefcase"
                                    id="navbar-buttons"
                                ></i>
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Cargo o categoria"
                                aria-label="Username"
                            />
                            <span class="input-group-text">
                                <i
                                    class="bi bi-geo-alt"
                                    id="navbar-buttons"
                                ></i>
                            </span>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Lugar"
                                aria-label="Server"
                            />
                            <span class="input-group-text">
                                <i class="bi bi-search" id="navbar-buttons"></i>
                            </span>
                        </div>

                        <div className="mx-5 d-flex align-items-end">
                            <a className="text-dark " href="https://www.youtube.com/shorts/2AKxs2n3CUk">¡Publica ofertas gratis!</a>
                            <button className="btn btn-white" id="hdv">Crear HdV</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row gx-0 justify-content-end">
                <div class="col-5">
                    <div className="card" id="scrolleable">
                        {anuncios.map((anuncio, key) => {
                            return (
                                <div
                                    key={key}
                                    style={{ borderBottom: "1px solid #ccc" }}
                                >
                                    <Jobannouncement
                                        title={anuncio.title}
                                        company={anuncio.company}
                                        location={anuncio.location}
                                        publishTime={anuncio.publishTime}
                                        image={anuncio.image}
                                        rating={anuncio.rating}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div class="col-6">
                    <div className="">
                        <Jobcard job={card_test} />{" "}
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

export default Main;
