import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vous pouvez ajouter ici la logique de validation et de soumission du formulaire
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
    console.log('Se souvenir de moi:', rememberMe);
  };

  return (
        <div className="col">
          <div className="card">
            <div className="card-header bg-warning">Login</div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Nom"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={handleRememberMeChange}
                  />
                  <label htmlFor="rememberMe">Se souvenir de moi</label>
                </div>
                <button type="submit" className="btn btn-outline-warning btn-block">Connexion</button>
              </form>
            </div>
          </div>
        </div>
   
  );
}

export default LoginForm;
