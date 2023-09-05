import React, { useEffect, useState } from 'react';
import MasterclassCard from "../../Components/Masterclass/MasterclassCard";
import axios from "axios";

function Masterclasspage() {
    const [error, setError] = useState(null);
    const [masterclass, setMasterclasses] = useState([]); // Initialisé en tant qu'array vide

    const getMasterclass = async () => {
        try {
            const response = await axios.get('http://localhost:8080/masterclass');
            setMasterclasses(response.data); // Utilisation de response.data pour accéder aux données
            console.log('Response from server:', response.data); // Log de la réponse
        } catch (err) {
            console.error('Error during fetching masterclasses:', err); // Log des erreurs
            setMasterclasses([]);

            // Affichez une erreur détaillée si elle est fournie dans la réponse
            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    };

    useEffect(() => {
        getMasterclass();
    }, []); // [] en tant que dépendance pour une exécution unique

    const renderMasterclasses = () => {
        // Vérification de l'existence de masterclass avant le mappage
        if (!masterclass) {
            return null;
        }
        return masterclass.map(n => <MasterclassCard masterclass={n} key={n.id} title={n.name} creator={n.created_by} duration={n.duration} image={n.image} description={n.description} />);
    };

    return (
        <div className="masterclasses">
            {renderMasterclasses()}
        </div>
    );
}

export default Masterclasspage;
