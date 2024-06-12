import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`

  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: black;
`;

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
const GetInTouchSection = () => {
  return (
    <SectionContainer>
      <Title>Get In Touch</Title>
      <Content>
        Interested in learning more about our services? Feel free to contact us by filling out the form below.
      </Content>
      <FormContainer>
      <Input type="text" placeholder="Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="tel" placeholder="Phone" />
      <Input type="text" placeholder="School Name" />
      <TextArea placeholder="Message" rows="4" />
      <Button>Submit Request</Button>
    </FormContainer>
    </SectionContainer>
  );
}

export default GetInTouchSection;
