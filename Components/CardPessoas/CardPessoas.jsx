import "../../Style/CardPessoas/CardPessoas.css";
import DaviVarella from "../../src/assets/Davi_Varella.jpg";
import Tevez from "../../src/assets/Tevez.jpeg"
import Gab from "../../src/assets/gab.jpeg"
import Miguel from "../../src/assets/miguel.jpeg"
import Eduardo from "../../src/assets/eduardo.jpeg"
import Endy from "../../src/assets/endy.jpeg"
import Ana from "../../src/assets/ana.jpeg"



export default function CardPessoas() {
    const teamMembers = [
        { name: "Gabriella", role: "UI/UX Designer", img: Gab },
        { name: "Endy Kaori", role: "Database Developer", img: Endy },
        { name: "Ana Vitoria", role: "Documentation", img: Ana },
        { name: "Carlos Tevez", role: "Web Developer", img: Tevez },
        { name: "Eduardo", role: "Web Developer", img: Eduardo },
        { name: "Miguel", role: "Mobile Developer", img: Miguel },
        { name: "Davi", role: "Mobile Developer and Leader", img: DaviVarella },
    ];

    return (
        <div className="contain">

            <section id='NossaEquipe' className="nossa-equipe-container">
                <h3>Nossa <span className='equipe'>EQUIPE</span></h3>
                <span className='texto1'>
                A nossa equipe é composta por
                </span>
                <div className="conteudo">
                    <div className="grupo">
                        {teamMembers.map((member, index) => (
                            <div className="pessoas" key={index}>
                                <img src={member.img} alt={member.name} />
                                <div className="grupoText">
                                    <h2>{member.name}</h2>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
