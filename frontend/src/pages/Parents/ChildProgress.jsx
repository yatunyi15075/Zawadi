import React, { useState } from 'react';
import styled from 'styled-components';
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

const LineChart = styled(Line)`
  width: 100%;
`;

const ChildProgress = () => {
  // Sample data representing child progress in different subjects
  const [childData, setChildData] = useState(null);

  // Function to handle child selection
  const handleChildSelect = (childName) => {
    // Simulate fetching child data from an API or database
    // Replace with actual data fetching logic
    const data = {
      name: childName,
      progress: {
        Mathematics: [70, 75, 80, 85, 90],
        English: [60, 65, 70, 75, 80],
        Science: [80, 85, 90, 95, 100],
        History: [50, 55, 60, 65, 70],
        Art: [65, 70, 75, 80, 85],
      },
    };
    setChildData(data);
  };

  return (
    <ProgressContainer>
      <h2>Child Progress</h2>
      <ProgressChartContainer>
        {childData && (
          <LineChart
            data={{
              labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
              datasets: Object.entries(childData.progress).map(([subject, progress]) => ({
                label: subject,
                data: progress,
                borderColor: '#' + Math.floor(Math.random() * 16777215).toString(16), // Random color
                fill: false,
              })),
            }}
          />
        )}
      </ProgressChartContainer>
      <ProgressSection>
        <SubjectTitle>{childData && childData.name}'s Progress</SubjectTitle>
        <ul>
          {childData &&
            Object.entries(childData.progress).map(([subject, progress], index) => (
              <li key={index}>
                <strong>{subject}:</strong> {progress[progress.length - 1]}% Complete
              </li>
            ))}
        </ul>
      </ProgressSection>
      <div>
        <h3>Children</h3>
        <button onClick={() => handleChildSelect('John Doe')}>John Doe</button>
        <button onClick={() => handleChildSelect('Jane Smith')}>Jane Smith</button>
        <button onClick={() => handleChildSelect('Michael Johnson')}>Michael Johnson</button>
      </div>
    </ProgressContainer>
  );
};

export default ChildProgress;
