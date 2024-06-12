import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

// Styled components
const LearningMaterialsContainer = styled.div`
  padding: 20px;
`;

const SubjectSection = styled.div`
  margin-bottom: 30px;
`;

const SubjectTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const SubjectNotes = styled.p`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
`;

const NoteList = styled.ul`
  list-style-type: none;
  padding-left: 20px;
`;

const BookLink = styled.a`
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
`;

const LearningMaterials = () => {
  return (
    <LearningMaterialsContainer>
        <Sidebar />
      <h2>Learning Materials</h2>
      <SubjectSection>
        <SubjectTitle>Mathematics Notes</SubjectTitle>
        <SubjectNotes>Let's learn some cool math!</SubjectNotes>
        <NoteList>
          <li>Introduction to Counting</li>
          <li>Shapes and Colors</li>
          <li>Adding and Subtracting</li>
        </NoteList>
      </SubjectSection>
      <SubjectSection>
        <SubjectTitle>English Notes</SubjectTitle>
        <SubjectNotes>Ready to read and write?</SubjectNotes>
        <NoteList>
          <li>Learning the Alphabet</li>
          <li>Story Time</li>
          <li>Writing Fun</li>
        </NoteList>
      </SubjectSection>
      <SubjectSection>
        <SubjectTitle>Science Notes</SubjectTitle>
        <SubjectNotes>Exploring the wonders of nature!</SubjectNotes>
        <NoteList>
          <li>Plants and Animals</li>
          <li>Weather and Seasons</li>
          <li>Our Solar System</li>
        </NoteList>
      </SubjectSection>
      <SubjectSection>
        <SubjectTitle>Online Books</SubjectTitle>
        <SubjectNotes>Let's dive into some magical stories!</SubjectNotes>
        <NoteList>
          <li>Mathematics: <BookLink href="https://example.com/mathematics-book">Mathematics Book</BookLink></li>
          <li>English: <BookLink href="https://example.com/english-book">English Book</BookLink></li>
          <li>Science: <BookLink href="https://example.com/science-book">Science Book</BookLink></li>
        </NoteList>
      </SubjectSection>
    </LearningMaterialsContainer>
  );
}

export default LearningMaterials;
