import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const SchoolManagementContainer = styled.div`
  padding: 20px;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const SchoolList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SchoolItem = styled.li`
  margin-bottom: 20px;
`;

const SchoolInfo = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
`;

const SchoolActions = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const SchoolManagement = () => {
  // Sample school data
  const [schools, setSchools] = useState([
    { id: 1, name: 'Example School', address: '123 Main St, City' },
    { id: 2, name: 'Another School', address: '456 Elm St, Town' },
    { id: 3, name: 'New School', address: '789 Oak St, Village' },
  ]);

  return (
    <SchoolManagementContainer>
      <Heading>School Management</Heading>
      <SchoolList>
        {schools.map((school) => (
          <SchoolItem key={school.id}>
            <SchoolInfo>
              <strong>Name:</strong> {school.name}<br />
              <strong>Address:</strong> {school.address}
            </SchoolInfo>
            <SchoolActions>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </SchoolActions>
          </SchoolItem>
        ))}
      </SchoolList>
      <Button>Add New School</Button>
    </SchoolManagementContainer>
  );
};

export default SchoolManagement;
