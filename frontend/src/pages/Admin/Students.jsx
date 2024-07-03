// Students.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
  Select,
} from '../../styles/StudentsStyles'; 

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    registrationNumber: '',
    grade: '',
    parentName: '',
    parentEmail: '',
    parentPhone: ''
  });
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetchStudents();
    fetchClasses();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/students');
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      setClasses(response.data.classes);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const { name, registrationNumber, grade, parentName, parentEmail, parentPhone } = newStudent;
    if (name.trim() !== '' && registrationNumber.trim() !== '' && grade.trim() !== '' && parentName.trim() !== '' && parentEmail.trim() !== '' && parentPhone.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/students', newStudent);
        setStudents([...students, response.data.student]);
        setNewStudent({
          name: '',
          registrationNumber: '',
          grade: '',
          parentName: '',
          parentEmail: '',
          parentPhone: ''
        });
      } catch (error) {
        console.error('Error adding student:', error);
      }
    }
  };

  return (
    <StudentsContainer>
      <Sidebar />
      <Content>
        <StudentsContent>
          <StudentsHeader>Students</StudentsHeader>
          <AddStudentForm onSubmit={handleAddStudent}>
            <AddStudentInput
              type="text"
              placeholder="Enter student name"
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
            />
            <AddStudentInput
              type="text"
              placeholder="Enter registration number"
              value={newStudent.registrationNumber}
              onChange={(e) => setNewStudent({ ...newStudent, registrationNumber: e.target.value })}
            />
            <Select
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
            >
              <option value="" disabled>Select class</option>
              {classes.map((classItem) => (
                <option key={classItem._id} value={classItem.grade}>{classItem.grade}</option>
              ))}
            </Select>
            <AddStudentInput
              type="text"
              placeholder="Enter parent/guardian name"
              value={newStudent.parentName}
              onChange={(e) => setNewStudent({ ...newStudent, parentName: e.target.value })}
            />
            <AddStudentInput
              type="email"
              placeholder="Enter parent/guardian email"
              value={newStudent.parentEmail}
              onChange={(e) => setNewStudent({ ...newStudent, parentEmail: e.target.value })}
            />
            <AddStudentInput
              type="text"
              placeholder="Enter parent/guardian phone number"
              value={newStudent.parentPhone}
              onChange={(e) => setNewStudent({ ...newStudent, parentPhone: e.target.value })}
            />
            <AddStudentButton type="submit">Add Student</AddStudentButton>
          </AddStudentForm>
          <StudentList>
            {students.map((student) => (
              <StudentItem key={student.id}>
                {student.name} - {student.registrationNumber} - {student.grade} - {student.parentName} - {student.parentEmail} - {student.parentPhone}
              </StudentItem>
            ))}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
};

export default Students;
