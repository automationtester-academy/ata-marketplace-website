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
        <div className="signup-container">
            <div className="image-section">
                <img src={logoImg} alt="Logo" />
            </div>
            <div className="form-section">
                <h2 className='signup-title'> Créer Votre Compte</h2>
                <div className="input-container">
                    <label className="labels" htmlFor="firstName">Prénom *</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        data-e2e="firstName" 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <p className="error-message">{firstNameError}</p>
                </div>
                <div className="input-container">
                    <label className="labels" htmlFor="lastName">Nom *</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <p className="error-message">{lastNameError}</p>
                </div>
                <div className="input-container">
                    <label className="labels" htmlFor="email">Email *</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        data-e2e="email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <p className="error-message">{emailError}</p>
                </div>
                <div className="input-container">
                    <label className="labels" htmlFor="password">Mot de passe *</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        data-e2e="password" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p className="error-message">{passwordError}</p>
                </div>
                <div className="input-container">
                    <label className="labels" htmlFor="confirmPassword">Confirmation du mot de passe *</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        data-e2e="password-confirmation" 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <p className="error-message">{confirmPasswordError}</p>
                </div>
                <button className="signup-button" onClick={handleSignup} data-e2e="submit-signup" >S'inscrire</button>
            </div>
        </div>
    );
};

export default Signup;
