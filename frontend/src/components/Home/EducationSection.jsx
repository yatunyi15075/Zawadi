import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the top */
  padding: 40px;
  background-color: #f9f9f9; /* Match background color of HomeContainer */
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  flex: 1;
`;

const VideoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  line-height: 1.5; /* Adjust line height */
`;

const Description = styled.p`
  font-size: 16px; /* Match font size with the paragraph text in HomeContainer */
  color: #333; /* Adjust text color */
  line-height: 1.6;
`;

const YouTubeEmbed = ({ embedUrl }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="100%"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const EducationSection = () => {
  return (
    <SectionContainer>
      <TextContainer>
        <Title><strong>Simplify CBC Management</strong></Title>
        <Description>
          Handling CBC grade books can be tiring and time-consuming, often only used at the end of the term. Our platform offers an easy and revolutionary way to manage CBC online. Teachers can fill out CBC assessments promptly, and parents receive weekly updates on their children's progress.
        </Description>
        <Description><strong>Every child matters</strong></Description>
      </TextContainer>
      <VideoContainer>
        <YouTubeEmbed embedUrl="https://www.youtube.com/watch?v=prf0nGd5eZU" />
      </VideoContainer>
    </SectionContainer>
  );
};

export default EducationSection;
