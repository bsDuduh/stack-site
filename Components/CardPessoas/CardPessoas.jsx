import React from 'react';
import "../../Style/CardPessoas/CardPessoas.css";
import DaviVarella from "../../src/assets/Davi_Varella.jpg";

export default function CardPessoas() {
    const teamMembers = [
        { name: "Gabriella Lima", role: "UI/UX Designer", img: DaviVarella },
        { name: "Endy Kaori", role: "Database Developer", img: DaviVarella },
        { name: "Ana Vitoria", role: "Documentation", img: DaviVarella },
        { name: "Carlos Tevez", role: "Web Developer", img: DaviVarella },
        { name: "Eduardo Barbosa", role: "Web Developer", img: DaviVarella },
        { name: "Miguel Freitas", role: "Mobile Developer", img: DaviVarella },
        { name: "Davi Varella", role: "Mobile Developer and Leader", img: DaviVarella },
    ];

    return (
        <div className="contain">

            <section id='NossaEquipe' className="nossa-equipe-container">
                <h3>Nossa <span className='equipe'>EQUIPE</span></h3>
                <span className='texto1'>
                    Lorem Ipsum is simply dummy text of the printing <br />
                    and typesetting industry.
                </span>
                <div className="conteudo">
                    <div className="grupo">
                        {teamMembers.map((member, index) => (
                            <div className="pessoas" key={index}>
                                <img src={member.img} alt={member.name} />
                                <div className="text">
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
