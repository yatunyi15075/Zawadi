import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  StudentsContainer,
  Content,
  StudentsContent,
  StudentsHeader,
  StudentList,
  StudentItem,
  StudentDetails,
  Actions,
  AddStudentForm,
  AddStudentInput,
  AddStudentButton,
  Select,
  DeleteButton,
  UpdateButton,
  IconWrapper,
} from '../../styles/StudentsStyles';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    name: '',
    registrationNumber: '',
    grade: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    class_id: '', // Add class_id field
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
      console.log('Fetched students:', response.data);
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      console.log('Fetched classes:', response.data);
      setClasses(response.data);
    } catch (error) {
      console.error('Error fetching classes:', error);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const { name, registrationNumber, grade, parentName, parentEmail, parentPhone, class_id } = newStudent;

    console.log('New Student Data:', newStudent);

    if (
      name.trim() !== '' &&
      registrationNumber.trim() !== '' &&
      grade.trim() !== '' &&
      parentName.trim() !== '' &&
      parentEmail.trim() !== '' &&
      parentPhone.trim() !== '' &&
      class_id.trim() !== '' // Ensure class_id is not empty
    ) {
      try {
        const response = await axios.post('http://localhost:5000/api/students', newStudent, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        console.log('Student added successfully:', response.data);
        setStudents([...students, response.data]);
        setNewStudent({
          name: '',
          registrationNumber: '',
          grade: '',
          parentName: '',
          parentEmail: '',
          parentPhone: '',
          class_id: '', // Reset class_id field
        });
        toast.success('Student added successfully', { autoClose: 2000 });
      } catch (error) {
        console.error('Error adding student:', error.response?.data || error.message);
        toast.error('Failed to add student');
      }
    } else {
      toast.error('Please fill in all fields');
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
      toast.success('Student deleted successfully', { autoClose: 2000 });
    } catch (error) {
      console.error('Error deleting student:', error);
      toast.error('Failed to delete student');
    }
  };

  const handleUpdateStudent = async (id, updatedStudent) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/students/${id}`, updatedStudent);
      setStudents(students.map((student) => (student.id === id ? response.data : student)));
      toast.success('Student updated successfully', { autoClose: 2000 });
    } catch (error) {
      console.error('Error updating student:', error);
      toast.error('Failed to update student');
    }
  };

  return (
    <StudentsContainer>
      <ToastContainer />
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
              onChange={(e) =>
                setNewStudent({ ...newStudent, registrationNumber: e.target.value })
              }
            />
            <Select
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
            >
              <option value="" disabled>
                Select grade
              </option>
              {classes.map((classItem) => (
                <option key={classItem.id} value={classItem.grade}>
                  {classItem.grade}
                </option>
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
                <StudentDetails>
                  <strong>Name:</strong> {student.name}
                </StudentDetails>
                <StudentDetails>
                  <strong>Registration Number:</strong> {student.registrationNumber}
                </StudentDetails>
                <StudentDetails>
                  <strong>Grade:</strong> {student.grade}
                </StudentDetails>
                <StudentDetails>
                  <strong>Parent Name:</strong> {student.parentName}
                </StudentDetails>
                <StudentDetails>
                  <strong>Parent Email:</strong> {student.parentEmail}
                </StudentDetails>
                <StudentDetails>
                  <strong>Parent Phone:</strong> {student.parentPhone}
                </StudentDetails>
                <Actions>
                  <DeleteButton onClick={() => handleDeleteStudent(student.id)}>
                    Delete <IconWrapper><FaTrash /></IconWrapper>
                  </DeleteButton>
                  <UpdateButton onClick={() => handleUpdateStudent(student.id, { ...student, name: 'Updated Name' })}>
                    Update <IconWrapper><FaEdit /></IconWrapper>
                  </UpdateButton>
                </Actions>
              </StudentItem>
            ))}
          </StudentList>
        </StudentsContent>
      </Content>
    </StudentsContainer>
  );
}; 

export default Students;
