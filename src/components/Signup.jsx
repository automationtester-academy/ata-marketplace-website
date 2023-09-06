import React, { useState } from 'react';
import logoImg from '../images/ATA-logo.png';

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
            console.log('Sign up logic here');
        }
    };


    return (
        <div className="signup-containers">
        <div className="signup-container">
            <div className="logo-section">
                <img src={logoImg} alt="Logo" data-cy='logo-img'/>
            </div>
            <div className="form-section">
                <h2 className='signup-title' data-cy='text-créer-compte'> Créer Votre Compte</h2>
                <div className="input-container">
                    <label className="labels-signup" htmlFor="firstName" data-cy='prenom'>Prénom *</label>
                    <input
                        className='inputs-signup'
                        type="text"
                        id="firstName"
                        value={firstName}
                        data-cy="input-prenom" 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <p className="error-message">{firstNameError}</p>
                </div>
                <div className="input-container">
                    <label className="labels-signup" htmlFor="lastName" data-cy='nom'>Nom *</label>
                    <input
                        type="text"
                        className='inputs-signup'
                        id="lastName"
                        value={lastName}
                        data-cy='input-nom'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <p className="error-message">{lastNameError}</p>
                </div>
                <div className="input-container">
                    <label className="labels-signup" htmlFor="email" data-cy='email'>Email *</label>
                    <input
                        type="email"
                        className='inputs-signup'
                        id="email"
                        value={email}
                        data-cy="input-email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="error-message">{emailError}</p>
                </div>
                <div className="input-container">
                    <label className="labels-signup" htmlFor="password" data-cy='mot-de-passe'>Mot de passe *</label>
                    <input
                        type="password"
                        className='inputs-signup'
                        id="password"
                        value={password}
                        data-cy="input-password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="error-message">{passwordError}</p>
                </div>
                <div className="input-container">
                    <label className="labels-signup" htmlFor="confirmPassword" data-cy='confirm-mdp'>Confirmation du mot de passe *</label>
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
                <button className="signup-button" onClick={handleSignup} data-cy="submit-signup" >S'inscrire</button>
            </div>
        </div>
        </div>
    );
};

export default Signup;
