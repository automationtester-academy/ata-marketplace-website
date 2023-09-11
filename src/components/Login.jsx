import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import logoImg from '../images/ATA-logo.png';
import '../styles/Login.css';
import UserData from '../components/userData.json';

const Login = () => {
    const [formData, setFormData] = useState({
      username: '',
      password: '',
    });
  
    const [errorGeneral, setErrorGeneral] = useState('');
    const [errorUsername, setErrorUsername] = useState(''); 
    const [errorPassword, setErrorPassword] = useState(''); 

    const data = UserData;
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const navigate = useNavigate();
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      setErrorGeneral("");
      setErrorPassword("");
      setErrorUsername("");
      console.log('Username:', formData.username);
      console.log('Password:', formData.password);
      console.log(data);
      let authorized = false;
      data.forEach((user) => {
        if (user.username === formData.username && user.password === formData.password) {
          authorized = true;
        }
      });
  
      if (authorized) {
        navigate('/home');
      } else if (formData.username === ""){
        setErrorUsername("Veuillez renseigner votre nom d'utilisateur");
      }else if (formData.password === ""){
        setErrorPassword("Veuillez renseigner votre mot de passe");
      }else {
        setErrorGeneral("Veuillez vérifier votre nom d'utilisateur ou mot de passe");
      }
    };

    return (
        <div className="login-container">
            <div className="login-section">

                <div className="login-actions">
                    <div className="logo">
                        <img src={logoImg} alt="Logo" data-testid="logo-img" />
                    </div>

                    <form onSubmit={handleSubmit} className="form-container">
                        <div className="input-container">
                            <label 
                            className="labels" 
                            htmlFor="username" 
                            data-testid="nom-utilisateur"
                            >
                            Nom d'utilisateur
                            </label>
                            <input
                                className="inputs"
                                type="text"
                                id="username"
                                ref={usernameRef}
                                value={formData.username}
                                data-testid="username-login"
                                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            />

                    {errorUsername && <p className="error-message">{errorUsername}</p>}


                        </div>
                        <div className="input-container">
                            <label className="labels" htmlFor="password" data-testid="Mot-de-passe"
                            >Mot de passe</label>
                            <input
                                className="inputs"
                                data-testid="password-login"
                                type="password"
                                id="password"
                                ref={passwordRef}
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />

                        {errorPassword && <p className="error-message">{errorPassword}</p>}

                        {errorGeneral && <p className="error-message">{errorGeneral}</p>}

                          
                        </div>


                        <div className="psswd-forgotten">
                            <Link 
                            htmlFor="mdp-oublié" 
                            className='label-mdp-oublié' 
                            data-testid='mdp-oublié'
                            >
                            Mot de passe oublié ?
                            </Link>
                        </div>

                        <div className="checkbox-remember">
                            <input
                                className="checkbox-input"
                                type="checkbox"
                                id="remember"
                                data-testid="remember-login" 
                            />

                            <label 
                            htmlFor="remember" 
                            className='label-mdp-oublié' 
                            data-testid='mdp-oublié'
                            >
                            Se souvenir de moi
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="login-button"
                            data-testid="submit-login"
                        >
                            Se Connecter
                        </button>
                        
                        <p className="sign-up-link" data-testid='text-Inscrivez-vous'>
                            Vous n'avez pas de compte ?
                            <Link to="/signup" data-test='link-Inscrivez-vous'>
                                    &nbsp;Inscrivez-vous !
                            </Link>
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