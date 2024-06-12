import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

// Styled components
const GradesContainer = styled.div`
  padding: 20px;
`;

const SubjectGrade = styled.div`
  margin-bottom: 20px;
`;

const SubjectName = styled.h3`
  margin-bottom: 10px;
`;

const GradeLabel = styled.span`
  font-weight: bold;
`;

const PerformanceLevel = styled.span`
  margin-left: 10px;
  font-style: italic;
`;

const Grades = () => {
  return (
    <GradesContainer>
        <Sidebar />
      <h2>Grades</h2>
      <SubjectGrade>
        <SubjectName>Mathematics</SubjectName>
        <p><GradeLabel>Grade:</GradeLabel> 85</p>
        <p><PerformanceLevel>Exceeds Expectations</PerformanceLevel></p>
      </SubjectGrade>
      <SubjectGrade>
        <SubjectName>English</SubjectName>
        <p><GradeLabel>Grade:</GradeLabel> 78</p>
        <p><PerformanceLevel>Meets Expectations</PerformanceLevel></p>
      </SubjectGrade>
      <SubjectGrade>
        <SubjectName>Science</SubjectName>
        <p><GradeLabel>Grade:</GradeLabel> 65</p>
        <p><PerformanceLevel>Average</PerformanceLevel></p>
      </SubjectGrade>
      <SubjectGrade>
        <SubjectName>History</SubjectName>
        <p><GradeLabel>Grade:</GradeLabel> 55</p>
        <p><PerformanceLevel>Below Average</PerformanceLevel></p>
      </SubjectGrade>
      {/* Add more subjects with grades and performance levels as needed */}
    </GradesContainer>
  );
}

export default Grades;
