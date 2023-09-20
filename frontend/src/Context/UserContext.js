import { useState, createContext, useContext, useEffect, useMemo } from "react";
import axios from "../axios/axiosConfig";

const UserContext = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Vérifiez si l'utilisateur est connecté
        async function checkUserAuthentication() {
            try {
                // Demander au serveur si l'utilisateur est connecté
                const response = await axios.get('/check_user', { withCredentials: true });
                // Si la réponse est "OK", cela signifie que l'utilisateur est connecté
                if (response.data && response.data.username) {
                    setUser(response.data); // Mettre à jour le contexte avec les données de l'utilisateur
                }
            } catch (error) {
                console.error('Erreur lors de la vérification du token:', error);
                // Gérer les erreurs comme les tokens expirés ici
                setUser(null);
            }
        }
        // Appelez la fonction de vérification de l'authentification à chaque fois que l'application est chargée
        checkUserAuthentication();
    }, []);

    const login = (userData) => {
        setUser(userData);
    };

    const register = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            await axios.post('logout', null, { withCredentials: true });
            setUser(null); // Mettez à jour l'état local pour refléter que l'utilisateur est déconnecté
        } catch (err) {
            console.error('Error during logout:', err);
        }
    };

    const contextValue = useMemo(() => ({ user, login, register, logout }), [user]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}