import React, { useState } from 'react';
import {
  AdminSignInContainer,
  FormContainer,
  InputField,
  SubmitButton,
} from '../../styles/AdminSignInStyles';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AdminSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      if (response.status === 200) {
        // Sign-in successful, redirect to admin dashboard
        navigate('/admin/dashboard');
        toast.success('Logged in successfully!');
      } else {
        // Handle sign-in errors
        console.error('Sign-in failed');
        toast.error('Failed to sign in. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      toast.error('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <AdminSignInContainer>
      <ToastContainer />
      <h2>Admin Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </AdminSignInContainer>
  );
};

export default AdminSignIn;
