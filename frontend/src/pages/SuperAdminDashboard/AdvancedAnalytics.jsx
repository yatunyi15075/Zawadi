import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

// Sample data representing schools and their analytics
const schoolsData = [
  {
    id: 1,
    name: 'School A',
    students: 500,
    teachers: 30,
    revenue: 150000,
    expenses: 100000,
    profit: 50000,
    studentProgress: {
      Math: 75,
      English: 80,
      Science: 85,
    },
  },
  {
    id: 2,
    name: 'School B',
    students: 600,
    teachers: 40,
    revenue: 180000,
    expenses: 120000,
    profit: 60000,
    studentProgress: {
      Math: 70,
      English: 85,
      Science: 90,
    },
  },
  {
    id: 3,
    name: 'School C',
    students: 450,
    teachers: 25,
    revenue: 140000,
    expenses: 90000,
    profit: 50000,
    studentProgress: {
      Math: 80,
      English: 75,
      Science: 85,
    },
  },
];

// Styled components
const AnalyticsContainer = styled.div`
  padding: 20px;
`;

const AnalyticsTitle = styled.h2`
  margin-bottom: 20px;
`;

const SchoolList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SchoolItem = styled.li`
  margin-bottom: 20px;
`;

const AnalyticsChartContainer = styled.div`
  margin-bottom: 20px;
`;

const AdvancedAnalytics = () => {
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    // Fetch data or perform any necessary operations here
  }, []);

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
  };

  return (
    <AnalyticsContainer>
      <AnalyticsTitle>Advanced Analytics</AnalyticsTitle>
      <SchoolList>
        {schoolsData.map((school) => (
          <SchoolItem key={school.id} onClick={() => handleSchoolSelect(school)}>
            {school.name}
          </SchoolItem>
        ))}
      </SchoolList>
      {selectedSchool && (
        <>
          <h3>{selectedSchool.name}</h3>
          <p>Total Students: {selectedSchool.students}</p>
          <p>Total Teachers: {selectedSchool.teachers}</p>
          <p>Revenue: ${selectedSchool.revenue}</p>
          <p>Expenses: ${selectedSchool.expenses}</p>
          <p>Profit: ${selectedSchool.profit}</p>
          <AnalyticsChartContainer>
            <Bar
              data={{
                labels: Object.keys(selectedSchool.studentProgress),
                datasets: [
                  {
                    label: 'Student Progress',
                    data: Object.values(selectedSchool.studentProgress),
                    backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                    min: 0,
                    max: 100,
                    ticks: {
                      stepSize: 10,
                    },
                    title: {
                      display: true,
                      text: 'Progress (%)',
                    },
                  },
                },
              }}
            />
          </AnalyticsChartContainer>
        </>
      )}
    </AnalyticsContainer>
  );
};

export default AdvancedAnalytics;
