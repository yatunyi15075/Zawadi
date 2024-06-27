import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 0 auto 40px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const AddSchoolForm = ({ addSchool }) => {
  const [form, setForm] = useState({
    name: '',
    director: '',
    location: '',
    numberOfStudents: '',
    plan: 'free'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addSchool(form);
    setForm({
      name: '',
      director: '',
      location: '',
      numberOfStudents: '',
      plan: 'free'
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>School Name</Label>
        <Input type="text" name="name" value={form.name} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>Director/Headmaster</Label>
        <Input type="text" name="director" value={form.director} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>Location</Label>
        <Input type="text" name="location" value={form.location} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>Number of Students</Label>
        <Input type="number" name="numberOfStudents" value={form.numberOfStudents} onChange={handleChange} required />
      </FormGroup>
      <FormGroup>
        <Label>Plan</Label>
        <Select name="plan" value={form.plan} onChange={handleChange} required>
          <option value="free">Free Plan</option>
          <option value="silver">Silver Plan</option>
          <option value="gold">Gold Plan</option>
        </Select>
      </FormGroup>
      <Button type="submit">Add School</Button>
    </Form>
  );
};

export default AddSchoolForm;
