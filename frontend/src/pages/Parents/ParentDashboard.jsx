// ParentDashboard.js
import React from 'react';
import styled from 'styled-components';
import ChildProgress from './ChildProgress';
import ChildGrades from './Grades';
import Attendance from './Attendance';
import Communication from './Communication';

// Styled components
const DashboardContainer = styled.div`
  padding: 20px;
`;

const SectionContainer = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 10px;
`;

const ParentDashboard = () => {
  return (
    <DashboardContainer>
      <SectionContainer>
        <SectionTitle>Child Progress</SectionTitle>
        <ChildProgress />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Grades</SectionTitle>
        <ChildGrades />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Attendance</SectionTitle>
        <Attendance />
      </SectionContainer>

      <SectionContainer>
        <SectionTitle>Communication</SectionTitle>
        <Communication />
      </SectionContainer>
    </DashboardContainer>
  );
}

export default ParentDashboard;
