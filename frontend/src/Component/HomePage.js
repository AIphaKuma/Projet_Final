import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Bienvenue sur la page d'accueil</h1>
            <p>Contenu de votre page d'accueil...</p>

            <div>
                <Link to="/login">Aller à la page de connexion</Link> <br/>
                <Link to="/register">Aller à la création de compte</Link>
            </div>
        </div>
    );
}

export default HomePage;
