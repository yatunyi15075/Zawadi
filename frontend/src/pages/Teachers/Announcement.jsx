import React from 'react';
import styled from 'styled-components';
import TeacherSidebar from './Sidebar';

const MainContainer = styled.div`
  margin-left: 260px; /* Adjust this if your sidebar width changes */
  padding: 20px;
`;

const AnnouncementContainer = styled.div`
  padding: 20px;
  margin: 10px 0;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const AnnouncementTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #333;
`;

const AnnouncementContent = styled.p`
  margin: 0;
  font-size: 14px;
  color: #555;
`;

const AnnouncementItem = ({ title, content }) => (
  <AnnouncementContainer>
    <AnnouncementTitle>{title}</AnnouncementTitle>
    <AnnouncementContent>{content}</AnnouncementContent>
  </AnnouncementContainer>
);

const Announcement = () => {
  const announcements = [
    { id: 1, title: 'Important Update', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'School Closure', content: 'Due to unforeseen circumstances, school will be closed tomorrow.' },
    { id: 3, title: 'Upcoming Event', content: 'Reminder: Annual sports day is scheduled for next Friday.' },
  ];

  return (
    <>
      <TeacherSidebar />
      <MainContainer>
        <h2>Announcement Section</h2>
        {announcements.map((announcement) => (
          <AnnouncementItem key={announcement.id} title={announcement.title} content={announcement.content} />
        ))}
      </MainContainer>
    </>
  );
};

export default Announcement;
