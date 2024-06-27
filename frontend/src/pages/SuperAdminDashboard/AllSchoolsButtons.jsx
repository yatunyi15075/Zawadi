import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavButton = styled(Link)`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 0 10px;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #45a049;
  }
`;

const AllSchoolsButtons = () => {
  return (
    <ButtonContainer>
      <NavButton to="/super-admin/schools/add-school">Add School</NavButton>
      <NavButton to="/super-admin/schools/all-schools">All Schools</NavButton>
    </ButtonContainer>
  );
};

export default AllSchoolsButtons;
