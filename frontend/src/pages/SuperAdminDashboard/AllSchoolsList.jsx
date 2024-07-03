import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SchoolCard = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SchoolDetails = styled.div`
  flex-grow: 1;
`;

const SchoolName = styled.h3`
  margin: 0 0 10px;
  font-size: 1.5em;
`;

const SchoolInfo = styled.p`
  margin: 5px 0;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Icon = styled.div`
  cursor: pointer;
  color: #007bff;
  &:hover {
    color: #0056b3;
  }
`;

const AllSchoolsList = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetchSchools();
  }, []);

  const fetchSchools = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/schools');
      setSchools(response.data);
      toast.success('Schools loaded successfully!');
    } catch (error) {
      toast.error('Failed to fetch schools. Please try again.');
    }
  };

  const handleEdit = (id) => {
    // Placeholder for navigation or modal for editing
    toast.info(`Edit school with ID ${id}`);
    // Example of navigation
    // history.push(`/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/schools/${id}`);
      setSchools(schools.filter(school => school.id !== id));
      toast.success('School deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete school. Please try again.');
    }
  };

  return (
    <Container>
      <ToastContainer />
      {schools.map((school) => (
        <SchoolCard key={school.id}>
          <SchoolDetails>
            <SchoolName>{school.name}</SchoolName>
            <SchoolInfo>{school.location}</SchoolInfo>
            <SchoolInfo>{school.address}</SchoolInfo>
            <SchoolInfo>{school.director}</SchoolInfo>
            <SchoolInfo>Number of Students: {school.number_of_students}</SchoolInfo>
            <SchoolInfo>Plan: {school.plan}</SchoolInfo>
          </SchoolDetails>
          <IconContainer>
            <Icon onClick={() => handleEdit(school.id)}>
              <FaEdit size={20} />
            </Icon>
            <Icon onClick={() => handleDelete(school.id)}>
              <FaTrash size={20} />
            </Icon>
          </IconContainer>
        </SchoolCard>

      ))}
    </Container>
  );
};

export default AllSchoolsList;
