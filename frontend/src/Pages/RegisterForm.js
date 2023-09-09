import React, { useState } from 'react';
import axios from 'axios';
import countries from "i18n-iso-countries";
import countriesLang from "i18n-iso-countries/langs/fr.json";
import { useUser } from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';
import Fontawesome from '../api/Fontawesome';
import './style.scss';

countries.registerLocale(countriesLang);

const RegisterForm = () => {
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
    const [currentStep, setCurrentStep] = useState(1);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const countryList = Object.entries(countries.getNames('fr')).map(([key, value]) => {
        return <option key={key} value={key}>{value}</option>;
    });

    const registerForm = async () => {
        if (Object.values(formData).some(item => item === '')) {
            alert("Tous les champs doivent être remplis");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/register', formData);
            console.log('Success:', response.data);
            const jwtoken = response.data.token;
            if (jwtoken) {
                document.cookie = `token=${jwtoken}; path=/`;
                console.log('JWT stored in cookie:', jwtoken);
                register(response.data.user);
                Navigate('/dashboard');
            } else {
                console.error('JWT not found in response:', response.data);
                setError('Authentication failed. Please try again.');
            }
        } catch (error) {
            console.error('Erreur lors de l\'inscription:', error);
            console.log('formData:', formData);
        }
    };

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const previousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    return ( 
        <div>
            {currentStep === 1 && (
                <div className='formulaire'>
                    <Fontawesome />
                    <h2>Informations personnelles</h2>
                    <div className='group'>
                        <input type="text" name="first_name" value={first_name} onChange={onChange} />
                        <i className="fa-regular fa-user icon-arrow"></i>
                        <label>Prénom</label>
                    </div>

                    <div className='group'> 
                        <input type="text" name="last_name" value={last_name}  onChange={onChange} />   
                        <i className="fa-regular fa-user icon-arrow"></i>
                        <label>Nom</label>
                    </div>


                    <div className='group'> 
                        <input type="text" name="address" value={address} onChange={onChange} /> 
                        <i className="fa-regular fa-map icon-arrow"></i>
                        <label>Adressee</label>
                    </div>



                    <select name="country" value={country} onChange={onChange}>
                        <option value="" disabled>Choisissez un pays</option>
                        {countryList}
                    </select>

                    <div className='group'> 
                        <input type="text" name="phone_number" value={phone_number} onChange={onChange} />
                        <i className="fa-solid fa-phone icon-arrow"></i>
                        <label>Numéro de téléphone</label>
                    </div>




                    {/* Other personal information fields */}
                    <button onClick={nextStep} className='button-form'>
                        Étape suivante
                    </button>
                </div>
            )}

            {currentStep === 2 && (

                <div className='formulaire'>
                    <h2>Création du compte</h2>
                    <div className='group'>
                        <input type="text" name="mail" value={mail} onChange={onChange} />
                        <i className="fa-regular fa-envelope icon-arrow"></i>
                        <label>Email</label>
                    </div>

                <div className='group'>      
                    <input type="text" name="username" value={username}  onChange={onChange} />
                    <i className="fa-regular fa-envelope icon-arrow"></i>
                    <label>Nom utulisateurs</label>
                </div>

                <div className='group'>      
                    <input type="password" name="password" value={password} onChange={onChange} />
                    <i className="fa-solid fa-lock icon-arrow"></i>
                    <label>Mot de passe</label>
                </div>

                <div className='group'>      
                    <input type="password" name="confirmPassword"  />
                    <i className="fa-solid fa-lock icon-arrow"></i>
                    <label>Confirme mot de passe</label>
                </div>
                    {/* Other account creation fields */}
                    <button onClick={previousStep} className='button-form'>
                        Étape précédente
                    </button>
                    <button onClick={registerForm} className='button-form'>
                        S'inscrire
                    </button>
                </div>
            )}
        </div>
    );
};

export default RegisterForm;

