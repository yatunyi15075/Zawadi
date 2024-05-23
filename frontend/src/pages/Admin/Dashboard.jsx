// AdminDashboard.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Announcement from './Announcement';
import axios from 'axios';
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  BottomContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
} from '../../styles/DashboardStyles';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [studentPerformance, setStudentPerformance] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);



  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/announcements/getall');
      setAnnouncements(response.data.announcements || []);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };


  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content isOpen={isOpen}>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>50</CardContent>
              </Card>
            </CardContainer>
          </Section>


        </TopContent>

        <BottomContent>
          <Announcement announcements={announcements} />
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
