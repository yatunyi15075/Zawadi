import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AnnouncementContainer,
  Content,
  Title,
  AnnouncementForm,
  FormGroup,
  Label,
  TextArea,
  Button,
  AnnouncementList,
  AnnouncementItem,
  AnnouncementContent,
  Select,
  ActionButtons,
} from '../../styles/AnnouncementStyles'; // Ensure you have styles imported correctly

const Announcement = () => {
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [selectedSection, setSelectedSection] = useState('Early Years');

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/announcements');
      setAnnouncements(response.data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/announcements', {
        announcement: announcement,
        section: selectedSection,
      });
      toast.success('Announcement sent successfully');
      setAnnouncement('');
      fetchAnnouncements();
    } catch (error) {
      console.error('Error sending announcement:', error);
      toast.error('Error sending announcement');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/announcements/${id}`);
      toast.success('Announcement deleted successfully');
      fetchAnnouncements();
    } catch (error) {
      console.error('Error deleting announcement:', error);
      toast.error('Error deleting announcement');
    }
  };

  const handleEdit = async (id) => {
    // Implement edit functionality if needed
    console.log('Edit announcement with id:', id);
  };

  return (
    <AnnouncementContainer>
      <ToastContainer />
      <Sidebar />
      <Content>
        <Title>Announcement</Title>
        <AnnouncementForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="section">Select Section:</Label>
            <Select
              id="section"
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              required
            >
              <option value="All Parents">All Parents</option>
              <option value="Early Years">Early Years</option>
              <option value="Middle School">Middle School</option>
              <option value="Junior Secondary">Junior Secondary</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="announcement">Announcement:</Label>
            <TextArea
              id="announcement"
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              required
              rows={4}
              cols={50}
            />
          </FormGroup>
          <Button type="submit">Send Announcement</Button>
        </AnnouncementForm>

        <h2>Announcements</h2>
        <AnnouncementList>
          {announcements.map((announcement) => (
            <AnnouncementItem key={announcement.id}>
              <AnnouncementContent>
                {announcement.announcement} (Section: {announcement.section})
              </AnnouncementContent>
              <ActionButtons>
                <Button onClick={() => handleEdit(announcement.id)}>Edit</Button>
                <Button onClick={() => handleDelete(announcement.id)}>Delete</Button>
              </ActionButtons>
            </AnnouncementItem>
          ))}
        </AnnouncementList>
      </Content>
    </AnnouncementContainer>
  );
};

export default Announcement;
