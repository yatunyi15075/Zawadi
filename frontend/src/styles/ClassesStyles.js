// ClassesStyles.js
import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'; // Import edit and delete icons from react-icons

export const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px; /* Adjusted padding */
  background-color: #f7f9fc;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    padding-left: 0;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const ClassesContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column; /* Ensures children stack vertically */
  gap: 20px; /* Adds vertical spacing between elements */
`;

export const ClassesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Section = styled.section`
  background: white;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
`;

export const ClassList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ClassItem = styled.li`
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  color: #333;
  display: flex;
  justify-content: space-between; /* Align delete and edit icons */
  align-items: center; /* Align delete and edit icons */
`;

export const AddClassForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const AddClassInput = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const AddClassButton = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export const ClassContainer = styled.div`
  display: flex;
`;

export const SidebarContainer = styled.div`
  flex: 0 0 250px; /* Sidebar width */
`;

export const ClassHeader = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const GradeHeader = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const CategorySection = styled.div`
  margin-top: 20px;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 20px;
`;

export const CategoryItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  padding: 10px;
  color: #333;
  border: 2px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  ${({ active }) =>
    active &&
    `
    border-color: #4caf50;
    background-color: #e7f5ea;
  `}
`;

export const CategoryTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

// Styled component for Edit icon
export const EditIcon = styled(AiFillEdit)`
  cursor: pointer;
  color: #4caf50; /* Green color */
  font-size: 1.5rem; /* Adjust icon size */
  transition: color 0.3s;

  &:hover {
    color: #45a049; /* Darker green color on hover */
  }
`;

// Styled component for Delete icon
export const DeleteIcon = styled(AiFillDelete)`
  cursor: pointer;
  color: #f44336; /* Red color */
  font-size: 1.5rem; /* Adjust icon size */
  transition: color 0.3s;

  &:hover {
    color: #e53935; /* Darker red color on hover */
  }
`;
