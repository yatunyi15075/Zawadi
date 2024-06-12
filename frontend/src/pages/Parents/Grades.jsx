import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const GradesContainer = styled.div`
  padding: 20px;
`;

const SubjectGrade = styled.div`
  margin-bottom: 10px;
`;

const SubjectTitle = styled.h3`
  color: #333;
`;

const GradeList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const GradeItem = styled.li`
  margin-bottom: 5px;
`;

const ChildGrades = () => {
  // Sample data representing child's grades in different subjects
  const [grades, setGrades] = useState({
    Mathematics: 'A',
    English: 'B+',
    Science: 'A-',
    History: 'B',
    Art: 'A',
  });

  return (
    <GradesContainer>
      <h2>Grades</h2>
      {Object.entries(grades).map(([subject, grade]) => (
        <SubjectGrade key={subject}>
          <SubjectTitle>{subject}</SubjectTitle>
          <GradeList>
            <GradeItem>{grade}</GradeItem>
          </GradeList>
        </SubjectGrade>
      ))}
    </GradesContainer>
  );
};

export default ChildGrades;
