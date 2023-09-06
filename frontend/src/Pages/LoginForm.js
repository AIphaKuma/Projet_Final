import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {useUser} from "../Context/UserContext";


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const { login } = useUser();
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log('Submitting form with:', { username, password }); // Log des données

        try {
            const response = await axios.post('http://localhost:8080/login', {
                username,
                password
            });

            console.log('Response from server:', response); // Log de la réponse

            const user = response.data.user;

            if (user) {
                console.log('User:', user); // Log du JWT stocké
                login(response.data.user);
                Navigate('/dashboard');
            } else {
                console.error('JWT not found in response:', response.data);
                setError('Authentication failed. Please try again.');
            }

        } catch (err) {
            console.error('Error during login:', err); // Log des erreurs

            // Affichez une erreur détaillée si elle est fournie dans la réponse
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username: </label>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            {error && <div>{error}</div>}
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;
