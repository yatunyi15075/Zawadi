import React from 'react';
import {
  StudentDashboardContainer,
  Content,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../../styles/DashboardStyles';

const StudentDashboard = () => {
  return (
    <StudentDashboardContainer>
      <Content>
        <Section>
          <SectionTitle>Overview</SectionTitle>
          <CardContainer>
            <Card>
              <CardTitle>Assignments</CardTitle>
              <CardContent>5</CardContent>
            </Card>
            <Card>
              <CardTitle>Performance</CardTitle>
              <CardContent>500</CardContent>
            </Card>
            <Card>
              <CardTitle>Term</CardTitle>
              <CardContent>1</CardContent>
            </Card>
          </CardContainer>
        </Section>

        <Section>
          <SectionTitle>Recent Activity</SectionTitle>
          {/* Add a list of recent activity items */}
        </Section>

        <Section>
          <SectionTitle>Upcoming Events</SectionTitle>
          {/* Add a calendar or list of upcoming events */}
        </Section>
      </Content>
    </StudentDashboardContainer>
  );
};

export default StudentDashboard;
