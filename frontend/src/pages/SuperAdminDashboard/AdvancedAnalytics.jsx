import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
`;

const AnalyticsChartContainer = styled.div`
  margin-top: 20px;
`;

const AdvancedAnalytics = () => {
  const [schools, setSchools] = useState([]);
  const [selectedSchool, setSelectedSchool] = useState(null);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schools');
      setSchools(response.data);
      toast.success('Schools loaded successfully!');
    } catch (error) {
      toast.error('Failed to fetch schools. Please try again.');
    }
  };

  const handleSchoolSelect = (school) => {
    setSelectedSchool(school);
  };

  const renderChart = () => {
    if (!selectedSchool) return null;

    const regionData = calculateRegionData();

    return (
      <AnalyticsChartContainer>
        <h3>{selectedSchool.name}</h3>
        <p>Total Students: {selectedSchool.number_of_students}</p>
        <p>Total Teachers: {selectedSchool.teachers}</p>
        <p>Revenue: ${selectedSchool.revenue}</p>
        <p>Expenses: ${selectedSchool.expenses}</p>
        <p>Profit: ${selectedSchool.profit}</p>
        <Bar
          data={{
            labels: regionData.labels,
            datasets: [
              {
                label: 'Schools by Region',
                data: regionData.data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.6)',
                  'rgba(54, 162, 235, 0.6)',
                  'rgba(255, 206, 86, 0.6)',
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
                title: {
                  display: true,
                  text: 'Number of Schools',
                },
              },
              x: {
                title: {
                  display: true,
                  text: 'Region',
                },
              },
            },
          }}
        />
      </AnalyticsChartContainer>
    );
  };

  const calculateRegionData = () => {
    // Example function to calculate region data based on fetched schools
    const regions = {};
    schools.forEach((school) => {
      const region = school.location; // Assuming location represents region
      if (regions[region]) {
        regions[region] += 1;
      } else {
        regions[region] = 1;
      }
    });

    return {
      labels: Object.keys(regions),
      data: Object.values(regions),
    };
  };

  return (
    <AnalyticsContainer>
      <ToastContainer />
      <AnalyticsTitle>Advanced Analytics</AnalyticsTitle>
      <SchoolList>
        {schools.map((school) => (
          <SchoolItem key={school.id} onClick={() => handleSchoolSelect(school)}>
            {school.name}
          </SchoolItem>
        ))}
      </SchoolList>
      {renderChart()}
    </AnalyticsContainer>
  );
};

export default AdvancedAnalytics;
