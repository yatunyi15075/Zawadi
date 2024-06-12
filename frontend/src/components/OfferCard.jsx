// OfferCard.js
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 20px;
  max-width: 300px;
 

`;

const Icon = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const OfferCard = ({ icon, text }) => {
  return (
    <CardContainer>
      <Icon>{icon}</Icon>
      <p>{text}</p>
    </CardContainer>
  );
};

export default OfferCard;
