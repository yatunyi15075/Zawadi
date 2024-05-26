import React from 'react';
import styled from 'styled-components';
import AdvancedAnalytics from './AdvancedAnalytics';
import IntegrationOptions from './IntergrationOptions';
import SystemSettings from './SystemSettings';
import UserManagement from './UserManagement';

// Styled components
const DashboardContainer = styled.div`
  padding: 20px;
`;

const SectionHeading = styled.h2`
  margin-bottom: 20px;
`;

const SuperAdminDashboard = () => {
  return (
    <DashboardContainer>
      <SectionHeading>Advanced Analytics</SectionHeading>
      <AdvancedAnalytics />

      <SectionHeading>Integration Options</SectionHeading>
      <IntegrationOptions />

      <SectionHeading>System Settings</SectionHeading>
      <SystemSettings />

      <SectionHeading>User Management</SectionHeading>
      <UserManagement />
    </DashboardContainer>
  );
};

export default SuperAdminDashboard;
