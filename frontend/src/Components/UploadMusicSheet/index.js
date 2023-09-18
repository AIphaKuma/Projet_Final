import React, { useState } from 'react';
import axios from '../../axios/axiosConfig';

function UploadMusicSheet(onUploadSuccess) {
    // état pour stocker le fichier
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // fonction pour mettre à jour le fichier
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    // fonction pour envoyer le fichier au serveur
    const handleUpload = async () => {
        if (!file) {
            setMessage('Veuillez sélectionner un fichier');
            return;
        }
        //
        const formData = new FormData();
        formData.append('music_sheet', file);

        setIsLoading(true);

        // requête axios pour envoyer le fichier au serveur
        try {
            const response = await axios.post('/upload-file', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMessage(response.data.message);

            if (response.data && response.data.success && onUploadSuccess) {
                onUploadSuccess(response.data.path); // appel de la fonction de succès
            }

        } catch (error) {
            setMessage('Erreur lors de l\'upload: ' + (error.response?.data?.message || 'Unknown error'));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h3>Upload de Partitions Musicales</h3>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload} disabled={isLoading}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default UploadMusicSheet;