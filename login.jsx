
import React, { useState } from 'react';
import './styles.css'; // Optional: Add custom styling in a CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Basic validation
        if (!email || !password) {
            setError('Both fields are required.');
            return;
        }

        // Call the backend API for login (Replace this with your API call)
        console.log('Login attempt:', { email, password });
        setError(''); // Clear error on successful submission
        
        // Example: Redirect or show success message
        // window.location.href = '/dashboard';
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p className="register-link">
                Don’t have an account? <a href="/register">Register here</a>
            </p>
        </div>
    );
};

export default Login;
