import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const config = {
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
};

const AddMasterclassForm = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [level, setLevel] = useState('');
    const [comment, setComment] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/category_masterclasses', config)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                setErrorMessage("Erreur lors de la récupération des catégories.");
            });
    }, []);

    const addMasterclass = async () => {
        if (!name || !categoryId || !level || !comment) {
            alert("Tous les champs doivent être remplis");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/add-masterclass', {
                name,
                category_id: categoryId,
                level,
                comment
            }, config);

            if (response.data && response.data.message === 'Masterclass ajouté') {
                alert('Masterclass ajoutée avec succès!');
                Navigate(`/upload-lesson/${response.data.id}`);
            } else {
                setErrorMessage("Erreur lors de l'ajout de la masterclass.");
            }
        } catch (error) {
            setErrorMessage("Erreur lors de l'ajout de la masterclass.");
        }
    };

    return (
        <div>
            <div>
                <h2>Ajouter une Masterclass</h2>
                <input type="text" name="name" value={name} placeholder="Titre" onChange={(e) => setName(e.target.value)} />
                <select name="category_id" value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
                    <option value="" disabled>Sélectionnez une catégorie</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <input type="text" name="level" value={level} placeholder="Niveau" onChange={(e) => setLevel(e.target.value)} />
                <input type="text" name="comment" value={comment} placeholder="Comment" onChange={(e) => setComment(e.target.value)} />
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <button onClick={addMasterclass}>Ajouter</button>
        </div>
    );
};

export default AddMasterclassForm;
