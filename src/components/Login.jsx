import React, { useState } from 'react';
import backgroundImg from '../images/background.png';
import logoImg from '../images/ATA-logo.png';

import '../styles/Login.css';

const Login = () => {
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');

    const handleLogin = () => {
        setUsernameError('');
        setPasswordError('');
        setGeneralError('');

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username.trim() === '' && password.trim() === '') {
            setGeneralError('Veuillez remplir les champs obligatoires');
        } else {
            // Display specific errors for individual fields
            if (username.trim() === '') {
                setUsernameError('Le nom d\'utilisateur ne peut pas être vide');
            }

            if (password.trim() === '') {
                setPasswordError('Le mot de passe ne peut pas être vide');
            }
        }
    };


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
                        <input
                            className="inputs"
                            type="text"
                            id="username"
                            data-e2e="username-login"
                            onChange={() => setUsernameError('')}
                        />
                        <p className="error-message" data-e2e="username-error">{usernameError}</p>
                    </div>
                    <div className="input-container">
                        <label className="labels" htmlFor="password">Mot de passe</label>
                        <input
                            className="inputs"
                            type="password"
                            id="password"
                            data-e2e="password-login"
                            onChange={() => setPasswordError('')}
                        />
                        <p className="error-message" data-e2e="password-error">{passwordError}</p>
                    </div>
                    <p className="error-message general-error">{generalError}</p>



                    <div className="checkbox-forgotten">
                        <input className="checkbox-input" type="checkbox" id="remember" data-e2e="remember-login" />
                        <label htmlFor="remember" className='label-mdp-oublié'>Mot de passe oublié ?</label>
                    </div>

                    <button className="login-button" onClick={handleLogin} data-e2e="submit-login">Se Connecter</button>                   
                     <p className="sign-up-link">
                        Vous n'avez pas de compte ? <a href="#">Inscrivez-vous !</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
