// Layout.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminSidebar from './pages/Admin/Sidebar';
import StudentSidebar from './pages/Students/Sidebar';
import TeacherSidebar from './pages/Teachers/Sidebar';
import ParentSidebar from './pages/Parents/Sidebar';
import SuperAdminSidebar from './pages/SuperAdminDashboard/Sidebar';

const Layout = ({ children }) => {
  const location = useLocation();

  const renderSidebar = () => {
    if (location.pathname.startsWith('/admin')) {
      return <AdminSidebar />;
    }
    if (location.pathname.startsWith('/student')) {
      return <StudentSidebar />;
    }
    if (location.pathname.startsWith('/teacher')) {
      return <TeacherSidebar />;
    }
    if (location.pathname.startsWith('/parent')) {
      return <ParentSidebar />;
    }
    if (location.pathname.startsWith('/super-admin')) {
      return <SuperAdminSidebar />;
    }
    return null;
  };

  return (
    <div style={{ display: 'flex' }}>
      {renderSidebar()}
      <div style={{ flex: 1, marginLeft: '250px' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
