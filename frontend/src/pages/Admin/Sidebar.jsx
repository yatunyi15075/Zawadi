import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import bg1 from '../../assets/bg1.png';
import { BsGraphUp, BsPeople, BsPerson, BsFileText, BsBook, 
  BsChatDots, BsGear } from 'react-icons/bs';

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  height: 100%;
  background-color: #2c3e50;
  color: white;
  overflow-y: auto;
  padding-top: 60px;
  transition: width 0.3s ease;
  z-index: 100;
  @media (min-width: 769px) {
    width: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const SidebarNav = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  font-size: 18px;
  border-bottom: 1px solid #34495e;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #34495e;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  @media (min-width: 769px) {
    display: ${({ isOpen }) => (isOpen ? 'inline' : 'none')};
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
`;

const ToggleButton = styled.div`
  position: absolute;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  width: 30px;
  height: 30px;
  background-color: #34495e;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  @media (max-width: 768px) {
    left: 10px;
  }
`;

const ToggleIcon = styled.span`
  color: white;
  font-size: 20px;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.3s ease;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  color: white;
  font-size: 20px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  @media (min-width: 769px) {
    display: none;
  }
`;

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        <ToggleIcon isOpen={isOpen}>▲</ToggleIcon>
      </ToggleButton>
      <SidebarContainer isOpen={isOpen}>
        <SidebarHeader>
          <Logo src={bg1} alt="Logo" />
        </SidebarHeader>
        <CloseButton isOpen={isOpen} onClick={toggleSidebar}>
          ×
        </CloseButton>
        <SidebarNav>
          <SidebarNavItem>
            <SidebarIcon><BsGraphUp /></SidebarIcon>
            <StyledLink to="/admin/dashboard" isOpen={isOpen}>Dashboard</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsPeople /></SidebarIcon>
            <StyledLink to="/admin/classes" isOpen={isOpen}>Classes</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsPeople /></SidebarIcon>
            <StyledLink to="/admin/students" isOpen={isOpen}>Students</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsPerson /></SidebarIcon>
            <StyledLink to="/admin/teachers" isOpen={isOpen}>Teachers</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsFileText /></SidebarIcon>
            <StyledLink to="/admin/reports" isOpen={isOpen}>Reports</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsBook /></SidebarIcon>
            <StyledLink to="/admin/curriculum-management" isOpen={isOpen}>Curriculum Management</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsChatDots /></SidebarIcon>
            <StyledLink to="/admin/analytics" isOpen={isOpen}>Analytics</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsChatDots /></SidebarIcon>
            <StyledLink to="/admin/communication" isOpen={isOpen}>Announcement</StyledLink>
          </SidebarNavItem>
          <SidebarNavItem>
            <SidebarIcon><BsGear /></SidebarIcon>
            <StyledLink to="/admin/settings" isOpen={isOpen}>Settings & Profile</StyledLink>
          </SidebarNavItem>
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};

export default AdminSidebar;
