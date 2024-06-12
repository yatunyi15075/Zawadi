import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const Container = styled.div`
    padding: 20px;
`;

const SectionTitle = styled.h2`
    margin-bottom: 10px;
`;

const CurriculumManagement = () => {
    // Hardcoded curriculum data
    const curriculumData = [
        { grade: 'Grade 1', subjects: ['Mathematics', 'English', 'Science'] },
        { grade: 'Grade 2', subjects: ['Mathematics', 'English', 'Science'] },
        { grade: 'Grade 3', subjects: ['Mathematics', 'English', 'Science'] },
        // Add more grades and subjects as needed
    ];

    return (
        <Container>
           <Sidebar />
            <SectionTitle>Curriculum Management</SectionTitle>
            {curriculumData.map((gradeData, index) => (
                <div key={index}>
                    <h3>{gradeData.grade}</h3>
                    <ul>
                        {gradeData.subjects.map((subject, subIndex) => (
                            <li key={subIndex}>{subject}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </Container>
    );
}

export default CurriculumManagement;
