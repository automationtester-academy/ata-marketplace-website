import React, { useState, useRef } from 'react';
import logoImg from '../images/ATA-logo.png';
import { useNavigate  } from 'react-router-dom';

import Icon from 'react-icons-kit';
import { basic_eye } from 'react-icons-kit/linea/basic_eye'
import { basic_eye_closed } from 'react-icons-kit/linea/basic_eye_closed'
import { arrows_exclamation } from 'react-icons-kit/linea/arrows_exclamation'
import { arrows_circle_check } from 'react-icons-kit/linea/arrows_circle_check'

import '../styles/Signup.css';

const Signup = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');


      

    const navigate = useNavigate();

    const handleSignup = () => {
        // Reset previous error messages
        setFirstNameError('');
        setLastNameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');

        // Validation logic
        let isValid = true;

        if (firstName.trim() === '') {
            setFirstNameError("Le prénom ne peut pas être vide.");
            isValid = false;
        }

        if (lastName.trim() === '') {
            setLastNameError("Le nom ne peut pas être vide.");
            isValid = false;
        }

        if (email.trim() === '') {
            setEmailError("L'email ne peut pas être vide.");
            isValid = false;
        }

        if (password.trim() === '') {
            setPasswordError("Le mot de passe ne peut pas être vide.");
            isValid = false;
        }

        if (confirmPassword.trim() === '') {
            setConfirmPasswordError("La confirmation du mot de passe ne peut pas être vide.");
            isValid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError("Les mots de passe ne correspondent pas.");
            isValid = false;
        }

        if (isValid) {
            // If all validations passed, perform signup process
            navigate('/home');
        }
    };

    const [type, setType] = useState('password');

    // validated states
    const [lowerValidated, setLowerValidated] = useState(false);
    const [upperValidated, setUpperValidated] = useState(false);
    const [numberValidated, setNumberValidated] = useState(false);
    const [specialValidated, setSpecialValidated] = useState(false);
    const [lengthValidated, setLengthValidated] = useState(false);

    const handleChange = (value) => {
        const lower = new RegExp('(?=.*[a-z])');
        const upper = new RegExp('(?=.*[A-Z])');
        const number = new RegExp('(?=.*[0-9])');
        const special = new RegExp('(?=.*[!@#\$%\^&\*])');
        const length = new RegExp('(?=.{8,})')
        if (lower.test(value)) {
            setLowerValidated(true);
        }
        else {
            setLowerValidated(false);
        }
        if (upper.test(value)) {
            setUpperValidated(true);
        }
        else {
            setUpperValidated(false);
        }
        if (number.test(value)) {
            setNumberValidated(true);
        }
        else {
            setNumberValidated(false);
        }
        if (special.test(value)) {
            setSpecialValidated(true);
        }
        else {
            setSpecialValidated(false);
        }
        if (length.test(value)) {
            setLengthValidated(true);
        }
        else {
            setLengthValidated(false);
        }
    }



    return (
        <div className="signup-containers">

            <div className="signup-container">

                <div className="logo-section">
                    <img src={logoImg} alt="Logo" data-test='logo-img' />
                </div>

                <form onSubmit={handleSignup} className="form-section">
                    <h2 className='signup-title' data-test='text-créer-compte'> Créer Votre Compte</h2>

                    <div className="input-container">
                        <label className="labels-signup" htmlFor="firstName" data-test='prenom'>Prénom *</label>
                        <input
                            className='inputs-signup'
                            type="text"
                            id="firstName"
                            value={firstName}
                            data-test="input-prenom"
                        
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <p className="error-message">{firstNameError}</p>
                    </div>

                    <div className="input-container">
                        <label className="labels-signup" htmlFor="lastName" data-test='nom'>Nom *</label>
                        <input
                            type="text"
                            className='inputs-signup'
                            id="lastName"
                            value={lastName}
                            data-test='input-nom'
                          
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <p className="error-message">{lastNameError}</p>
                    </div>

                    <div className="input-container">
                        <label className="labels-signup" htmlFor="email" data-test='email'>Email *</label>
                        <input
                            type="email"
                            className='inputs-signup'
                            id="email"
                            value={email}
                            data-test="input-email"
                            
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className="error-message">{emailError}</p>
                    </div>

                    <div className="input-container">
                        <div className="wrapper">

                            <div className="box">

                                <label 
                                className="labels-signup"
                                data-test="label-mdp"
                                >
                                Entrer votre Mot de passe *
                                </label>

                                <div className='input-with-icon-div form-control'>
                                    <input 
                                    className='inputs-signup' 
                                    type={type}
                                    data-test="input-mdp"
                                    onChange={(e) => {
                                        handleChange(e.target.value);
                                        setPassword(e.target.value)}} 
                                    />
                                    {type === "password" ? (
                                        <span data-test="eye-icon-closed" className='icon-span' onClick={() => setType("text")}>
                                            <Icon icon={basic_eye_closed} size={18} />
                                        </span>
                                    ) : (
                                        <span data-test="eye-icon-open" className='icon-span' onClick={() => setType("password")}>
                                            <Icon icon={basic_eye} size={18} />
                                        </span>
                                    )}
                                </div>

                                <p className="error-message">{passwordError}</p>

                                <main className='tracker-box'>
                                    <div className={lowerValidated ? 'validated' : 'not-validated'}>
                                        {lowerValidated ? (
                                            <span className='list-icon green'>
                                                <Icon icon={arrows_circle_check} />
                                            </span>
                                        ) : (
                                            <span className='list-icon'>
                                                <Icon icon={arrows_exclamation} />
                                            </span>
                                        )}
                                        At least one lowercase letter
                                    </div>
                                    <div className={upperValidated ? 'validated' : 'not-validated'}>
                                        {upperValidated ? (
                                            <span className='list-icon green'>
                                                <Icon icon={arrows_circle_check} />
                                            </span>
                                        ) : (
                                            <span className='list-icon'>
                                                <Icon icon={arrows_exclamation} />
                                            </span>
                                        )}
                                        At least one uppercase letter
                                    </div>
                                    <div className={numberValidated ? 'validated' : 'not-validated'}>
                                        {numberValidated ? (
                                            <span className='list-icon green'>
                                                <Icon icon={arrows_circle_check} />
                                            </span>
                                        ) : (
                                            <span className='list-icon'>
                                                <Icon icon={arrows_exclamation} />
                                            </span>
                                        )}
                                        At least one number
                                    </div>
                                    <div className={specialValidated ? 'validated' : 'not-validated'}>
                                        {specialValidated ? (
                                            <span className='list-icon green'>
                                                <Icon icon={arrows_circle_check} />
                                            </span>
                                        ) : (
                                            <span className='list-icon'>
                                                <Icon icon={arrows_exclamation} />
                                            </span>
                                        )}
                                        At least one special character
                                    </div>
                                    <div className={lengthValidated ? 'validated' : 'not-validated'}>
                                        {lengthValidated ? (
                                            <span className='list-icon green'>
                                                <Icon icon={arrows_circle_check} />
                                            </span>
                                        ) : (
                                            <span className='list-icon'>
                                                <Icon icon={arrows_exclamation} />
                                            </span>
                                        )}
                                        At least 8 characters
                                    </div>
                                </main>
                            </div>

                        </div>
                    </div>

                    <div className="input-container">
                        <label className="labels-signup" htmlFor="confirmPassword" data-test='confirm-mdp'>Confirmation du mot de passe *</label>
                        <input
                            type="password"
                            className='inputs-signup'
                            id="confirmPassword"
                            value={confirmPassword}
                            data-cu="input-mdp-confirmation"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <p className="error-message">{confirmPasswordError}</p>
                    </div>

                  
                        <button 
                        className="signup-button" 
                        onClick={handleSignup} 
                        data-test="submit-signup" >
                        S'inscrire
                        </button>
                   
                </form>

            </div>

        </div>
    );
};

export default Signup;
