import styled from 'styled-components';

export const StudentsContainer = styled.div`
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
`;

export const StudentsContent = styled.div`
  padding: 20px;
`;

export const StudentsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const StudentList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StudentItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StudentDetails = styled.div`
  flex: 1 1 200px;
  margin-right: 20px;
  min-width: 150px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #c82333;
  }
`;

export const UpdateButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin-left: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

export const IconWrapper = styled.span`
  margin-left: 5px;
`;

export const AddStudentForm = styled.form`
  margin-bottom: 20px;
`;

export const AddStudentInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const AddStudentButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const SelectOption = styled.option`
  font-size: 16px;
`;
