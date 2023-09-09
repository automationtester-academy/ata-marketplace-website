import React, { useState } from 'react';
import logoImg from '../images/ATA-logo.png';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
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


    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleInputChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const isLengthValid = password.length >= 8;

    return (
        <div className="signup-containers">
            <div className="signup-container">
                <div className="logo-section">
                    <img src={logoImg} alt="Logo" data-test='logo-img' />
                </div>
                <div className="form-section">
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
                        <label className="labels-signup" htmlFor="password" data-test='mot-de-passe'>Mot de passe *</label>
                        <input
                            type="password"
                            className='inputs-signup'
                            id="password"
                            value={password}
                            data-test="input-password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                handleInputChange()
                            }}

                            onFocus={handleFocus}
                            onBlur={handleBlur}
                           
                        />
                        <p className="error-message">{passwordError}</p>
                        {isFocused && (
                            <div className="message" id="message">
                                <p className={`message-item ${hasLowerCase ? 'valid' : 'invalid'}`}>
                                    At least one lowercase letter
                                </p>
                                <p className={`message-item ${hasUpperCase ? 'valid' : 'invalid'}`}>
                                    At least one uppercase letter
                                </p>
                                <p className={`message-item ${hasNumber ? 'valid' : 'invalid'}`}>
                                    At least one number
                                </p>
                                <p className={`message-item ${isLengthValid ? 'valid' : 'invalid'}`}>
                                    Minimum 8 characters
                                </p>
                            </div>
                        )}
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

                    <div id="message">
                        <h3>Password must contain the following:</h3>
                        <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                        <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                        <p id="number" class="invalid">A <b>number</b></p>
                        <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                    </div>

                    <button className="signup-button" onClick={handleSignup} data-test="submit-signup" >S'inscrire</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;
