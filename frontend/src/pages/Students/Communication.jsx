import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const CommunicationContainer = styled.div`
  padding: 20px;
`;

const CommunicationItem = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
`;

const CommunicationTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

const CommunicationContent = styled.p`
  color: #666;
`;

const Communication = () => {
  // Sample communication data
  const [communications, setCommunications] = useState([
    {
      id: 1,
      title: 'Important Notice: School Closure',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget metus sed nisi sollicitudin rhoncus.',
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting Reminder',
      content: 'Etiam id felis nec nulla consequat mollis eget nec est. Cras vulputate dolor eget quam lacinia, ut lobortis nisl tincidunt.',
    },
    {
      id: 3,
      title: 'PTA Fundraiser Event',
      content: 'Praesent vitae odio ut odio tincidunt tincidunt nec a elit. Ut quis libero nec quam interdum gravida.',
    },
  ]);

  return (
    <CommunicationContainer>
      <h2>Communication</h2>
      {communications.map((communication) => (
        <CommunicationItem key={communication.id}>
          <CommunicationTitle>{communication.title}</CommunicationTitle>
          <CommunicationContent>{communication.content}</CommunicationContent>
        </CommunicationItem>
      ))}
    </CommunicationContainer>
  );
};

export default Communication;
