import React from 'react';
import {useUser} from "../../Context/UserContext";
function LogoutButton() {
    const { logout } = useUser();

    const handleLogout = () => {
        logout(); // Appeler la fonction de déconnexion
    };

    return (
        <button onClick={handleLogout}>
            Se déconnecter
        </button>
    );
}

export default LogoutButton;