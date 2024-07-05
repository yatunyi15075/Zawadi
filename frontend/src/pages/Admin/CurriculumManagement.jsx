import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Container = styled.div`
    padding: 20px;
`;

const SectionTitle = styled.h2`
    margin-bottom: 10px;
`;

const ButtonGroup = styled.div`
    margin-bottom: 20px;
`;

const Button = styled.button`
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #0056b3;
    }
`;

const CurriculumSection = styled.div`
    margin-bottom: 20px;
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const TextArea = styled.textarea`
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const AllCurriculumsButton = styled(Link)`
    display: block;
    margin-top: 20px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    text-align: center;
    text-decoration: none;
    &:hover {
        background-color: #0056b3;
    }
    position: fixed;
    bottom: 20px;
    right: 20px;
`;

const CurriculumManagement = () => {
    const [selectedSection, setSelectedSection] = useState('Early Years');
    const [curriculumEntries, setCurriculumEntries] = useState([]);
    const [section, setSection] = useState('');
    const [grade, setGrade] = useState('');
    const [subject, setSubject] = useState('');
    const [lesson, setLesson] = useState('');
    const [timetable, setTimetable] = useState('');

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

    const addCurriculumEntry = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/curriculum-entries', {
                section,
                grade,
                subject,
                lesson,
                timetable,
            });
            setCurriculumEntries([...curriculumEntries, response.data]);
            // Clear form inputs after successful addition
            setSection('');
            setGrade('');
            setSubject('');
            setLesson('');
            setTimetable('');
            toast.success('Curriculum entry added successfully!');
        } catch (error) {
            toast.error('Error adding curriculum entry.');
            console.error('Error adding curriculum entry:', error);
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

    const handleSectionChange = (section) => {
        setSelectedSection(section);
    };

    return (
        <Container>
            <Sidebar />
            <ToastContainer />
            <SectionTitle>Curriculum Management</SectionTitle>
            <ButtonGroup>
                <Button onClick={() => handleSectionChange('Early Years')}>Early Years</Button>
                <Button onClick={() => handleSectionChange('Middle School')}>Middle School</Button>
                <Button onClick={() => handleSectionChange('Junior Secondary')}>Junior Secondary</Button>
            </ButtonGroup>

            <Form onSubmit={addCurriculumEntry}>
                <h3>Add New Curriculum Entry</h3>
                <Input
                    type="text"
                    placeholder="Section"
                    value={section}
                    onChange={(e) => setSection(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Lesson"
                    value={lesson}
                    onChange={(e) => setLesson(e.target.value)}
                />
                <TextArea
                    placeholder="Timetable"
                    value={timetable}
                    onChange={(e) => setTimetable(e.target.value)}
                />
                <Button type="submit">Add Entry</Button>
            </Form>

            {curriculumEntries
                .filter(entry => entry.section === selectedSection)
                .map((entry, index) => (
                    <CurriculumSection key={index}>
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
                        <Button onClick={() => deleteCurriculumEntry(entry.id)}>Delete</Button>
                    </CurriculumSection>
                ))}
            <AllCurriculumsButton to="/admin/all-curriculums">All Curriculums</AllCurriculumsButton>
        </Container>
    );
}

export default CurriculumManagement;
