import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddMasterclassForm = () => {
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        category_id: '',
        level: '',
        comment: '',
    });
    const Navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/category_masterclasses')
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des catégories:', error);
            });
    }, []);

    const onChange = e => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addMasterclass = async () => {
        if (Object.values(formData).some(item => item === '')) {
            alert("Tous les champs doivent être remplis");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8080/add-masterclass', formData);
            console.log('Success:', response.data);
            if (response.data && response.data.success) {
                alert('Masterclass ajoutée avec succès!');
                Navigate('/dashboard');
            } else {
                console.error('Erreur lors de l\'ajout de la masterclass:', response.data);
            }
        } catch (error) {
            console.error('Erreur lors de l\'ajout de la masterclass:', error);
        }
    };

    return (
        <div>
            <div>
                <h2>Ajouter une Masterclass</h2>
                <input type="text" name="name" value={formData.name} placeholder="Titre" onChange={onChange} />
                <select name="category_id" value={formData.category_id} onChange={onChange}>
                    <option value="" disabled>Sélectionnez une catégorie</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                <input type="text" name="level" value={formData.level} placeholder="Niveau" onChange={onChange} />
                <input type="text" name="comment" value={formData.comment} placeholder="Comment" onChange={onChange} />
            </div>
            <button onClick={addMasterclass}>Ajouter</button>
        </div>
    );
};

export default AddMasterclassForm;
