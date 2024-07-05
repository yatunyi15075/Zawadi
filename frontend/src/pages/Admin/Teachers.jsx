import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { FaTrash, FaEdit } from 'react-icons/fa'; // Importing react-icons
import {
  TeachersContainer,
  Content,
  TeachersContent,
  TeachersHeader,
  TeacherList,
  TeacherItem,
  AddTeacherForm,
  AddTeacherInput,
  AddTeacherButton,
  ActionButtons, // Styled component for action buttons
} from '../../styles/TeachersStyles'; // Import styled components from TeachersStyles.js

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', phone: '', address: '', qualification: '' });
  const [teachers, setTeachers] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);

  useEffect(() => {
    fetchTeachers();
    fetchClasses();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/teachers');
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      setAvailableClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, qualification } = newTeacher;
    if (name.trim() !== '' && email.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/teachers', {
          name,
          email,
          phone,
          address,
          qualification,
        });
        const createdTeacher = response.data;
        setTeachers([...teachers, createdTeacher]);
        setNewTeacher({ name: '', email: '', phone: '', address: '', qualification: '' });
      } catch (error) {
        console.error('Error adding teacher:', error);
      }
    }
  };

  const handleDeleteTeacher = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/teachers/${id}`);
      const updatedTeachers = teachers.filter((teacher) => teacher.id !== id);
      setTeachers(updatedTeachers);
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  const handleEditTeacher = async (id) => {
    // Implement edit functionality as per your requirement
    console.log('Edit teacher with id:', id);
  };

  return (
    <TeachersContainer>
      <Sidebar />
      <Content>
        <TeachersContent>
          <TeachersHeader>Teachers</TeachersHeader>
          <AddTeacherForm onSubmit={handleAddTeacher}>
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher name"
              value={newTeacher.name}
              onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
            />
            <AddTeacherInput
              type="email"
              placeholder="Enter teacher email"
              value={newTeacher.email}
              onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher phone"
              value={newTeacher.phone}
              onChange={(e) => setNewTeacher({ ...newTeacher, phone: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher address"
              value={newTeacher.address}
              onChange={(e) => setNewTeacher({ ...newTeacher, address: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher qualification"
              value={newTeacher.qualification}
              onChange={(e) => setNewTeacher({ ...newTeacher, qualification: e.target.value })}
            />
            <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
          </AddTeacherForm>
          <TeacherList>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher.id}>
                <div>
                  <strong>Name:</strong> {teacher.name}
                </div>
                <div>
                  <strong>Email:</strong> {teacher.email}
                </div>
                <div>
                  <strong>Phone:</strong> {teacher.phone}
                </div>
                <div>
                  <strong>Address:</strong> {teacher.address}
                </div>
                <div>
                  <strong>Qualification:</strong> {teacher.qualification}
                </div>
                <ActionButtons>
                  <FaEdit onClick={() => handleEditTeacher(teacher.id)} />
                  <FaTrash onClick={() => handleDeleteTeacher(teacher.id)} />
                </ActionButtons>
              </TeacherItem>
            ))}
          </TeacherList>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
