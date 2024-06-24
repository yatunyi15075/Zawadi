import React, { useState } from 'react';
import styled from 'styled-components';
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

const CurriculumManagement = () => {
    const [selectedSection, setSelectedSection] = useState('Early Years');

    const curriculumData = {
        'Early Years': [
            { grade: 'Pre-primary 1', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 12pm' },
            { grade: 'Pre-primary 2', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 12pm' },
        ],
        'Middle School': [
            { grade: 'Grade 4', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 3pm' },
            { grade: 'Grade 5', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 3pm' },
            { grade: 'Grade 6', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 3pm' },
        ],
        'Junior Secondary': [
            { grade: 'Grade 7', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 3pm' },
            { grade: 'Grade 8', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 3pm' },
            { grade: 'Grade 9', subjects: ['Mathematics', 'English', 'Science'], lessons: ['Lesson 1', 'Lesson 2'], timetable: 'Monday - Friday: 8am - 3pm' },
        ],
    };

    return (
        <Container>
            <Sidebar />
            <SectionTitle>Curriculum Management</SectionTitle>
            <ButtonGroup>
                <Button onClick={() => setSelectedSection('Early Years')}>Early Years</Button>
                <Button onClick={() => setSelectedSection('Middle School')}>Middle School</Button>
                <Button onClick={() => setSelectedSection('Junior Secondary')}>Junior Secondary</Button>
            </ButtonGroup>
            {curriculumData[selectedSection].map((gradeData, index) => (
                <CurriculumSection key={index}>
                    <h3>{gradeData.grade}</h3>
                    <ul>
                        {gradeData.subjects.map((subject, subIndex) => (
                            <li key={subIndex}>{subject}</li>
                        ))}
                    </ul>
                    <LessonPlan>
                        <h4>Lesson Plans</h4>
                        <ul>
                            {gradeData.lessons.map((lesson, lessonIndex) => (
                                <li key={lessonIndex}>{lesson}</li>
                            ))}
                        </ul>
                    </LessonPlan>
                    <Schedule>
                        <h4>Timetable</h4>
                        <p>{gradeData.timetable}</p>
                    </Schedule>
                </CurriculumSection>
            ))}
        </Container>
    );
}

export default CurriculumManagement;
