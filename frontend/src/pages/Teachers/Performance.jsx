import React, { useState } from 'react';
import styled from 'styled-components';

const PerformanceContainer = styled.div`
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
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-top: 20px;
`;

const InputGroup = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Option = styled.option`
  padding: 8px;
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

const PerformanceSection = () => {
  const [showPerformanceData, setShowPerformanceData] = useState(false);
  const [showEnterMarks, setShowEnterMarks] = useState(false);
  const [studentName, setStudentName] = useState('');
  const [classLevel, setClassLevel] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [enteredMarks, setEnteredMarks] = useState([]);

  const handleShowPerformanceData = () => {
    setShowPerformanceData(true);
    setShowEnterMarks(false);
    // Logic to fetch and display performance data (e.g., fetch from API, update state)
  };

  const handleShowEnterMarks = () => {
    setShowEnterMarks(true);
    setShowPerformanceData(false);
    // Logic to prepare for entering marks (e.g., clear previous data, set up form)
  };

  const handleSubmitMarks = (e) => {
    e.preventDefault();
    const newMark = { studentName, classLevel, admissionNumber, subject, marks };
    setEnteredMarks([...enteredMarks, newMark]);
    // Clear form fields after submission
    setStudentName('');
    setClassLevel('');
    setAdmissionNumber('');
    setSubject('');
    setMarks('');
  };

  return (
    <PerformanceContainer>
      <SectionTitle>Performance Section</SectionTitle>
      <ButtonGroup>
        <Button active={showPerformanceData} onClick={handleShowPerformanceData}>
          Performance Data
        </Button>
        <Button active={showEnterMarks} onClick={handleShowEnterMarks}>
          Enter Marks
        </Button>
      </ButtonGroup>

      <FormContainer show={showEnterMarks}>
        <form onSubmit={handleSubmitMarks}>
          <InputGroup>
            <Label>Student Name:</Label>
            <Input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Class:</Label>
            <Input type="text" value={classLevel} onChange={(e) => setClassLevel(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Admission Number:</Label>
            <Input type="text" value={admissionNumber} onChange={(e) => setAdmissionNumber(e.target.value)} />
          </InputGroup>
          <InputGroup>
            <Label>Subject:</Label>
            <Select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <Option value="">Select Subject</Option>
              <Option value="Math">Math</Option>
              <Option value="Science">Science</Option>
              <Option value="English">English</Option>
              {/* Add more subjects as needed */}
            </Select>
          </InputGroup>
          <InputGroup>
            <Label>Marks:</Label>
            <Input type="number" value={marks} onChange={(e) => setMarks(e.target.value)} />
          </InputGroup>
          <SubmitButton type="submit">Submit Marks</SubmitButton>
        </form>
      </FormContainer>

      {enteredMarks.length > 0 && (
        <div>
          <h3>Entered Marks</h3>
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Class</th>
                <th>Admission Number</th>
                <th>Subject</th>
                <th>Marks</th>
              </tr>
            </thead>
            <tbody>
              {enteredMarks.map((mark, index) => (
                <tr key={index}>
                  <td>{mark.studentName}</td>
                  <td>{mark.classLevel}</td>
                  <td>{mark.admissionNumber}</td>
                  <td>{mark.subject}</td>
                  <td>{mark.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </PerformanceContainer>
  );
};

const Performance = () => {
  return (
    <div>
      <PerformanceSection />
    </div>
  );
};

export default Performance;
