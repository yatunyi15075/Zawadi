import React from 'react';
import styled from 'styled-components';

// Styled components
const IntegrationContainer = styled.div`
  padding: 20px;
`;

const IntegrationTitle = styled.h2`
  margin-bottom: 20px;
`;

const IntegrationOptionsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const IntegrationOptionItem = styled.li`
  margin-bottom: 10px;
`;

const IntegrationOptionButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const IntegrationOptions = () => {
  const handleIntegrationOptionClick = (option) => {
    // Implement logic for each integration option
    console.log(`Integration option clicked: ${option}`);
  };

  return (
    <IntegrationContainer>
      <IntegrationTitle>Integration Options</IntegrationTitle>
      <IntegrationOptionsList>
        <IntegrationOptionItem>
          <IntegrationOptionButton onClick={() => handleIntegrationOptionClick('Google Classroom')}>
            Integrate with Google Classroom
          </IntegrationOptionButton>
        </IntegrationOptionItem>
        <IntegrationOptionItem>
          <IntegrationOptionButton onClick={() => handleIntegrationOptionClick('Microsoft Teams')}>
            Integrate with Microsoft Teams
          </IntegrationOptionButton>
        </IntegrationOptionItem>
        <IntegrationOptionItem>
          <IntegrationOptionButton onClick={() => handleIntegrationOptionClick('Zoom')}>
            Integrate with Zoom
          </IntegrationOptionButton>
        </IntegrationOptionItem>
        {/* Add more integration options as needed */}
      </IntegrationOptionsList>
    </IntegrationContainer>
  );
};

export default IntegrationOptions;
