import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import { useAuth } from '../../context/AuthContext';

const LoginSignupModal = ({ show, handleClose }) => {
    const [errorMessage, setErrorMessage] = useState('');
    const { login } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const [formValues, setFormValues] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = isLogin ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users/signup';

        const postData = isLogin
            ? { email: formValues.email, password: formValues.password }
            : {
                fullName: formValues.fullName,
                email: formValues.email,
                password: formValues.password,
                confirmPassword: formValues.confirmPassword
            };

        try {
            const response = await axios.post(url, postData);
            if (response.data.token) {
                login(response.data.token);
                // Optionally, redirect the user or update the application state
                handleClose();
            } else {
                console.error('No token received');
            }
        } catch (error) {
            console.error(error);
            const message = error.response && error.response.data && error.response.data.message
                ? error.response.data.message
                : 'Login failed. Please try again.';
            setErrorMessage(message);
            setTimeout(() => setErrorMessage(''), 2000);
        }
    };

    const toggleForm = () => setIsLogin(!isLogin);

    if (!show) return null;

    return (
        <div className="login-modal-container" style={{ display: show ? 'flex' : 'none' }}>
            <div className="login-modal-content">
                <span className="login-modal-close-button" onClick={handleClose}>&times;</span>
                <div className="login-modal-body">
                    <form onSubmit={handleSubmit}>
                        {isLogin ? (
                            <>
                                <h2>Login</h2>
                                <input
                                    className="login-modal-input"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="login-modal-input"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button className="login-modal-button" type="submit">
                                    Login
                                </button>
                            </>
                        ) : (
                            <>
                                <h2>Sign Up</h2>
                                <input
                                    className="login-modal-input"
                                    type="text"
                                    name="fullName"
                                    placeholder="Full Name"
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="login-modal-input"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="login-modal-input"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formValues.password}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    className="login-modal-input"
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formValues.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <button className="login-modal-button" type="submit" onClick={handleSubmit}>
                                    Sign Up
                                </button>
                            </>
                        )}
                    </form>
                </div>
                <div className="login-modal-footer">
                    <button className="login-modal-button" onClick={toggleForm}>
                        {isLogin ? 'No account? Sign up' : 'Have an account? Log in'}
                    </button>
                </div>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
            </div>
        </div>
    );
};

export default LoginSignupModal;
