import React from 'react';
import "./Contact.css"

function Contact() {
  return (
    <section className="contact container section" id='Contact'>
      <h2 className="section_title">Contactez Moi</h2>

      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Prêt à collaborer sur des projets passionnants et à relever de nouveaux défis dans le monde du développement web et logiciel !</h3>
        </div>
        <form action="" className="contact_form">
          <div className="contactformgroupe">
            <div className="contactformdiv">
              <input type="text" className="contactforminput" placeholder='Votre Prenom'/>
            </div>

            <div className="contactformdiv">
              <input type="email" className="contactforminput" placeholder='Votre Email'/>
            </div>
          </div>
            <div className="contactformdiv">
              <input type="text" className="contactforminput" placeholder="L'Objet"/>
            </div>
             
            <div className="contactformdiv area">
              <textarea name="" id="" cols="30" rows="10" 
                        className="contactforminput"
                        placeholder='Ecrivez votre message ici'></textarea>
            </div>

            
          
          <button type="submit" className='btn'>Envoyer le message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact