// Teachers.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
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
  Select,
} from '../../styles/TeachersStyles'; // Import styled components from TeachersStyles.js

const Teachers = () => {
  const [newTeacher, setNewTeacher] = useState({ name: '', email: '', subject: '', phoneNumber: '', classes: [] });
  const [teachers, setTeachers] = useState([]);
  const [availableClasses, setAvailableClasses] = useState([]);

  useEffect(() => {
    fetchTeachers();
    fetchClasses();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/teachers/getall');
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/class/getall');
      setAvailableClasses(response.data.classes);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    const { name, email, subject, phoneNumber, classes } = newTeacher;
    if (name.trim() !== '' && email.trim() !== '' && subject.trim() !== '' && phoneNumber.trim() !== '' && classes.length > 0) {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/teachers', newTeacher);
        const createdTeacher = response.data.teacher;
        setTeachers([...teachers, createdTeacher]);
        setNewTeacher({ name: '', email: '', subject: '', phoneNumber: '', classes: [] });
      } catch (error) {
        console.error('Error adding teacher:', error);
      }
    }
  };

  const handleClassChange = (e) => {
    const selectedClasses = Array.from(e.target.selectedOptions, (option) => option.value);
    setNewTeacher({ ...newTeacher, classes: selectedClasses });
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
              placeholder="Enter teacher subject"
              value={newTeacher.subject}
              onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
            />
            <AddTeacherInput
              type="text"
              placeholder="Enter teacher phone number"
              value={newTeacher.phoneNumber}
              onChange={(e) => setNewTeacher({ ...newTeacher, phoneNumber: e.target.value })}
            />
            <Select multiple value={newTeacher.classes} onChange={handleClassChange}>
              {availableClasses.map((classItem) => (
                <option key={classItem._id} value={classItem.grade}>{classItem.grade}</option>
              ))}
            </Select>
            <AddTeacherButton type="submit">Add Teacher</AddTeacherButton>
          </AddTeacherForm>
          <TeacherList>
            {teachers.map((teacher) => (
              <TeacherItem key={teacher.id}>
                {teacher.name} - {teacher.email} - {teacher.subject} - {teacher.phoneNumber} - {teacher.classes.join(', ')}
              </TeacherItem>
            ))}
          </TeacherList>
        </TeachersContent>
      </Content>
    </TeachersContainer>
  );
};

export default Teachers;
