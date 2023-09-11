
import React, { useState } from 'react';
import axios from 'axios';
import countries from "i18n-iso-countries";
import countriesLang from "i18n-iso-countries/langs/fr.json";
import {useUser} from "../Context/UserContext";
import { useNavigate } from 'react-router-dom';

countries.registerLocale(countriesLang);

const RegisterPage = () => {
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
    const { first_name, last_name, address, country, phone_number, username, password, mail} = formData;
    const Navigate = useNavigate();

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
                console.log('JWT stored in cookie:', jwtoken); // Log du JWT stocké
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

    return (
        <div>
            <div>
                <h2>Informations personnelles</h2>
                <input type="text" name="first_name" value={first_name} placeholder="Prénom" onChange={onChange} />
                <input type="text" name="last_name" value={last_name} placeholder="Nom de famille" onChange={onChange} />
                <input type="text" name="address" value={address} placeholder="Adresse" onChange={onChange} />
                <select name="country" value={country} onChange={onChange}>
                    <option value="" disabled>Choisissez un pays</option>
                    {countryList}
                </select>
                <input type="text" name="phone_number" value={phone_number} placeholder="Numéro de téléphone" onChange={onChange} />
            </div>
            <div>
                <h2>Création du compte</h2>
                <input type="text" name="mail" value={mail} placeholder="E-mail" onChange={onChange} />
                <input type="text" name="username" value={username} placeholder="Nom d'utilisateur" onChange={onChange} />
                <input type="password" name="password" value={password} placeholder="Mot de passe" onChange={onChange} />
                <input type="password" name="confirmPassword"  placeholder="Confirmez le mot de passe"  />
            </div>
            <button onClick={registerForm}>S'inscrire</button>
        </div>
    );
};

export default RegisterPage;

