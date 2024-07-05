import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Container = styled.div`
    padding: 20px;
      /* Add padding on the right side */
    padding-left: 100px;
`;

const CurriculumSection = styled.div`
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  
`;

const CurriculumContent = styled.div`
    max-width: 80%;
`;

const LessonPlan = styled.div`
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Schedule = styled.div`
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const IconGroup = styled.div`
    display: flex;
    gap: 10px;
`;

const IconButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    color: #007BFF;
    &:hover {
        color: #0056b3;
    }
`;

const AllCurriculums = () => {
    const [curriculumEntries, setCurriculumEntries] = useState([]);

    useEffect(() => {
        fetchCurriculumEntries();
    }, []);

    const fetchCurriculumEntries = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/curriculum-entries');
            setCurriculumEntries(response.data);
            toast.success('Curriculum entries fetched successfully!');
        } catch (error) {
            toast.error('Error fetching curriculum entries.');
            console.error('Error fetching curriculum entries:', error);
        }
    };

    const deleteCurriculumEntry = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/curriculum-entries/${id}`);
            setCurriculumEntries(curriculumEntries.filter(entry => entry.id !== id));
            toast.success('Curriculum entry deleted successfully!');
        } catch (error) {
            toast.error('Error deleting curriculum entry.');
            console.error('Error deleting curriculum entry:', error);
        }
    };

    return (
        <Container>
            <Sidebar />
            <ToastContainer />
            <h2>All Curriculums</h2>
            {curriculumEntries.map((entry, index) => (
                <CurriculumSection key={index}>
                    <CurriculumContent>
                        <h3>{entry.grade}</h3>
                        <ul>
                            <li>{entry.subject}</li>
                        </ul>
                        <LessonPlan>
                            <h4>Lesson Plans</h4>
                            <ul>
                                <li>{entry.lesson}</li>
                            </ul>
                        </LessonPlan>
                        <Schedule>
                            <h4>Timetable</h4>
                            <p>{entry.timetable}</p>
                        </Schedule>
                    </CurriculumContent>
                    <IconGroup>
                        <IconButton>
                            <FaEdit />
                        </IconButton>
                        <IconButton onClick={() => deleteCurriculumEntry(entry.id)}>
                            <FaTrash />
                        </IconButton>
                    </IconGroup>
                </CurriculumSection>
            ))}
        </Container>
    );
}

export default AllCurriculums;
