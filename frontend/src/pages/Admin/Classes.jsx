// Classes.jsx
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ClassesContainer,
  Content,
  ClassesContent,
  ClassesHeader,
  Section,
  SectionTitle,
  ClassList,
  ClassItem,
  AddClassForm,
  AddClassInput,
  AddClassButton,
  ClassContainer,
  SidebarContainer,
  ClassHeader,
  GradeHeader,
  Select,
  CategorySection,
  CategoryList,
  CategoryItem,
  CategoryTitle,
  EditIcon,
  DeleteIcon,
} from '../../styles/ClassesStyles';

const Classes = () => {
  const [newClassName, setNewClassName] = useState('');
  const [newClassCategory, setNewClassCategory] = useState('Early Years');
  const [classes, setClasses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Early Years');

  useEffect(() => {
    fetchClasses();
  }, []);

  const fetchClasses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/classes');
      if (response.data && Array.isArray(response.data)) {
        setClasses(response.data);
      } else {
        console.error('Error fetching classes: Invalid data format', response.data);
      }
    } catch (error) {
      console.error('Error fetching classes:', error.message);
    }
  };

  const handleAddClass = async (e) => {
    e.preventDefault();
    if (newClassName.trim() !== '') {
      try {
        const response = await axios.post('http://localhost:5000/api/classes', {
          grade: newClassName,
          category: newClassCategory,
        });
        setClasses((prevClasses) => {
          if (Array.isArray(prevClasses)) {
            return [...prevClasses, response.data];
          } else {
            console.error('Error adding class: Invalid state for classes:', prevClasses);
            return [];
          }
        });
        setNewClassName('');
        setNewClassCategory('Early Years');
        toast.success('Class added successfully');
      } catch (error) {
        console.error('Error adding class:', error);
        toast.error('Failed to add class');
      }
    }
  };

  const handleDeleteClass = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/classes/${id}`);
      setClasses((prevClasses) => prevClasses.filter((classItem) => classItem.id !== id));
      toast.success('Class deleted successfully');
    } catch (error) {
      console.error('Error deleting class:', error);
      toast.error('Failed to delete class');
    }
  };

  const handleEditClass = async (id, updatedClass) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/classes/${id}`, updatedClass);
      setClasses((prevClasses) =>
        prevClasses.map((classItem) => (classItem.id === id ? response.data : classItem))
      );
      toast.success('Class updated successfully');
    } catch (error) {
      console.error('Error updating class:', error);
      toast.error('Failed to update class');
    }
  };

  const filterClassesByCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <ClassesContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <ClassesContent>
          <ClassesHeader>Classes</ClassesHeader>
          <AddClassForm onSubmit={handleAddClass}>
            <AddClassInput
              type="text"
              placeholder="Enter class name"
              value={newClassName}
              onChange={(e) => setNewClassName(e.target.value)}
            />
            <Select
              value={newClassCategory}
              onChange={(e) => setNewClassCategory(e.target.value)}
            >
              <option value="Early Years">Early Years (PP1 - Grade 3)</option>
              <option value="Middle School">Middle School (Grade 4 - Grade 6)</option>
              <option value="Junior Secondary">Junior Secondary (Grade 7 - Grade 9)</option>
            </Select>
            <AddClassButton type="submit">Add Class</AddClassButton>
          </AddClassForm>
          <CategorySection>
            <CategoryTitle>Categories:</CategoryTitle>
            <CategoryList>
              <CategoryItem
                onClick={() => filterClassesByCategory('Early Years')}
                active={selectedCategory === 'Early Years'}
              >
                Early Years
              </CategoryItem>
              <CategoryItem
                onClick={() => filterClassesByCategory('Middle School')}
                active={selectedCategory === 'Middle School'}
              >
                Middle School
              </CategoryItem>
              <CategoryItem
                onClick={() => filterClassesByCategory('Junior Secondary')}
                active={selectedCategory === 'Junior Secondary'}
              >
                Junior Secondary
              </CategoryItem>
            </CategoryList>
          </CategorySection>
          <Section>
            <SectionTitle>{selectedCategory} Classes</SectionTitle>
            <ClassList>
              {Array.isArray(classes) &&
                classes
                  .filter((classItem) => classItem.category === selectedCategory)
                  .map((classItem) => (
                    <ClassItem key={classItem.id}>
                      {classItem.grade}
                      <div>
                        <EditIcon
                          onClick={() =>
                            handleEditClass(classItem.id, {
                              grade: `${classItem.grade} - Updated`, // Example of updating class name
                            })
                          }
                        />
                        <DeleteIcon onClick={() => handleDeleteClass(classItem.id)} />
                      </div>
                    </ClassItem>
                  ))}
            </ClassList>
          </Section>
        </ClassesContent>
      </Content>
      <ToastContainer />
    </ClassesContainer>
  );
};

export default Classes;
