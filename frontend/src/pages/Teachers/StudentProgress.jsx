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

const ClassListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ClassButton = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? '#007bff' : '#f0f0f0')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border: none;
  border-radius: 5px;
  cursor: pointer;
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

const GradesButton = styled.button`
  margin-left: 10px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const StudentProgress = () => {
  // Hard-coded sample data for CBC classes and students
  const [classData, setClassData] = useState(null); // State to hold selected class data
  const [studentData, setStudentData] = useState(null); // State to hold selected student data

  // Sample CBC classes and students
  const classes = [
    {
      id: 1,
      name: 'Early Childhood Development',
      students: [
        { id: 101, name: 'John Doe', progress: { Mathematics: [70, 75, 80, 85, 90], English: [60, 65, 70, 75, 80] }, grades: { Mathematics: 'A', English: 'B' } },
        { id: 102, name: 'Jane Smith', progress: { Mathematics: [65, 70, 75, 80, 85], English: [55, 60, 65, 70, 75] }, grades: { Mathematics: 'B', English: 'C' } },
      ],
    },
    {
      id: 2,
      name: 'Junior Secondary',
      students: [
        { id: 201, name: 'Michael Johnson', progress: { Mathematics: [80, 85, 90, 95, 100], English: [70, 75, 80, 85, 90] }, grades: { Mathematics: 'A', English: 'A' } },
        { id: 202, name: 'Emily Brown', progress: { Mathematics: [75, 80, 85, 90, 95], English: [65, 70, 75, 80, 85] }, grades: { Mathematics: 'B', English: 'B' } },
      ],
    },
    {
      id: 3,
      name: 'Senior Secondary',
      students: [
        { id: 301, name: 'William Turner', progress: { Mathematics: [85, 90, 95, 100, 95], Physics: [75, 80, 85, 90, 85] }, grades: { Mathematics: 'A', Physics: 'A' } },
        { id: 302, name: 'Olivia White', progress: { Mathematics: [90, 95, 100, 95, 90], Physics: [80, 85, 90, 85, 80] }, grades: { Mathematics: 'A', Physics: 'A' } },
      ],
    },
    {
      id: 4,
      name: 'Higher Education',
      students: [
        { id: 401, name: 'Daniel Green', progress: { ComputerScience: [85, 90, 95, 100, 95], Chemistry: [75, 80, 85, 90, 85] }, grades: { ComputerScience: 'A', Chemistry: 'A' } },
        { id: 402, name: 'Sophia Black', progress: { ComputerScience: [90, 95, 100, 95, 90], Chemistry: [80, 85, 90, 85, 80] }, grades: { ComputerScience: 'A', Chemistry: 'A' } },
      ],
    },
  ];

  const handleClassSelect = (classItem) => {
    // Set selected class data
    setClassData(classItem);
    // Reset selected student data
    setStudentData(null);
  };

  const handleStudentSelect = (student) => {
    // Set selected student data
    setStudentData(student);
  };

  const handleGradesClick = (grades) => {
    alert(`Grades: ${JSON.stringify(grades)}`);
    // You can implement logic to show grades in a modal or another section
  };

  return (
    <>
      <TeacherSidebar />

      <ProgressContainer>
        <h2>Student Progress</h2>

        <ClassListContainer>
          {classes.map((classItem) => (
            <ClassButton
              key={classItem.id}
              active={classData && classData.id === classItem.id}
              onClick={() => handleClassSelect(classItem)}
            >
              {classItem.name}
            </ClassButton>
          ))}
        </ClassListContainer>

        {classData && (
          <>
            <h3>{classData.name}</h3>

            <StudentListContainer>
              {classData.students.map((student) => (
                <div key={student.id}>
                  <StudentButton
                    active={studentData && studentData.id === student.id}
                    onClick={() => handleStudentSelect(student)}
                  >
                    {student.name}
                  </StudentButton>
                  <GradesButton onClick={() => handleGradesClick(student.grades)}>Grades</GradesButton>
                </div>
              ))}
            </StudentListContainer>

            {studentData && (
              <>
                <h3>{studentData.name}'s Progress</h3>
                {Object.entries(studentData.progress).map(([subject, progress], index) => (
                  <ProgressSection key={index}>
                    <SubjectTitle>{subject}</SubjectTitle>
                    <ProgressChartContainer>
                      <Line
                        data={{
                          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
                          datasets: [
                            {
                              label: `${studentData.name}'s ${subject} Progress`,
                              data: progress,
                              borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
                              fill: false,
                            },
                          ],
                        }}
                        height={50}
                      />
                    </ProgressChartContainer>
                  </ProgressSection>
                ))}
              </>
            )}
          </>
        )}
      </ProgressContainer>
    </>
  );
};

export default StudentProgress;
