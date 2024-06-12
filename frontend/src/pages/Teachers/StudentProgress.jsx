import React, { useState } from 'react';
import styled from 'styled-components';
import TeacherSidebar from './Sidebar';
import { Line } from 'react-chartjs-2';

// Styled components
const ProgressContainer = styled.div`
  padding: 20px;
`;

const ProgressSection = styled.div`
  margin-bottom: 20px;
`;

const SubjectTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

const ProgressChartContainer = styled.div`
  margin-bottom: 20px;
`;

const StudentListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StudentButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StudentProgress = () => {
  // Sample data representing student progress in different subjects
  const [studentData, setStudentData] = useState(null);
  const students = ['John Doe', 'Jane Smith', 'Michael Johnson'];

  const handleStudentSelect = (studentName) => {
    // Simulate fetching student data from an API or database
    // Replace with actual data fetching logic
    const data = {
      name: studentName,
      progress: {
        Mathematics: [70, 75, 80, 85, 90],
        English: [60, 65, 70, 75, 80],
        Science: [80, 85, 90, 95, 100],
        History: [50, 55, 60, 65, 70],
        Art: [65, 70, 75, 80, 85],
      },
    };
    setStudentData(data);
  };

  return (
    <>
    <TeacherSidebar />
    
    <ProgressContainer>
      <h2>Student Progress</h2>
      <ProgressChartContainer>
        {studentData && (
          <Line
            data={{
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
              datasets: Object.entries(studentData.progress).map(([subject, progress]) => ({
                label: subject,
                data: progress,
                borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16), // Random color
                fill: false,
              })),
            }}
            height={100} // Adjust the height here
          />
        )}
      </ProgressChartContainer>
      <StudentListContainer>
        {students.map((student, index) => (
          <StudentButton
            key={index}
            active={studentData && studentData.name === student}
            onClick={() => handleStudentSelect(student)}
          >
            {student}
          </StudentButton>
        ))}
      </StudentListContainer>
      {studentData && (
        <>
          <h3>{studentData.name}'s Progress</h3>
          {Object.entries(studentData.progress).map(([subject, progress], index) => (
            <ProgressSection key={index}>
              <SubjectTitle>{subject}</SubjectTitle>
              <Line
                data={{
                  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                  datasets: [{
                    label: `${studentData.name}'s ${subject} Progress`,
                    data: progress,
                    borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16), // Random color
                    fill: false,
                  }],
                }}
                height={50} // Adjust the height here
              />
            </ProgressSection>
          ))}
        </>
      )}
    </ProgressContainer>
    
    </>
  );
};

export default StudentProgress;
