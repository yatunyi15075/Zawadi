// PricingSection.js
import React from 'react';
import styled from 'styled-components';
import bg from '../assets/bg.png'

const PricingContainer = styled.div`
  text-align: center;
`;

const PricingImage = styled.img`
  max-width: 100%;
  margin-top: 20px;
`;

const PricingSection = () => {
  return (
    <PricingContainer>
      <h2>Pricing</h2>
      <p>We offer affordable pricing plans based on your school needs.</p>
      <PricingImage src={bg} alt="Pricing" />
    </PricingContainer>
  );
};

export default PricingSection;
