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

function Main() {
    return (
        <div class="container text-center">
            <div class="row">
                <div class="col-6 col-md-4">.cfdsfsdol-6 .col-md-4</div>
                <div class="col-md-8">
                    {" "}
                    <Jobcard job={card_test} />{" "}
                </div>
            </div>
        </div>
    );
}

export default Main;
