import React, { useState } from 'react';
import styled from 'styled-components';

const AssessmentsContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: ${({ active }) => (active ? '#6BD4E7' : '#ccc')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#4CAAB1' : '#bbb')};
  }
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  background-color: #6BD4E7;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4CAAB1;
  }
`;

const Assessments = () => {
  const [activeTab, setActiveTab] = useState('summative'); // Default to Summative assessments
  const [newAssessment, setNewAssessment] = useState({
    title: '',
    description: '',
    type: '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewAssessment({ ...newAssessment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would implement logic to send newAssessment to the backend or update state accordingly
    console.log('New Assessment:', newAssessment);
    // Clear form after submission
    setNewAssessment({
      title: '',
      description: '',
      type: '',
    });
  };

  return (
    <AssessmentsContainer>
      <SectionTitle>Assessments</SectionTitle>
      <ButtonGroup>
        <Button active={activeTab === 'summative'} onClick={() => handleTabChange('summative')}>
          Summative Assessments
        </Button>
        <Button active={activeTab === 'formative'} onClick={() => handleTabChange('formative')}>
          Formative Assessments
        </Button>
      </ButtonGroup>
      {activeTab === 'summative' && (
        <div>
          <h3>Summative Assessments Content</h3>
          <p>Here teachers can view and send Summative assessments.</p>
        </div>
      )}
      {activeTab === 'formative' && (
        <div>
          <h3>Formative Assessments Content</h3>
          <p>Here teachers can view and send Formative assessments.</p>
          <FormContainer>
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title:</Label>
                <Input
                  type="text"
                  name="title"
                  value={newAssessment.title}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Description:</Label>
                <TextArea
                  name="description"
                  value={newAssessment.description}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Type:</Label>
                <Input
                  type="text"
                  name="type"
                  value={newAssessment.type}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit">Create Assessment</SubmitButton>
            </form>
          </FormContainer>
        </div>
      )}
    </AssessmentsContainer>
  );
};

export default Assessments;
