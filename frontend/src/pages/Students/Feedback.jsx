import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

// Styled components
const FeedbackContainer = styled.div`
  padding: 20px;
`;

const FeedbackItem = styled.div`
  background-color: #f9f9f9;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  p {
    color: #555;
  }
`;

const Feedback = () => {
  return (
    <FeedbackContainer>
      <Sidebar />
      <h2>Feedback</h2>
      <FeedbackItem>
        <h3>Feedback Item 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget elit nec lacus feugiat finibus ac sed risus.</p>
      </FeedbackItem>
      <FeedbackItem>
        <h3>Feedback Item 2</h3>
        <p>Integer feugiat erat ut risus malesuada, sit amet consequat velit interdum. Sed at magna vel elit fermentum iaculis.</p>
      </FeedbackItem>
      <FeedbackItem>
        <h3>Feedback Item 3</h3>
        <p>Nulla at ipsum sit amet ex consectetur fringilla. Phasellus a turpis ut justo convallis tempus.</p>
      </FeedbackItem>
    </FeedbackContainer>
  );
}

export default Feedback;
