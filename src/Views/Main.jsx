import Jobcard from "../components/Jobcard";
import Jobannouncement from "../components/Jobannouncement";
import { useEffect, useState } from "react";

let card_test1 = {
    id: 1,
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

let card_test2 = {
    id: 2,
    title: "Desarollador/a Full Stack",
    location: "Bogotá, D.C.",
    company: "Agencia de empleo de Colsubsidio",
    description:
        "¡Buscamos a las personas adecuadas, personas que deseen innovar, crear, liderar,\
    transformar! Queremos atraerte, pero más allá de eso queremos contar con el mejor\
    talento, estamos comprometidos con el desarrollo profesional de cada uno de nuestros\
    colaboradores. Queremos que experimentes los desafíos, recompensas y oportunidades de\
    trabajar con la mejor empresa de telecomunicaciones del país ¿Te atreves?\
    ¿Qué necesitas para hacer parte de nuestro equipo?\
    Requisitos:\
    -Ingeniería de sistema y/o afines. Homologable con carrera de Ingenieria si cuenta con experiencia especifica de 3 años en desarrollo de Software.\
    -Experiencia de 3 años en API Management, manejo de PCML service RR, SSO, gobierno SOA y API de Claro, Lineamientos de desarrollo EAP, Microservicios y PLSQL, conocimiento y practica certificable en el manejo de las tecnologías relacionadas a estos servicios de negocio JAVA, Mongo, PLSQL, Node, Javascript, Openshif, 3Scale, Javascript, KAFKA, PHP, APIGee.\
    Funciones:\
    -Gestión de la comunicación entre múltiples servicios web -Experto en herramientas de integración de datos, extraer datos de diferentes fuentes como BD , servicio web, PCML -Desarrollo de microservicios: Java, SprintBoot, Node Js y afines a arquitectura contenerizada. -Desarrollar y monitorear proactivamente el cumplimiento de los requerimientos e ITOS de los proyectos -Apoyo al diseño de la solución y reingeniería de los servicios legados que interactúan con la capa media de claro.",
    requirements: [
        "Educación mínima: Bachillerato / Educación Media",
        "3 años de experiencia",
    ],
    rating: 3.9,
    tags: [
        "Contrato a término indefinido",
        "Tiempo Completo",
        "Presencial y remoto",
    ],
    publishTime: "45 dias",
    image: "https://ii.ct-stc.com/1/logos/empresas/2023/02/27//caja-colombiana-de-subsidio-familiar-colsubsidio-153724thumbnail.jpeg",
};

let card_test3 = {
    id: 3,
    title: "Asesor/a comercial con moto",
    location: "Medellín, Antioquia",
    company: "COMFAMA",
    description:
        "Empresa Inmobiliaria, requiere para su equipo de trabajo, técnico/a en el área comercial y ventas con moto y experiencia mínima de 1 año.en el sector comercial inmobiliario.\
Funciones:\
- Atender prospectos y clientes interesados en arrendar o comprar inmuebles en el área metropolitana de Medellín.\
- Cerrar negocios de arriendo o venta de inmuebles.\
- Excelente servicio al cliente, responsabilidad y ética.\
- Tener cualidades y aptitudes comerciales.\
- Consignar inmuebles para arrendar y vender.\
- Cumplimiento de metas.\
Requisitos:\
- Indispensable tener moto con papeles al día\
- Manejo de herramientas ofimáticas y cualidades comerciales.\
Salario: mínimo legal $1.160.000 + subsidio de transporte legal + auxilio de rodamiento $300.000 + comisiones por productividad.\
Tipo de contrato inicial, fijo inferior a un año.\
Horario: lunes a viernes de 8:00 a.m. a 6:00 p.m. y sábado de 8:00 a.m. A 3:00 p.m.\
",
    requirements: [
        "Educación mínima: Bachillerato / Educación Media",
        "1 año de experiencia",
    ],
    rating: 4.7,
    tags: [
        "$ 1.160.000,00 (Mensual)",
        "Contrato a término fijo",
        "Tiempo Completo",
    ],
    publishTime: "14 dias",
    image: "https://ii.ct-stc.com/1/logos/empresas/2023/02/06/comfama-C33915ABE219B74D130714thumbnail.png",
};

let anuncios = [
    card_test1,
    card_test2,
    card_test3,
    card_test1,
    card_test2,
    card_test3,
    card_test1,
];

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
                <div class="col-5">
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
                <div class="col-7">
                    <div className="">
                        <Jobcard job={jobFocus} />{" "}
                    </div>{" "}
                </div>
            </div>
        </div>
    );
}

export default Main;
