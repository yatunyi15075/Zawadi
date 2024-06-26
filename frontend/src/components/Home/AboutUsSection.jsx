import React from 'react';
import styled from 'styled-components';
import bgImage from '../../assets/bg.png';

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 60px 30px;
  background: linear-gradient(135deg, #6BD4E7, #6FC3DF);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 20px; /* Adjusted margin to the right for spacing */
`;

const ImageContainer = styled.div`
  flex: 1;
  text-align: right; /* Align image container to the right */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  margin-right: 10px; /* Space between image and text */
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 20px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Content = styled.p`
  font-size: 18px;
  line-height: 1.8;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;

const AboutUsSection = () => {
  return (
    <SectionContainer>
      <ImageContainer>
        <Image src={bgImage} alt="About Us" />
      </ImageContainer>
      <TextContainer>
        <Title>About Us</Title>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed euismod fermentum leo, nec tincidunt nisi hendrerit non.
          Vivamus et pulvinar libero. Nam efficitur, dolor sit amet congue tempus,
          purus ipsum ultrices odio, eget cursus mauris nisi vel arcu. Fusce tempus,
          justo at egestas feugiat, risus leo viverra lorem, quis pretium est libero sed ipsum.
        </Content>
      </TextContainer>
    </SectionContainer>
  );
}

export default AboutUsSection;
