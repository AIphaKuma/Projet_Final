import React, { useState } from 'react';
import config from '../Config/config'; // Assurez-vous d'ajuster le chemin si nécessaire

function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Envoyer une requête POST au backend en utilisant l'URL depuis le fichier config
        const response = await fetch(`${config.backendUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.status === 200) {
            props.onLoginSuccess(data);
        } else {
            props.onLoginFailure(data.message);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom d'utilisateur:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Mot de passe:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Se connecter</button>
        </form>
    );
}

export default LoginForm;
