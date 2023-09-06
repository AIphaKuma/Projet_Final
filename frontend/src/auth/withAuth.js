import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';
import axios from 'axios';

function WithAuth({ children }) {
    const { user, login, logout } = useUser();
    const navigate = useNavigate();
    const [isAuthChecked, setIsAuthChecked] = useState(false);

    useEffect(() => {
        if (!user && !isAuthChecked) {
            axios.get("http://localhost:8080/me", { withCredentials: true })
                .then(response => {
                    const data = response.data;
                    login(response.data.user);
                    setIsAuthChecked(true);
                })
                .catch(error => {
                    logout();
                    navigate('/login');
                });
        } else {
            setIsAuthChecked(true);
        }
    }, [user, logout, navigate]);

    if (!isAuthChecked) {
        return null;  // ou afficher un spinner de chargement
    }

    return children;
}

export default WithAuth;
