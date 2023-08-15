import React from 'react';
import "./Sevrice.css";
import Image1 from "../../assets/java.png";
import Image2 from "../../assets/developpeur.png";
import Image3 from "../../assets/html.png";

const data = [
  {
      id: 1,
      image: Image1,
      title: "Développement de logiciels sur mesure",
      description: "Expert en développement Java, je crée des solutions logicielles uniques, adaptées à vos besoins. De la conception à l'application, je vous offre une technologie de pointe et des pratiques de développement de premier ordre. Obtenez une application sur mesure, puissante et flexible, conçue pour vous démarquer."
  },
  {
    id: 2,
    image: Image3,
    title: "Développement d'applications web/mobiles",
    description: "Je peux transformer vos idées en réalité. Spécialisé aussi dans le développement d'applications mobiles et web personnalisées, j'utilise les dernières technologies pour offrir une expérience utilisateur exceptionnelle et des fonctionnalités performantes. Faites de votre concept une réalité numérique captivante."

  },
  {
    id: 3,
    image: Image2,
    title: "UI et UX Design",
    description: "Créez des expériences utilisateur exceptionnelles avec un design d'interface moderne. Mon service combine une compréhension approfondie des utilisateurs avec une esthétique visuelle soignée. J'offre une interface intuitive et attrayante, garantissant des interactions agréables pour vos clients."
}
]


function Sevrice() {
  return (
    <section className='services container section' id='Service'>
      <h2 className="section_title">Services</h2>
      <div className="services_container grid">
        {data.map(({id,image,title,description})=>{
          return( <div className="service_card" key={id}>
            <img src={image} alt="" className="service_img" />
            <h3 className='service_title' >{title}</h3>
            <p className="service_desc">{description}</p>
          </div>);
        })}
      </div>
    </section>
    
  )
}

export default Sevrice