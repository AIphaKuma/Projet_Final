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
    const { masterclassId } = useParams();
    const Navigate = useNavigate();
    const [masterclasses, setMasterclasses] = useState([]);
    const [name, setName] = useState('');
    const [videoId, setVideoId] = useState('');
    const [musicSheetPath, setMusicSheetPath] = useState(''); // Nouvel état
    const [content, setContent] = useState('');
    const [selectedMasterclass, setSelectedMasterclass] = useState(masterclassId || '');
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

    const handleMusicSheetUploadSuccess = (path) => {
        setMusicSheetPath(path); // Mettez à jour l'état avec le chemin du fichier
    };

    const addLesson = async () => {
        if (!name || !videoId || !musicSheetPath || !content || !selectedMasterclass) {
            alert("Tous les champs doivent être remplis");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/add-lessons', {
                name,
                videos: videoId,
                music_sheet: musicSheetPath,
                content,
                masterclass_id: selectedMasterclass
            }, config);

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
                <input type="text" name="musicSheetPath" value={musicSheetPath} placeholder="ID de la partition" onChange={(e) => setMusicSheetPath(e.target.value)} />
                <textarea name="content" value={content} placeholder="Contenu de la leçon" onChange={(e) => setContent(e.target.value)}></textarea>

                <select name="masterclass" value={selectedMasterclass} onChange={(e) => setSelectedMasterclass(e.target.value)}>
                    <option value="" disabled>Sélectionnez une Masterclass</option>
                    {masterclasses.map(masterclass => (
                        <option key={masterclass.id} value={masterclass.id}>
                            {masterclass.name}
                        </option>
                    ))}
                </select>
            </div>

            {errorMessage && <div className="error">{errorMessage}</div>}
            <button onClick={addLesson}>Ajouter la leçon</button>
        </div>
    );
};

export default UploadLesson;
