import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from '../images/ATA-logo.png';
import '../styles/Login.css';

import mockUser from './MockDatas/mockDataUser';

const Login = () => {
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const [username, setUsername] = useState(''); // Define username state
    const [password, setPassword] = useState(''); // Define password state

    const handleLogin = () => {
        setUsernameError('');
        setPasswordError('');
        setGeneralError('');
      
        // Find the user in the JSON data
        const user = mockUser.users.find((user) => user.username === username);
      
        if (!user) {
          setUsernameError('User not found');
        } else if (user.password === password) {
          // Successful login
          navigate('/home'); // Redirect to the dashboard or any other page
        } else {
          setPasswordError('Incorrect password');
        }
      };
      
    
    
    

    return (
        <div className="login-container">
            <div className="login-section">

                <div className="login-actions">
                    <div className="logo">
                        <img src={logoImg} alt="Logo"  data-cy="logo-img" />
                    </div>

                    <div className="form-container">
                        <div className="input-container">
                            <label className="labels" htmlFor="username" data-cy="nom-utilisateur">Nom d'utilisateur</label>
                            <input
                                className="inputs"
                                type="text"
                                id="username"
                                data-cy="username-login"
                                onChange={() => setUsernameError('')}
                            />
                            <p className="error-message" data-cy="username-error">{usernameError}</p>
                        </div>
                        <div className="input-container">
                            <label className="labels" htmlFor="password" data-cy="Mot-de-passe">Mot de passe</label>
                            <input
                                className="inputs"
                                type="password"
                                id="password"
                                data-cy="password-login"
                                onChange={() => setPasswordError('')}
                            />
                            <p className="error-message" data-cy="password-error">{passwordError}</p>
                        </div>
                        <p className="error-message general-error">{generalError}</p>



                        <div className="checkbox-forgotten">
                            <input
                                className="checkbox-input"
                                type="checkbox"
                                id="remember"
                                data-cy="remember-login" />
                            <label htmlFor="remember" className='label-mdp-oublié' data-cy='mdp-oublié'>Mot de passe oublié ?</label>
                        </div>

                        <button
                            className="login-button"
                            onClick={handleLogin}
                            data-cy="submit-login"
                        >
                            Se Connecter
                        </button>
                        <p className="sign-up-link" data-cy='text-Inscrivez-vous'>
                            Vous n'avez pas de compte ? 
                            <Link to="/signup"><a href="#" data-cy='link-Inscrivez-vous'>&nbsp;Inscrivez-vous !</a></Link>
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




