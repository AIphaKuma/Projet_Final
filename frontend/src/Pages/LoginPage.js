import React, { useState } from 'react';
import './style.scss';
import Fontawesome from '../api/Fontawesome';
import Images from '../assets/image/index';
// import CombinedForms from './CombinedForms';
import LoginForm from '../form/LoginForm/LoginForm';


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

                <div className='bloc-image'>
                    {/* <img src={Images.Login} /> */}
                    <div className='card-masterclass'>

                        
                        <div className='titre_icon'>
                            <Fontawesome />
                            <div className='titre'>
                                <div className='text'>Masterclass</div>
                            </div>
                            <div className='icon'>
                                
                                <div className='fleche_gauche'><i class="fa-solid fa-arrow-right"></i></div>
                                <div className='fleche_droite'><i className="fa-regular fa-envelope icon-arrow"></i> </div>
                            </div>
                        </div>
                        <div className='text-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        make a type specimen book.</div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default LoginPage;
