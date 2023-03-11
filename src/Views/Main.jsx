import Jobcard from "../components/Jobcard";
import Jobannouncement from "../components/Jobannouncement";

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
    return (
        <div class="text-center h-100">
            <div class="row gx-0 justify-content-end">
                <div class="col-5">
                    <div className="card" id="announcements" style={{maxHeight: "600px", overflowY: "scroll"}}>
                        {anuncios.map((anuncio, key) => {
                            return (
                                <Jobannouncement
                                    title={anuncio.title}
                                    company={anuncio.company}
                                    location={anuncio.location}
                                    publishTime={anuncio.publishTime}
                                    image={anuncio.image}
                                    rating={anuncio.rating}
                                />
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
