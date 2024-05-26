import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

// Styled components
const LessonPlansContainer = styled.div`
  padding: 20px;
`;

const LessonPlan = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const LessonTitle = styled.h3`
  color: #333;
`;

const LessonContent = styled.p`
  color: #555;
`;

const LessonForm = styled.form`
  margin-bottom: 20px;
`;

const LessonInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

const LessonTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

const AddLessonButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const LessonPlans = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonContent, setLessonContent] = useState('');

  const handleAddLesson = () => {
    if (lessonTitle && lessonContent) {
      const newLesson = {
        title: lessonTitle,
        content: lessonContent,
      };
      setLessons([...lessons, newLesson]);
      setLessonTitle('');
      setLessonContent('');
    } else {
      alert('Please enter both the title and content for the lesson plan.');
    }
  };

  return (
    <LessonPlansContainer>
      <Sidebar />
      <h2>Lesson Plans</h2>
      <LessonForm>
        <LessonInput
          type="text"
          placeholder="Lesson Title"
          value={lessonTitle}
          onChange={(e) => setLessonTitle(e.target.value)}
        />
        <LessonTextarea
          placeholder="Lesson Content"
          value={lessonContent}
          onChange={(e) => setLessonContent(e.target.value)}
        />
        <AddLessonButton type="button" onClick={handleAddLesson}>Add Lesson</AddLessonButton>
      </LessonForm>
      {lessons.map((lesson, index) => (
        <LessonPlan key={index}>
          <LessonTitle>{lesson.title}</LessonTitle>
          <LessonContent>{lesson.content}</LessonContent>
        </LessonPlan>
      ))}
    </LessonPlansContainer>
  );
}

export default LessonPlans;
