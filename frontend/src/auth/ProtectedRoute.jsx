import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); // Assuming role is stored in localStorage
  
  console.log('Token:', token);
  console.log('User Role:', userRole);

  if (!token) {
    // Redirect to login if token is not present
    console.log('Redirecting to login due to missing token');
    return <Navigate to="/login" />;
  }

  // // Check roles if provided
  // if (roles && roles.indexOf(userRole) === -1) {
  //   // User does not have the required role
  //   console.log('User does not have required role:', userRole);
  //   return <Navigate to="/" />; // Or to a specific unauthorized access page
  // }

  // Render children if authenticated and authorized
  console.log('Rendering protected route for user role:', userRole);
  return children;
};

export default ProtectedRoute;
