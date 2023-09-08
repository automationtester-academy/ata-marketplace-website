import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/ATA-logo.png';
import '../styles/Login.css';


const Login = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [data, setData] = useState([]);

    // Refs for accessing input elements
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    // Load data from JSON file using useEffect
    useEffect(() => {
        // Load data from the JSON file
        fetch('./userData.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData);
                console.log('Data from JSON:', jsonData);
            })
            .catch((error) => {
                console.error('Error loading data:', error);
            });
    }, []);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Username:', formData.username);
        console.log('Password:', formData.password);
      
        // You can perform further actions like sending the data to an API or validating here.
    };



    return (
        <div className="login-container">
            <div className="login-section">

                <div className="login-actions">
                    <div className="logo">
                        <img src={logoImg} alt="Logo" data-test="logo-img" />
                    </div>

                    <form onSubmit={handleSubmit} className="form-container">
                        <div className="input-container">
                            <label className="labels" htmlFor="username" data-test="nom-utilisateur">Nom d'utilisateur</label>
                            <input
                                className="inputs"
                                type="text"
                                id="username"
                                ref={usernameRef}
                                value={formData.username}
                                data-test="username-login"
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />
                        </div>
                        <div className="input-container">
                            <label className="labels" htmlFor="password" data-test="Mot-de-passe">Mot de passe</label>
                            <input
                                className="inputs"
                                data-test="password-login"
                                type="password"
                                id="password"
                                ref={passwordRef}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}

                            />
                        </div>


                        <div className="checkbox-forgotten">
                            <input
                                className="checkbox-input"
                                type="checkbox"
                                id="remember"
                                data-test="remember-login" />
                            <label htmlFor="remember" className='label-mdp-oublié' data-test='mdp-oublié'>Mot de passe oublié ?</label>
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                            data-test="submit-login"
                        >
                            Se Connecter
                        </button>
                        <p className="sign-up-link" data-test='text-Inscrivez-vous'>
                            Vous n'avez pas de compte ?
                            <Link to="/signup"><a href="#" data-test='link-Inscrivez-vous'>&nbsp;Inscrivez-vous !</a></Link>
                        </p>
                    </form>
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