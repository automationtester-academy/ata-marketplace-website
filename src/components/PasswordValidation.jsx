import React, { useState } from 'react';

const PasswordValidation = () => {
  const [password, setPassword] = useState('');
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
    <div className="password-validation">
      <input
        type="password"
        id="psw"
        placeholder="Enter your password"
        value={password}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleInputChange}
      />
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
  );
};

export default PasswordValidation;
