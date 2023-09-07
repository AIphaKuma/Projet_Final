import React, { useState } from 'react';
import LoginForm from './LoginForm';
import './style.scss';



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


        <div className='container-connexion'>
            <div className='container-connexion_form'>
                <h2>Re Bonjour</h2>
                <p>Veuillez entrer vos informations.</p>
                <LoginForm
                    onLoginSuccess={handleLoginSuccess}
                    onLoginFailure={handleLoginFailure}
                />
                {message && <p>{message}</p>}
            </div>
            <div className='container-connexion_image'>
                
            </div>
        </div>
    );
}

export default LoginPage;
