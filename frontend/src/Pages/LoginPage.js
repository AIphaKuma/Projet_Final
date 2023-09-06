import React, { useState } from 'react';
import LoginForm from './LoginForm';

function LoginPage() {
    const [message, setMessage] = useState('');

    const handleLoginSuccess = (data) => {
        setMessage('Connexion réussie!');
        // Ici, vous pouvez aussi gérer le JWT, naviguer vers une autre page, etc.
    }

    const handleLoginFailure = (errorMessage) => {
        setMessage(errorMessage);
    }

    return (
        <div>
            <h2>Connexion</h2>
            <LoginForm
                onLoginSuccess={handleLoginSuccess}
                onLoginFailure={handleLoginFailure}
            />
            {message && <p>{message}</p>}
        </div>
    );
}

export default LoginPage;
