import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TeacherSidebar from './Sidebar';
import axios from 'axios';

// Styled components
const LessonPlansContainer = styled.div`
  padding: 20px;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NavigationButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
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

const Select = styled.select`
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

const Timetable = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const TimetableItem = styled.div`
  margin-bottom: 10px;
`;

const LessonPlans = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [classes, setClasses] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [view, setView] = useState('lessonPlans');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/class/getall');
      setClasses(response.data.classes);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleAddLesson = async () => {
    if (lessonTitle && lessonContent && selectedClass) {
      const newLesson = {
        title: lessonTitle,
        content: lessonContent,
        classId: selectedClass,
      };
      try {
        const response = await axios.post('http://localhost:4000/api/v1/lessons', newLesson);
        setLessons([...lessons, response.data.lesson]);
        setLessonTitle('');
        setLessonContent('');
        setSelectedClass('');
      } catch (error) {
        console.error('Error adding lesson:', error);
      }
    } else {
      alert('Please enter the title, content, and select a class for the lesson plan.');
    }
  };

  const fetchTimetable = async (classId) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/timetable/${classId}`);
      setTimetable(response.data.timetable);
    } catch (error) {
      console.error('Error fetching timetable:', error);
    }
  };

  const handleViewTimetable = (classId) => {
    setView('timetable');
    fetchTimetable(classId);
  };

  return (
    <LessonPlansContainer>
      <TeacherSidebar />
      <NavigationButtons>
        <NavigationButton onClick={() => setView('lessonPlans')}>Create Lesson Plan</NavigationButton>
        <NavigationButton onClick={() => setView('timetable')}>View Timetable</NavigationButton>
      </NavigationButtons>
      {view === 'lessonPlans' ? (
        <>
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
            <Select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="" disabled>Select class</option>
              {classes.map((classItem) => (
                <option key={classItem._id} value={classItem._id}>{classItem.grade}</option>
              ))}
            </Select>
            <AddLessonButton type="button" onClick={handleAddLesson}>Add Lesson</AddLessonButton>
          </LessonForm>
          {lessons.map((lesson, index) => (
            <LessonPlan key={index}>
              <LessonTitle>{lesson.title}</LessonTitle>
              <LessonContent>{lesson.content}</LessonContent>
            </LessonPlan>
          ))}
        </>
      ) : (
        <>
          <h2>Timetable</h2>
          <Select
            value={selectedClass}
            onChange={(e) => handleViewTimetable(e.target.value)}
          >
            <option value="" disabled>Select class</option>
            {classes.map((classItem) => (
              <option key={classItem._id} value={classItem._id}>{classItem.grade}</option>
            ))}
          </Select>
          {timetable.map((item, index) => (
            <TimetableItem key={index}>
              <strong>{item.day}</strong>: {item.subject} - {item.time}
            </TimetableItem>
          ))}
        </>
      )}
    </LessonPlansContainer>
  );
}

export default LessonPlans;
