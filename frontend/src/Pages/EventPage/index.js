import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PwButton from '../../Components/button';
import MasterclassCard from '../../Components/Masterclass/MasterclassCard';
import './style.scss';
import Footer from '../../Components/Footer';

function EventPage() {
    const [events, setEvent] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/event')
      .then((response) => {
        setEvent(response.data);
        console.log("reussie");
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des événements :', error);
      });
  }, []);

  

    return (
        

        <>
        <div>
        <h1>Liste des événements</h1>
        <ul>
            {events.map((event) => (
            <li key={event.id}>{event.name}</li>
            ))}
        </ul>
    </div>

            <Footer />
        </>
    );
}

export default EventPage;
