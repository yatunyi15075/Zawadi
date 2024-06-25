import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 240px;
  flex: 1 1 45%;
  margin: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  margin-right: 10px;
  font-size: 24px;
  color: #007bff;
`;

const TextContent = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

const OfferCard = ({ icon, title, description }) => {
  return (
    <Card>
      <IconContainer>{icon}</IconContainer>
      <TextContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContent>
    </Card>
  );
};

export default OfferCard;
