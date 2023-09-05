import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from "../Context/UserContext";
import './style.scss';
import Fontawesome from '../api/Fontawesome';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [lastname, setLastname] = useState('');
    const [error, setError] = useState(null);
    const [mode, setMode] = useState('login'); // Nouvel état pour suivre le mode
    const Navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = mode === 'login' ? 'http://localhost:8080/login' : 'http://localhost:8080/register';

        try {
            const response = await axios.post(url, {
                username,
                password,
                lastname: mode === 'register' ? lastname : undefined  // Envoyez lastname seulement en mode 'register'
            });

            if (mode === 'login') {
                const jwt = response.data.token;
                if (jwt) {
                    document.cookie = `token=${jwt}; path=/`;
                    login(response.data.user);
                    Navigate('/dashboard');
                } else {
                    setError('Échec de l\'authentification. Veuillez réessayer.');
                }
            } else {
                // Gérez le succès de l'inscription ici, si nécessaire
                Navigate('/login');
            }

        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    };
return (
        <div className='connect'>
            {/* Boutons pour basculer entre les modes connexion et inscription */}

            <div className='switch'>
                <button onClick={() => setMode('login')} style={{ backgroundColor: mode === 'login' ? '#fff' : 'transparent' }}>Connexion</button>
                <button onClick={() => setMode('register')} style={{ backgroundColor: mode === 'register' ? '#fff' : 'transparent' }}>Inscription</button>
            </div>


            <form onSubmit={handleSubmit} className='formulaire'>
                <div className='group'>
                    <Fontawesome />
                <i className="fas fa-arrow-right"></i> Cliquez ici
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                    <label>Nom d'utilisateur : </label>
                </div>

                {mode === 'register' && (
                    <div className='group'>
                        <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} />
                        <label>Nom de famille : </label>
                    </div>
                )}
                
                <div className='group'>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <label>Mot de passe : </label>
                    <span class="highlight"></span>
                </div>
                {error && <div>{error}</div>}
                <button type="submit" className='button-form'>{mode === 'login' ? 'Se connecter' : 'S\'inscrire'}</button>
            </form>
        </div>
    );
}

export default LoginForm;