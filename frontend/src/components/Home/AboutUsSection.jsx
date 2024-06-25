import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`

  padding: 50px 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 16px;
  line-height: 1.6;
`;

const AboutUsSection = () => {
  return (
    <SectionContainer>
      <Title>About Us</Title>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Sed euismod fermentum leo, nec tincidunt nisi <br /> hendrerit non. 
        Vivamus et pulvinar libero. Nam efficitur, dolor sit amet congue tempus,
         purus ipsum <br /> ultrices odio, eget cursus mauris nisi vel arcu. Fusce tempus, 
         justo at egestas feugiat, risus leo viverra lorem, quis pretium est libero sed ipsum.
      </Content>
    </SectionContainer>
  );
}

export default AboutUsSection;
