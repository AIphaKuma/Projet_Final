import React, { useState } from 'react';
import axios from 'axios';
import countries from "i18n-iso-countries";
import countriesLang from "i18n-iso-countries/langs/fr.json";
import { useUser } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';
import './style.scss';
import Fontawesome from '../api/Fontawesome';

countries.registerLocale(countriesLang);

const CombinedForms = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        address: '',
        country: '',
        phone_number: '',
        username: '',
        password: '',
        mail: '',
    });
    const [error, setError] = useState(null);
    const { register } = useUser();
    const { first_name, last_name, address, country, phone_number, username, password, mail } = formData;
    const Navigate = useNavigate();

    const [mode, setMode] = useState('login'); // Ajoutez le mode pour gérer l'affichage du formulaire de connexion ou d'inscription

    const onChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const countryList = Object.entries(countries.getNames('fr')).map(([key, value]) => {
        return <option key={key} value={key}>{value}</option>;
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (mode === 'login') {
            // Code de gestion de la connexion ici (copiez le code de LoginForm.js)
        } else {
            // Code de gestion de l'inscription ici (copiez le code de RegisterForm.js)
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
                {mode === 'register' && (
                    <div className='Form'>
                        <h2>Informations personnelles</h2>
                        <div className='group'>
                            <input type="text" name="first_name" value={first_name}  onChange={onChange} />
                            <i className="fa-regular fa-envelope icon-arrow"></i> 
                            <label>Prénom</label>
                        </div>
                        <div className='group'>
                            <input type="text" name="last_name" value={last_name} onChange={onChange} />
                            <i className="fa-regular fa-envelope icon-arrow"></i> 
                            <label>Nom de famille</label>
                        </div>
                        <div className='group'>
                            <input type="text" name="address" value={address} onChange={onChange} />
                            <i className="fa-regular fa-envelope icon-arrow"></i> 
                            <label>Adresse</label>
                        </div>
                        <div className='group'>
                            <select name="country" value={country} onChange={onChange}>
                                <option value="" disabled>Choisissez un pays</option>
                                <i className="fa-regular fa-envelope icon-arrow"></i> 
                                {countryList}
                            </select>
                        </div>
                        <div className='group'>
                            <input type="text" name="phone_number" value={phone_number} onChange={onChange} />
                            <i className="fa-regular fa-envelope icon-arrow"></i> 
                            <label>Numero</label>
                        </div>
                    </div>
                )}

                <div className='Form'>
                    <h2>Création du compte</h2>
                    <div className='group'>
                        <Fontawesome />
                        <input type="text" name="mail" value={mail} onChange={onChange} />
                        <i className="fa-regular fa-envelope icon-arrow"></i> 
                        <label>Email</label>
                    </div>
                    {/* <div className='group'>
                        <input type="text" name="username" value={username}onChange={onChange} />
                        <i className="fa-regular fa-envelope icon-arrow"></i>
                        <label>Nom d'utilisateur</label>
                    </div> */}
                    <div className='group'>
                        <input type="password" name="password" value={password} onChange={onChange} />
                        <i className="fa-regular fa-envelope icon-arrow"></i> 
                        <label>Mot de passe</label>
                    </div>
                    
                    {mode === 'register' && (
                        <div className='group'>
                            <input type="password" name="confirmPassword"/>
                            <i className="fa-regular fa-envelope icon-arrow"></i> 
                            <label>Confirmez le mot de passe</label>
                        </div>
                    )}
                </div>
                {error && <div>{error}</div>}
                <button type="submit" className='button-form'>{mode === 'login' ? 'Se connecter' : 'S\'inscrire'}</button>
            </form>
        </div>
    );
}

export default CombinedForms;
