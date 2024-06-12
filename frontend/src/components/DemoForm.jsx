// DemoForm.js
import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 750px;
  margin: 20px auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const DemoForm = () => {
  return (
    <>
    <h2>Request For a demo </h2>
    <FormContainer>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="tel" placeholder="Phone" />
      <Input type="text" placeholder="School Name" />
      <TextArea placeholder="Message" rows="4" />
      <Button>Submit Request</Button>
    </FormContainer>
    </>
  );
};

export default DemoForm;
