import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ici vous pouvez gérer la soumission du formulaire, par exemple, envoyer les données à un serveur
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Téléphone:', phone);
    console.log('Objet:', subject);
    console.log('Message:', message);
    // Réinitialiser les champs après la soumission si nécessaire
    setName('');
    setEmail('');
    setPhone('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
    <div className="container m-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header bg-warning">Contactez-nous</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom</label>
                  <input type="text" placeholder='nom...' className="form-control" id="name" value={name} onChange={handleNameChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" placeholder='e-mail...' className="form-control" id="email" value={email} onChange={handleEmailChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Téléphone</label>
                  <input type="tel" placeholder='06-xx-xx-xx-xx' className="form-control" id="phone" value={phone} onChange={handlePhoneChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Objet</label>
                  <input type="text" placeholder='Sujet...' className="form-control" id="subject" value={subject} onChange={handleSubjectChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" placeholder='votre message...' id="message" rows="5" value={message} onChange={handleMessageChange}></textarea>
                </div>
                <button type="submit" className="btn btn-outline-warning">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style={{width:"100%"}}>
    <Footer/>
    </div>
    
    </>
  );
}

export default ContactForm;
