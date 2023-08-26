// Dashboard.js
import React from 'react';
import { useUser } from '../Context/UserContext';

function Dashboard() {
    const { user, logout } = useUser();

    if (!user) {
        return <div>Veuillez vous connecter pour accéder au tableau de bord.</div>;
    }

    return (
        <div>
            <h1>Tableau de bord</h1>
            <p>Bonjour, {user.username}!</p>
            <button onClick={logout}>Déconnexion</button>
        </div>
    );
}

export default Dashboard;
