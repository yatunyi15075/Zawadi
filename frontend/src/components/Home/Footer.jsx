import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  margin-top: 40px; /* Adjust margin-top as needed */
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterIcon = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>About Kurasa.</FooterText>
      <FooterText>A Kenyan-based EdTech startup Building the world's number 1 assessment tool for K-12 learning.</FooterText>
      
      <FooterLinks>
        <FooterLink href="#">Connect</FooterLink>
        <FooterLink href="#">News / Events</FooterLink>
        <FooterLink href="#">Resources</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Terms</FooterLink>
        <FooterLink href="#">Careers</FooterLink>
        <FooterLink href="#">Blog</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinks>

      <FooterText>5th Floor, SUS Center, Keri Rd, Madaraka</FooterText>
      <FooterText>020 8000 208</FooterText>
      <FooterText>hello@kurasa.org</FooterText>

      <FooterLinks>
        <FooterIcon href="#"><FaFacebook /></FooterIcon>
        <FooterIcon href="#"><FaTwitter /></FooterIcon>
        <FooterIcon href="#"><FaLinkedin /></FooterIcon>
        <FooterIcon href="#"><FaInstagram /></FooterIcon>
      </FooterLinks>

      <FooterText>&copy; 2024 All rights reserved | Kurasa Inc</FooterText>
    </FooterContainer>
  );
}

export default Footer;
