import React, { useState, useEffect } from 'react';
import TeacherSidebar from './Sidebar';
import axios from 'axios';
import {
  LessonPlansContainer,
  NavigationButtons,
  NavigationButton,
  LessonPlan,
  LessonTitle,
  LessonContent,
  LessonForm,
  LessonInput,
  LessonTextarea,
  Select,
  AddLessonButton,
  Timetable,
  TimetableItem,
} from '../../styles/lessonplansstyles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LessonPlans = () => {
  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [classes, setClasses] = useState([]);
  const [timetable, setTimetable] = useState([]);
  const [view, setView] = useState('lessonPlans');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClasses();
    fetchLessonPlans();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data.classes || []);
      setLoading(false);
      toast.success('Classes fetched successfully!');
    } catch (error) {
      console.error('Error fetching classes:', error);
      setLoading(false);
      toast.error('Error fetching classes!');
    }
  };

  const fetchLessonPlans = async () => {
    try {
      const response = await axios.get('http://localhost:5000/lesson-plans');
      setLessons(Array.isArray(response.data) ? response.data : []);
      toast.success('Lesson plans fetched successfully!');
    } catch (error) {
      console.error('Error fetching lesson plans:', error);
      toast.error('Error fetching lesson plans!');
    }
  };

  const handleAddLesson = async () => {
    if (lessonTitle && lessonContent && selectedClass) {
      const newLesson = {
        title: lessonTitle,
        content: lessonContent,
        class_id: selectedClass,
      };
      try {
        const response = await axios.post('http://localhost:5000/lesson-plans', newLesson);
        setLessons([...lessons, response.data]);
        setLessonTitle('');
        setLessonContent('');
        setSelectedClass('');
        toast.success('Lesson plan added successfully!');
      } catch (error) {
        console.error('Error adding lesson:', error);
        toast.error('Error adding lesson plan!');
      }
    } else {
      alert('Please enter the title, content, and select a class for the lesson plan.');
    }
  };

  const handleDeleteLesson = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/lesson-plans/${id}`);
      setLessons(lessons.filter(lesson => lesson.id !== id));
      toast.success('Lesson plan deleted successfully!');
    } catch (error) {
      console.error('Error deleting lesson:', error);
      toast.error('Error deleting lesson plan!');
    }
  };

  const handleViewTimetable = (classId) => {
    setView('timetable');
    fetchTimetable(classId);
  };

  const fetchTimetable = async (classId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/timetables/${classId}`);
      setTimetable(Array.isArray(response.data.timetable) ? response.data.timetable : []);
      toast.success('Timetable fetched successfully!');
    } catch (error) {
      console.error('Error fetching timetable:', error);
      toast.error('Error fetching timetable!');
    }
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
            {loading ? (
              <p>Loading classes...</p>
            ) : (
              <Select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
              >
                <option value="" disabled>Select class</option>
                {classes.map((classItem) => (
                  <option key={classItem.id} value={classItem.id}>{classItem.grade}</option>
                ))}
              </Select>
            )}
            <AddLessonButton type="button" onClick={handleAddLesson}>Add Lesson</AddLessonButton>
          </LessonForm>
          {lessons.length > 0 ? (
            lessons.map((lesson) => (
              <LessonPlan key={lesson.id}>
                <LessonTitle>{lesson.title}</LessonTitle>
                <LessonContent>{lesson.content}</LessonContent>
                <button onClick={() => handleDeleteLesson(lesson.id)}>Delete</button>
              </LessonPlan>
            ))
          ) : (
            <p>No lesson plans available.</p>
          )}
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
              <option key={classItem.id} value={classItem.id}>{classItem.grade}</option>
            ))}
          </Select>
          {timetable.length > 0 ? (
            timetable.map((item, index) => (
              <TimetableItem key={index}>
                <strong>{item.day}</strong>: {item.subject} - {item.time}
              </TimetableItem>
            ))
          ) : (
            <p>No timetable available for selected class.</p>
          )}
        </>
      )}
      <ToastContainer />
    </LessonPlansContainer>
  );
}

export default LessonPlans;
