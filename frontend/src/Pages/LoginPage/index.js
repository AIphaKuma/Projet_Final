import React, { useState } from 'react';
import './style.scss';
import axios from 'axios';
import Fontawesome from '../../api/Fontawesome';
import Images from '../../assets/image/index';
// import CombinedForms from './CombinedForms';
import LoginForm from '../../form/LoginForm/LoginForm';




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
                    onLoginFailure={handleLoginFailure}/>

                 

               
                {message && <p>{message}</p>}

                
            </div>
            <div className='container-connexion_image'>

                {/* <div className='bloc-image'> */}

                <div className='imgmasterclass'>
                    <div className='logosaline'>
                     { <img src={Images.SalineLogo} className='logo'/> }
                    </div>
                    { <img src={Images.Login} className='imgbackground'/> }

                    <div className='card'>

                  

                     

                        <div class="slider">
                            <div class="slide">
                                <h2>Etudier avec les meilleurs musiciens du monde</h2>
                                <label className='text4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                                </label>
                            </div>
                        </div>

                        <div class="slider-dots">
                            <span class="dot1"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>


                        
                    
                    
                    </div>
            
            
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
