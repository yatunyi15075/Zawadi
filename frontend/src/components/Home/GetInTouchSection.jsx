import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 50px 20px;
  background-color: #f9f9f9; /* Match background color of previous section */
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #666;
`;

const FormContainer = styled.form`
  max-width: 750px;
  display: flex;
  flex-wrap: wrap;
`;

const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  flex: 1;
  padding: 12px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f38630;
  }
`;

const ContactInfo = styled.div`
  max-width: 300px;
  margin-left: 40px; /* Adjust margin to create space between form and contact info */
`;

const ContactTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ContactDetails = styled.div`
  font-size: 16px;
`;

const GetInTouchSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <SectionContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Title>Get In Touch</Title>
        <Content>
          Interested in learning more about our services? Feel free to contact us by filling out the form below.
        </Content>
        <FormRow>
          <Input type="text" placeholder="Name" required />
          <Input type="email" placeholder="Email Address" required />
        </FormRow>
        <FormRow>
          <Input type="tel" placeholder="Phone" required />
          <Input type="text" placeholder="School Name" required />
        </FormRow>
        <FormRow>
          <TextArea placeholder="Message" rows="4" required />
        </FormRow>
        <Button type="submit">Submit Request</Button>
      </FormContainer>
      <ContactInfo>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactDetails>
          <p>Phone: +123456789</p>
          <p>Email: example@example.com</p>
        </ContactDetails>
      </ContactInfo>
    </SectionContainer>
  );
};

export default GetInTouchSection;
