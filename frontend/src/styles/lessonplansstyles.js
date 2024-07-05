// styles/lessonplansstyles.js

import styled from 'styled-components';

export const LessonPlansContainer = styled.div`
  padding: 20px;
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const NavigationButton = styled.button`
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

export const LessonPlan = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const LessonTitle = styled.h3`
  color: #333;
`;

export const LessonContent = styled.p`
  color: #555;
`;

export const LessonForm = styled.form`
  margin-bottom: 20px;
`;

export const LessonInput = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

export const LessonTextarea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

export const Select = styled.select`
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
`;

export const AddLessonButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Timetable = styled.div`
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

export const TimetableItem = styled.div`
  margin-bottom: 10px;
`;
