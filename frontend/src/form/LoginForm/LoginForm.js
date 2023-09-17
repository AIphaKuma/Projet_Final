import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from "../../Context/UserContext";
import '../../Pages/style.scss';
import Fontawesome from '../../api/Fontawesome';
import Images from '../../assets/image/index';
import RegisterForm from '../RegisterForm/RegisterForm'; // Import RegisterForm component

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [mode, setMode] = useState('login');
    const navigate = useNavigate(); // Corrected the variable name to 'navigate'
    const { login } = useUser();

const handleSubmit = async (e) => {
        e.preventDefault();
        const url = mode === 'login' ? 'http://localhost:8080/login' : 'http://localhost:8080/register';
    
        try {
            const response = await axios.post(url, {
                username,
                password,
            });
    
            if (mode === 'login') {
                const jwt = response.data.token;
                if (jwt) {
                    document.cookie = `token=${jwt}; path=/`;
                    login(response.data.user);
                    navigate('/dashboard'); // Corrected the variable name to 'navigate'
                } else {
                    setError('L\'email ou le mot de passe est incorrect. Veuillez réessayer.');
                }
            } else {
                navigate('/login'); // Corrected the variable name to 'navigate'
            }
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError('Une erreur s\'est produite. Veuillez réessayer.');
            }
        }
};

    return (

    <div className='connexion_form'> 
       
        {/* <div className='connect'> */}
            <div className='switch'>
                <button onClick={() => setMode('login')} style={{ backgroundColor: mode === 'login' ? '#c9c9f6' : 'transparent' }}>Connexion</button>
                <button onClick={() => setMode('register')} style={{ backgroundColor: mode === 'register' ? '#c9c9f6' : 'transparent' }}>Inscription</button>
            </div>

      
            {mode === 'login' ? (
                <form onSubmit={handleSubmit} className='formulaire'>
                    <div className='group'>
                        <Fontawesome />
                        <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        <i className="fa-regular fa-envelope icon-arrow"></i>
                        <label>Email</label>
                    </div>

                    <div className='group'>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <i className="fa-solid fa-lock icon-arrow"></i>
                        <label>Mot de passe</label>
                    </div>
                    {error && <div>{error}</div>}
                    <button type="submit" className='button-form'>Se connecter</button>

                    <div className="frame">
                    <div class="horizontal-line"></div>
                    <div className="text-wrapper">Ou Continue Avec</div>
                    <div class="horizontal-line"></div>
                 </div>    
                <div className="frame2">
                    <div className="google">
                         {<img src={Images.IconGoogle} className='googleimg'/>}
                    </div>
                    <div className="apple">
                        {<img src={Images.IconApple} className='appleimg'/>}
                    </div>
                    <div className="facebook">
                        {<img src={Images.IconFacebook} className='facebookimg'/>}
                    </div>
                </div>
                </form>
                
            ) : (
                <RegisterForm />
            )}
        {/* </div> */}
    </div>
    );
}

export default LoginForm;









