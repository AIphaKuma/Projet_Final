import React, { useState } from 'react';

const YouTubePlayer = () => {
    const [timestamp, setTimestamp] = useState(0); // Le timestamp initial est 0 (début de la vidéo)

    const handleTimestampChange = () => {
        const newTimestamp = parseFloat(prompt('Entrez le nouveau timestamp (en secondes) :'));
        if (!isNaN(newTimestamp) && newTimestamp >= 0) {
            setTimestamp(newTimestamp);
        } else {
            alert('Veuillez entrer un timestamp valide (nombre positif).');
        }
    };

    const embedUrl = `https://www.youtube.com/embed/VIDEO_ID?start=${timestamp}`;

    return (
        <div>
            <h2>Vidéo YouTube</h2>
            <p>Timestamp actuel : {timestamp} secondes</p>
            <button onClick={handleTimestampChange}>Changer le timestamp</button>
            <iframe
                width="560"
                height="315"
                src={embedUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
        </div>
    );
};

export default YouTubePlayer;
