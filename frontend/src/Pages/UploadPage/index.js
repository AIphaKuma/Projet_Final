import React, { useState, useEffect } from 'react';
import axios from '../../axios/axiosConfig';
import { useParams, useNavigate } from 'react-router-dom';
import UploadMusicSheet from "../../Components/UploadMusicSheet";
import './styles.scss'

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
        <div className="form">
            <h2>Ajouter une leçon</h2>
            <div className="upload_file">
                <UploadMusicSheet onUploadSuccess={handleMusicSheetUploadSuccess}></UploadMusicSheet>
            </div>
            <div className="form-data">
                <div className={name ? "group filled" : "group"}>
                    <input type="text" name="name" value={name} placeholder="" onChange={(e) => setName(e.target.value)} />
                    <label> Nom de la leçon </label>
                </div>
                <div className={videoId ? "group filled" : "group"}>
                    <input type="text" name="videoId" value={videoId} placeholder="" onChange={(e) => setVideoId(e.target.value)} />
                    <label> ID du lien Youtube </label>
                </div>
                <div className={composer ? "group filled" : "group"}>
                    <input type="text" name="composer" value={composer} placeholder="" onChange={(e) => setComposer(e.target.value)} />
                    <label> Compositeur de la leçon </label>
                </div>
                <div className={duration ? "group filled" : "group"}>
                    <input type="text" name="duration" value={duration} placeholder="" onChange={(e) => setDuration(e.target.value)} />
                    <label> Durée </label>
                </div>
                <div className="group">
                    <textarea name="content" value={content} placeholder="Contenu de la leçon" onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
            </div>

            {errorMessage && <div className="error">{errorMessage}</div>}
            <button onClick={addLesson}>AJOUTER LA LEÇON</button>
        </div>
    );
};

export default UploadLesson;
