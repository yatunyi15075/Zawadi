// SuperAdminDashboard.js
import React from 'react';
import styled from 'styled-components';
import AdvancedAnalytics from './AdvancedAnalytics';
import IntegrationOptions from './IntergrationOptions';
import SystemSettings from './SystemSettings';
import UserManagement from './UserManagement';

// Styled components
const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  background-color: #f7f9fc; /* Light background color */
  min-height: 100vh;
`;

const Section = styled.section`
  background: white;
  padding: 20px 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionHeading = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Card = styled.div`
  flex: 1;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #4caf50;
`;

const CardContent = styled.p`
  font-size: 14px;
  color: #555;
`;

const SuperAdminDashboard = () => {
  return (
    <DashboardContainer>
      <Section>
        <SectionHeading>Advanced Analytics</SectionHeading>
        <AdvancedAnalytics />
      </Section>

      <Section>
        <SectionHeading>Integration Options</SectionHeading>
        <IntegrationOptions />
      </Section>

      <Section>
        <SectionHeading>System Settings</SectionHeading>
        <SystemSettings />
      </Section>

      <Section>
        <SectionHeading>User Management</SectionHeading>
        <UserManagement />
      </Section>

      <Section>
        <SectionHeading>Quick Overview</SectionHeading>
        <CardContainer>
          <Card>
            <CardTitle>Total Users</CardTitle>
            <CardContent>1,230</CardContent>
          </Card>
          <Card>
            <CardTitle>Active Users</CardTitle>
            <CardContent>980</CardContent>
          </Card>
          <Card>
            <CardTitle>New Sign-ups</CardTitle>
            <CardContent>150</CardContent>
          </Card>
        </CardContainer>
      </Section>

      <Section>
        <SectionHeading>Recent Activity</SectionHeading>
        <CardContainer>
          <Card>
            <CardTitle>Latest Updates</CardTitle>
            <CardContent>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardContent>
          </Card>
          <Card>
            <CardTitle>System Notifications</CardTitle>
            <CardContent>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardContent>
          </Card>
        </CardContainer>
      </Section>
    </DashboardContainer>
  );
};

export default SuperAdminDashboard;
