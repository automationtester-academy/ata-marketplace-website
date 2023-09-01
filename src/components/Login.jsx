import React, { useState } from 'react';
import logoImg from '../images/ATA-logo.png';

import '../styles/Login.css';
import { Link } from 'react-router-dom';

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
            <div className="login-section">

                    <div className="login-actions">
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
                            Vous n'avez pas de compte ? <Link to="/signup"><a href="#">&nbsp;Inscrivez-vous !</a></Link>
                        </p>
                    </div>
                    </div>

                    <div className="user-actions">
                        <hr className='hrs'></hr>
                    <div className='users-auth'>
                        <div className="all-usernames">
                            <p className='user-title'>
                                Les noms d'utilisateur acceptés sont les suivants :
                            </p>
                            <p>known_user</p>
                            <p>login_user</p>
                            <p>geek_user</p>
                            <p>enter_user</p>
                        </div>

                        <div className="all-passwords">
                            <p className='user-title'>Mot de passe pour tous les utilisateurs :</p>
                            <p>cypress-geek</p>
                        </div>
                    </div>
                    </div>

               
            </div>
        </div>
    );
};

export default Login;
