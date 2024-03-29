import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MasterclassCard from '../../Components/Masterclass/MasterclassCard';

import Footer from '../../Components/Footer';
import NavbarDashboard from "../../Components/NavbarDashboard";

import './style.scss';

function MasterclassPage() {
    const [error, setError] = useState(null);
    const [masterclass, setMasterclasses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lessons, setLessons] = useState([])
    const masterclassesPerPage = 5;
    const [isDescendingOrder, setIsDescendingOrder] = useState(true);
    const [selectedLevel, setSelectedLevel] = useState('');


    const getMasterclass = async () => {
        try {
            const response = await axios.get('http://localhost:8080/masterclass/');
            setMasterclasses(response.data);
            console.log('Response from server:', response.data);
        } catch (err) {
            console.error('Error during fetching masterclasses:', err);
            setMasterclasses([]);

            if (err.response && err.response.data && err.response.data.message) {
                setError(err.response.data.message);
            } else {
                setError(err.message);
            }
        }
    };
    const filterMasterclassesByLevel = (level) => {
        // Filtrer les masterclass en fonction du niveau
        const filteredMasterclasses = masterclass.filter(m => m.level === level);
        setMasterclasses(filteredMasterclasses);
        setSelectedLevel(level);
    };

    const fetchLessonsForMasterclass = async (masterclassId) => {
        try {
            const response = await axios.get(`http://localhost:8080/get-lessons/${masterclassId}`);
            return response.data.lessons;
        } catch (err) {
            console.error(`Error fetching lessons for masterclass ${masterclassId}:`, err);
            return [];
        }
    };

    useEffect( () => {
        getMasterclass()
        },[]);

    useEffect(() => {
        const fetchLessonsForAllMasterclasses = async () => {
            const lessonsPromises = masterclass.map(async (m) => {
                const lessonsForMasterclass = await fetchLessonsForMasterclass(m.id);
                return { masterclassId: m.id, lessons: lessonsForMasterclass };
            });

            const allLessons = await Promise.all(lessonsPromises);

            const updatedLessons = allLessons.reduce((acc, lesson) => {
                acc[lesson.masterclassId] = lesson.lessons;
                return acc;
            }, {});
            setLessons(updatedLessons);
        };

        if (masterclass.length > 0) {
            fetchLessonsForAllMasterclasses();
        }
    }, [masterclass]);





    const renderMasterclasses = () => {
        const indexOfLastMasterclass = currentPage * masterclassesPerPage;
        const indexOfFirstMasterclass = indexOfLastMasterclass - masterclassesPerPage;
        const currentMasterclasses = masterclass.slice(indexOfFirstMasterclass, indexOfLastMasterclass);

        if (!masterclass) {
            return null;
        }

        return currentMasterclasses.map((n) => (
            <MasterclassCard
                masterclass={n}
                key={n.id}
                title={n.name}
                creator={n.created_by}
                level={n.level}
                duration={n.duration}
                image={n.image}
                comment={n.comment}
                lessons={lessons[n.id]}
                instrument={n.category}
            />
        ));
    };

    const toggleOrder = () => {
        setMasterclasses(prevMasterclasses => prevMasterclasses.slice().reverse());
        setIsDescendingOrder(prevOrder => !prevOrder);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(masterclass.length / masterclassesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <NavbarDashboard></NavbarDashboard>
            <div className="masterclasses">
                <div className={'category-title'}>Nos Masterclass</div>
                <div className={'title'}>Les meilleurs masterclass</div>

                <div className="filter">
                    <button onClick={toggleOrder}>
                        Changer l'ordre {isDescendingOrder ? 'vers les plus anciennes' : 'vers les plus récentes'}
                    </button>
                    <button onClick={() => filterMasterclassesByLevel('facile')}>
                        Filtrer par niveau Facile
                    </button>
                    <button onClick={() => filterMasterclassesByLevel('intermédiaire')}>
                        Filtrer par niveau Intermédiaire
                    </button>
                    <button onClick={() => filterMasterclassesByLevel('difficile')}>
                        Filtrer par niveau Difficile
                    </button>

                </div>
                <div className={'masterclass-container'}>{renderMasterclasses()}</div>
                <div className="pagination">
                    {pageNumbers.map((number, index) => (
                        <span key={number}>
                             {index > 0 && ' - '}
                            <span onClick={() => paginate(number)}>{number}</span>
                        </span>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MasterclassPage;
