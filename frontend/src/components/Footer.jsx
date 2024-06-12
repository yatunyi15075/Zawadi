import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer` 
  color: #fff;
  padding: 20px;
  text-align: center;
 
`;

const FooterText = styled.p`
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>&copy; 2024 Your School. All rights reserved.</FooterText>
    </FooterContainer>
  );
}

export default Footer;
