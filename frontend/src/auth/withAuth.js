import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Context/UserContext';

const withAuth = WrappedComponent => {
    return props => {
        const { user, logout } = useUser();
        const navigate = useNavigate();

        useEffect(() => {
            if (!user) {
                fetch("/me", {
                    method: "GET",
                    credentials: "include"
                })
                    .then(res => {
                        if (res.ok) {
                            return res.json();
                        } else {
                            throw new Error("Session expired");
                        }
                    })
                    .then(data => {
                        // Update user state or handle accordingly
                    })
                    .catch(error => {
                        // Handle logout or inform user their session has expired
                        logout();
                        navigate('/login'); // Redirect to login page or another page if session has expired
                    });
            }
        }, [user, logout, navigate]);

        return <WrappedComponent {...props} />;
    }
}

export default withAuth;
