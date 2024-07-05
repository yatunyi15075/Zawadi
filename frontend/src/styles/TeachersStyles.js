// TeachersStyles.js
import styled from 'styled-components';
import { FaTrash, FaEdit } from 'react-icons/fa';

export const TeachersContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

export const TeachersContent = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TeachersHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

export const TeacherList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TeacherItem = styled.li`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TeacherInfo = styled.div`
  flex: 1;
`;

export const TeacherName = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  color: #333;
`;

export const TeacherEmail = styled.p`
  font-size: 14px;
  color: #666;
`;

export const TeacherSubject = styled.p`
  font-size: 14px;
  color: #666;
`;

export const TeacherPhone = styled.p`
  font-size: 14px;
  color: #666;
`;

export const TeacherClasses = styled.p`
  font-size: 14px;
  color: #666;
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  color: #007bff;
`;

export const DeleteIcon = styled(FaTrash)`
  font-size: 18px;
`;

export const EditIcon = styled(FaEdit)`
  font-size: 18px;
`;

export const AddTeacherForm = styled.form`
  margin-bottom: 20px;
`;

export const AddTeacherInput = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const AddTeacherButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const NoTeachersMessage = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;
