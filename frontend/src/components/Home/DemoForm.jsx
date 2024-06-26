import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 750px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: calc(100% - 32px);  /* Adjusting width to fit within padding */
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #555;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const TextArea = styled.textarea`
  width: calc(100% - 32px);  /* Adjusting width to fit within padding */
  padding: 15px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: #555;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background-color: #0056b3;
  }
`;

const DemoForm = () => {
  return (
    <FormContainer>
      <Title>Request For a Demo</Title>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="tel" placeholder="Phone" />
      <Input type="text" placeholder="School Name" />
      <TextArea placeholder="Message" rows="4" />
      <Button>Submit Request</Button>
    </FormContainer>
  );
};

export default DemoForm;
