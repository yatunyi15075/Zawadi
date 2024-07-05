import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TeacherSidebar from './Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEdit, FaTrash } from 'react-icons/fa';
import {
  AssignmentsContainer,
  Content,
  AssignmentsContent,
  AssignmentsHeader,
  AssignmentList,
  AssignmentItem,
  AddAssignmentForm,
  AddAssignmentInput,
  AddAssignmentTextArea,
  AddAssignmentButton
} from '../../styles/AssignmentsStyles';

const AssignmentSection = () => {
  const [newAssignment, setNewAssignment] = useState({ title: '', description: '', grade: '', deadline: '', type: '' });
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetchAssignments();
  }, []);

  const fetchAssignments = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/assignments');
      setAssignments(response.data); // assuming the response is a list of assignments
    } catch (error) {
      console.error('Error fetching assignments:', error);
      toast.error('Failed to fetch assignments');
    }
  };

  const handleAddAssignment = async (e) => {
    e.preventDefault();
    if (newAssignment.title.trim() !== '' && newAssignment.description.trim() !== '' &&
        newAssignment.grade.trim() !== '' && newAssignment.deadline.trim() !== '' && newAssignment.type.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/assignments', newAssignment);
        setAssignments([...assignments, response.data]);
        setNewAssignment({ title: '', description: '', grade: '', deadline: '', type: '' });
        toast.success('Assignment added successfully');
      } catch (error) {
        console.error('Error adding assignment:', error);
        toast.error('Failed to add assignment');
      }
    } else {
      toast.warning('Please fill in all fields');
    }
  };

  const handleDeleteAssignment = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/assignments/${id}`);
      setAssignments(assignments.filter(assignment => assignment.id !== id));
      toast.success('Assignment deleted successfully');
    } catch (error) {
      console.error('Error deleting assignment:', error);
      toast.error('Failed to delete assignment');
    }
  };

  const handleEditAssignment = (assignment) => {
    setNewAssignment(assignment);
  };

  return (
    <AssignmentsContainer>
      <TeacherSidebar />
      <Content>
        <AssignmentsContent>
          <AssignmentsHeader>Assignments</AssignmentsHeader>
          <AddAssignmentForm onSubmit={handleAddAssignment}>
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment title"
              value={newAssignment.title}
              onChange={(e) => setNewAssignment({ ...newAssignment, title: e.target.value })}
            />
            <AddAssignmentTextArea
              placeholder="Enter assignment description"
              value={newAssignment.description}
              onChange={(e) => setNewAssignment({ ...newAssignment, description: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment grade"
              value={newAssignment.grade}
              onChange={(e) => setNewAssignment({ ...newAssignment, grade: e.target.value })}
            />
            <AddAssignmentInput
              type="date"
              placeholder="Enter assignment deadline"
              value={newAssignment.deadline}
              onChange={(e) => setNewAssignment({ ...newAssignment, deadline: e.target.value })}
            />
            <AddAssignmentInput
              type="text"
              placeholder="Enter assignment type"
              value={newAssignment.type}
              onChange={(e) => setNewAssignment({ ...newAssignment, type: e.target.value })}
            />
            <AddAssignmentButton type="submit">Add Assignment</AddAssignmentButton>
          </AddAssignmentForm>
          <AssignmentList>
            {assignments && assignments.length > 0 ? assignments.map((assignment) => (
              <AssignmentItem key={assignment.id}>
                <strong>{assignment.title}: </strong>
                {assignment.description}, {assignment.grade}, {assignment.deadline}, {assignment.type}
                <FaEdit style={{ marginLeft: '10px', cursor: 'pointer', color: 'blue' }} onClick={() => handleEditAssignment(assignment)} />
                <FaTrash style={{ marginLeft: '10px', cursor: 'pointer', color: 'red' }} onClick={() => handleDeleteAssignment(assignment.id)} />
              </AssignmentItem>
            )) : (
              <p>No assignments available</p>
            )}
          </AssignmentList>
        </AssignmentsContent>
      </Content>
      <ToastContainer />
    </AssignmentsContainer>
  );
};

export default AssignmentSection;
