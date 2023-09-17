import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PwButton from '../../Components/button';
import MasterclassCard from '../../Components/Masterclass/MasterclassCard';
import './style.scss';
import Footer from '../../Components/Footer';

function MasterclassPage() {
    const [error, setError] = useState(null);
    const [masterclass, setMasterclasses] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const masterclassesPerPage = 5;
    const [activeFilter, setActiveFilter] = useState(null);

    const getMasterclass = async () => {
        try {
            const response = await axios.get('http://localhost:8080/masterclass');
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
    const  getLessons = async () => {

    }

    useEffect(() => {
        getMasterclass();
    }, []);

    const applyFilter = (filter) => {
        // Apply the filter and set the active filter
        // Implement your logic to filter the masterclasses based on the selected filter
        // For simplicity, let's assume you have a field in masterclass called 'category'
        setActiveFilter(filter);
        // Modify this line based on your filter logic
        const filteredMasterclasses = masterclass.filter((m) => m.category === filter);
        setMasterclasses(filteredMasterclasses);
        setCurrentPage(1); // Reset to the first page after applying the filter
    };




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
                instrument={n.category}
            />
        ));
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(masterclass.length / masterclassesPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <>
            <div className="masterclasses">
                <div className={'category-title'}>Nos Masterclass</div>
                <div className={'title'}>Les meilleurs masterclass</div>
                <div className="filter">
                    <PwButton
                        title={'Categorie'}
                        variant={'primary'}
                        size={'medium'}
                        onClick={() => applyFilter('Categorie')}
                    ></PwButton>
                    <PwButton
                        title={'Instrument'}
                        variant={'primary'}
                        size={'medium'}
                        onClick={() => applyFilter('Instrument')}
                    ></PwButton>
                    {/* Add more buttons for different filters */}
                </div>
                <div className={'masterclass-container'}>{renderMasterclasses()}</div>
                <div className="pagination">
                    {pageNumbers.map((number) => (
                        <span key={number} onClick={() => paginate(number)}>
              {number}
            </span>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MasterclassPage;
