import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LoginBox,
  Logo,
  Title,
  Form,
  Input,
  Button,
  StyledLink,
  Divider,
} from '../../styles/LoginStyles';

import bg1 from '../../assets/bg1.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      console.log(response.data); // Handle the response as needed

      // Store the JWT token in local storage
      localStorage.setItem('token', response.data.token);

      // Determine the role and redirect accordingly
      switch (response.data.user.role) {
        case 'super-admin':
          navigate('/super-admin/dashboard');
          break;
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'teacher':
          navigate('/teacher/dashboard');
          break;
        case 'parent':
          navigate('/students/dashboard');
          break;
        default:
          // Redirect to a default dashboard or handle other roles as needed
          break;
      }

      // Display success toast message
      toast.success('Logged in successfully!');
    } catch (error) {
      console.error(error.response.data);
      // Display error toast message
      toast.error('Failed to login. Please check your credentials.');
    }
  };

  console.log('Rendering Login component'); // Debugging line

  return (
    <Container>
      <ToastContainer />
      <LoginBox>
        <Logo src={bg1} alt="Your logo" />
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
        <Divider>
          <StyledLink to="/register">Create an account</StyledLink>
        </Divider>
      </LoginBox>
    </Container>
  );
};

export default Login;
