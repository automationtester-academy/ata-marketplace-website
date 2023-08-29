import React from 'react';
import backgroundImg from '../images/background.png';
import logoImg from '../images/ATA-logo.png';

import '../styles/Login.css';

const Login = () => {
    return (
        <div className="login-container">
            <div className="image-section">
                <img src={backgroundImg} alt="Background" />
            </div>
            <div className="login-section">
                <div className="logo">
                    <img src={logoImg} alt="Logo" />
                </div>
                <div className="form-container">
                  
                    <div className="input-container">
                        <label className="labels" htmlFor="username">Nom d'utilisateur</label>
                        <input className="inputs" type="text" id="username" />
                    </div>
                    <div className="input-container">
                        <label className="labels" htmlFor="password">Mot de passe</label>
                        <input className="inputs" type="password" id="password" />
                    </div>
                    <div className="checkbox-forgotten">
                        <input className="checkbox-input" type="checkbox" id="remember" />
                        <label htmlFor="remember">Mot de passe oublié ?</label>
                    </div>
                    <button className="login-button">Se Connecter</button>
                    
                    <p className="sign-up-link">
                         Vous n'avez pas de compte ? <a href="#">Inscrivez-vous !</a>
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Login;
