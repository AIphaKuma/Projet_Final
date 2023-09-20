import React, { useState, useEffect } from 'react';
import axios from '../../axios/axiosConfig';
import { useParams, useNavigate } from 'react-router-dom';
import UploadMusicSheet from "../../Components/UploadMusicSheet";

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
};

const UploadLesson = () => {
    const {  id } = useParams();
    console.log(id);
    const Navigate = useNavigate();
    const [masterclasses, setMasterclasses] = useState([]);
    const [name, setName] = useState('');
    const [videoId, setVideoId] = useState('');
    const [musicSheetID, setMusicSheetID] = useState(''); // Nouvel état
    const [content, setContent] = useState('');
    const [composer, setComposer] = useState('');
    const [duration, setDuration] = useState('');
    const [selectedMasterclass, setSelectedMasterclass] = useState(id || '');
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        // Récupération de toutes les Masterclasses disponibles
        axios.get('http://localhost:8080/masterclass', config)
            .then(response => {
                setMasterclasses(response.data);
            })
            .catch(error => {
                setErrorMessage("Erreur lors de la récupération des Masterclasses.");
            });
    }, []);

    const handleMusicSheetUploadSuccess = (id) => {
        console.log("handleMusicSheetUploadSuccess appelé avec l'ID:", id);
        setMusicSheetID(id); // Mettez à jour l'état avec le chemin du fichier
    };

    const addLesson = async () => {
        if (!name || !videoId || !content || !composer) {
            alert("Tous les champs doivent être remplis");
            return;
        }

        const lessonData = [{
            name,
            videos: videoId,
            music_sheet_id: musicSheetID,
            content,
            composer,
            duration,
            masterclass_id: selectedMasterclass
        }];
        console.log("Données envoyées au backend:", lessonData);

        try {
            const response  = await axios.post('http://localhost:8080/add-lessons', lessonData, config);
            console.log("Réponse du backend:", response.data);

            if (response.data && response.data.message === 'Leçons ajoutées') {
                alert('Leçon ajoutée avec succès!');
                Navigate('/dashboard');
            } else {
                setErrorMessage("Erreur lors de l'ajout de la leçon.");
            }
        } catch (error) {
            setErrorMessage("Erreur lors de l'ajout de la leçon.");
        }
    };

    return (
        <div>
            <h2>Ajouter une leçon</h2>
            <div>
                <UploadMusicSheet onUploadSuccess={handleMusicSheetUploadSuccess}></UploadMusicSheet>
                <input type="text" name="name" value={name} placeholder="Nom de la leçon" onChange={(e) => setName(e.target.value)} />
                <input type="text" name="videoId" value={videoId} placeholder="ID de la vidéo" onChange={(e) => setVideoId(e.target.value)} />
                <input type="text" name="composer" value={composer} placeholder="Compositeur de la leçon" onChange={(e) => setComposer(e.target.value)} />
                <input type="text" name="duration" value={duration} placeholder="durée" onChange={(e) => setDuration(e.target.value)} />
                <textarea name="content" value={content} placeholder="Contenu de la leçon" onChange={(e) => setContent(e.target.value)}></textarea>

            </div>

            {errorMessage && <div className="error">{errorMessage}</div>}
            <button onClick={addLesson}>Ajouter la leçon</button>
        </div>
    );
};

export default UploadLesson;
