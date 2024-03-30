import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark text-white p-4">
            <div className="container">
                <div className="row">
                <div className="col-md-6">
                        <h5>Contactez-nous</h5>
                        <p>Adresse: Adresse_de _la_boutique</p>
                        <p>Téléphone:06-XX-XX-XX-XX</p>
                        <p>Email: maboutique@gmail.com</p>
                    </div>
                    <div className="col-md-6">
                        <h5>Suivez-nous sur les réseaux sociaux</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="lien_vers_facebook">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="lien_vers_twitter">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="lien_vers_instagram">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="lien_vers_youtube">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
