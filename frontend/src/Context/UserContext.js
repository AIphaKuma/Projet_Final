// UserContext.js
import { useState, createContext, useContext, useMemo } from "react";
import axios from '../Axios/axiosConfig';

const UserContext = createContext(null);

export function useUser() {
    return useContext(UserContext);
}

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = async () => {
        try {
            await axios.post('logout');
            setUser(null); // Mettez à jour l'état local pour refléter que l'utilisateur est déconnecté
        } catch (err) {
            console.error('Error during logout:', err);
        }
    };

    const contextValue = useMemo(() => ({ user, login, logout }), [user]);

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
}
