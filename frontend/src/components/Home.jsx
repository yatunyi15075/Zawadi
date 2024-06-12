import React from 'react';
import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } 
from '../styles/styles'
import { LoremIpsum } from 'lorem-ipsum';
import bg from "../assets/bg.png";
import bg1 from "../assets/bg1.png";
import { Link, useNavigate } from 'react-router-dom';

// Importing components for each section
import OfferCard from './OfferCard';
import DemoForm from './DemoForm';
import PricingSection from './PricingSection';
import AboutUsSection from './AboutUsSection';
import GetInTouchSection from './GetInTouchSection';
import Footer from './Footer';
import { BsFillBookFill } from 'react-icons/bs';

const lorem = new LoremIpsum();

const Home = () => {
  const navigate = useNavigate();
  const loremText = lorem.generateParagraphs(1);

  const handleLoginClick = () => {
    navigate('/choose-user');
  };

  return (
    <>
      <Navbar>
        <Logo src={bg1} alt="Logo" />
          <NavigationLinks>
          <NavLink href="#">Features</NavLink>
           <NavLink href="#">Pricing</NavLink>
           <NavLink href="#">Request a Demo</NavLink>
         </NavigationLinks>
        <ButtonsContainer>
          <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
        </ButtonsContainer>
      </Navbar>
      <HomeContainer>
        <SchoolInfo>
          <Title>School Management System</Title>
          <LoremTextContainer>
            <p>{loremText}</p>
          </LoremTextContainer>
          <AdminRegisterLink to="/admin/register">Admin Register</AdminRegisterLink>
        </SchoolInfo>
        <SchoolImage src={bg} alt="pupils" />

        {/* Offer Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
          <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
          <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
          <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
          <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
          <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
          <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
          <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
          <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
          <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
          <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
          <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
        </div>

        {/* Request a Demo Form */}
        <DemoForm />

        {/* Pricing Section */}
        <PricingSection />

        {/* About Us Section */}
        <AboutUsSection />

        {/* Get In Touch Section */}
        <GetInTouchSection />

        {/* Footer Section */}
        <Footer />
      </HomeContainer>
    </>
  );
};

export default Home;




// // Home.js
// import React from 'react';
// import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, AdminRegisterLink } from '../styles/styles';
// import { LoremIpsum } from 'lorem-ipsum';
// import bg from "../assets/bg.png";
// import bg1 from "../assets/bg1.png";
// import { Link, useNavigate } from 'react-router-dom';

// // Importing components for each section
// import OfferCard from './OfferCard';
// import DemoForm from './DemoForm';
// import PricingSection from './PricingSection';
// import AboutUsSection from './AboutUsSection';
// import GetInTouchSection from './GetInTouchSection';
// import Footer from './Footer';
// import { BsFillBookFill } from 'react-icons/bs';


// const lorem = new LoremIpsum();

// const Home = () => {
//   const navigate = useNavigate();
//   const loremText = lorem.generateParagraphs(1);

//   const handleLoginClick = () => {
//     navigate('/choose-user');
//   };

//   return (
//     <>
//       <Navbar>
//         <Logo src={bg1} alt="Logo" />
//         <NavigationLinks>
//           <NavLink href="#">Features</NavLink>
//           <NavLink href="#">Pricing</NavLink>
//           <NavLink href="#">Request a Demo</NavLink>
//         </NavigationLinks>
//         <ButtonsContainer>
//           <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
//         </ButtonsContainer>
//       </Navbar>

//       {/* Hero Section */}
//       {/* School Management System Info */}
//       {/* Admin Register Link */}
      
//       {/* What the school management system offers */}
//       <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//       <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//       {/* Add more OfferCard components as needed */}

//       {/* Request a Demo Form */}
//       <DemoForm />

//       {/* Pricing Section */}
//       <PricingSection />

//       {/* About Us Section */}
//       <AboutUsSection />

//       {/* Get In Touch Section */}
//       <GetInTouchSection />

//       {/* Footer Section */}
//       <Footer />
//     </>
//   );
// };

// export default Home;





// import React from 'react';
// import styled from 'styled-components';
// import bg1 from '../assets/bg1.png';
// import { BsFillBookFill, BsFillClipboardCheckFill, BsFillFileEarmarkTextFill, BsFillBarChartFill } from 'react-icons/bs';

// const Section = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   padding: 40px 20px;
//   background-color: #f9f9f9;
// `;

// const ImageContainer = styled.div`
//   flex: 1;
//   min-width: 300px;
//   max-width: 500px;
//   text-align: center;
// `;

// const Image = styled.img`
//   width: 80%;
//   height: auto;
// `;

// const TextContainer = styled.div`
//   flex: 2;
//   min-width: 300px;
//   max-width: 600px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// `;

// const TextBlock = styled.div`
//   flex: 1 1 45%;
//   margin: 10px;
//   padding: 20px;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   display: flex;
//   align-items: center;
// `;

// const Icon = styled.div`
//   margin-right: 10px;
//   font-size: 24px;
//   color: #007bff;
// `;

// const TextContent = styled.div`
//   flex: 1;
// `;

// const Title = styled.h3`
//   font-size: 18px;
//   margin-bottom: 10px;
//   color: #333;
// `;

// const Description = styled.p`
//   font-size: 14px;
//   color: #555;
// `;

// const FeatureSection = () => {
//   return (
//     <Section>
//       <ImageContainer>
//         <Image src={bg1} alt="Illustration" />
//       </ImageContainer>
//       <TextContainer>
//         <TextBlock>
//           <Icon><BsFillBookFill /></Icon>
//           <TextContent>
//             <Title>Create Digital Lesson Plans</Title>
//             <Description>Easy to use pre-filled CBC lesson plans with PCI’s, Key inquiry questions, and suggested learning experiences.</Description>
//           </TextContent>
//         </TextBlock>
//         <TextBlock>
//           <Icon><BsFillClipboardCheckFill /></Icon>
//           <TextContent>
//             <Title>Perform Daily CBC Assessments</Title>
//             <Description>Teachers can perform CBC assessments daily and upload evidence to the learner's profile.</Description>
//           </TextContent>
//         </TextBlock>
//         <TextBlock>
//           <Icon><BsFillFileEarmarkTextFill /></Icon>
//           <TextContent>
//             <Title>Generate Digital CBC Grade Books</Title>
//             <Description>Generate CBC grade book curated from entire term’s assessments. No more printing of grade books.</Description>
//           </TextContent>
//         </TextBlock>
//         <TextBlock>
//           <Icon><BsFillBarChartFill /></Icon>
//           <TextContent>
//             <Title>Weekly & Monthly Reports to Guardians</Title>
//             <Description>Keep guardians informed of their children’s progress more regularly.</Description>
//           </TextContent>
//         </TextBlock>
//       </TextContainer>
//     </Section>
//   );
// };

// export default FeatureSection;
















// import React from 'react';
// import { Navbar, Logo, NavigationLinks, NavLink, ButtonsContainer, LoginButton, HomeContainer, SchoolInfo, SchoolImage, Title, LoremTextContainer, AdminRegisterLink } 
// from '../styles/styles';
// import { LoremIpsum } from 'lorem-ipsum';
// import bg from "../assets/bg.png";
// import bg1 from "../assets/bg1.png";
// import { Link, useNavigate } from 'react-router-dom';

// // Importing components for each section
// import OfferCard from './OfferCard';
// import DemoForm from './DemoForm';
// import PricingSection from './PricingSection';
// import AboutUsSection from './AboutUsSection';
// import GetInTouchSection from './GetInTouchSection';
// import Footer from './Footer';
// import { BsFillBookFill } from 'react-icons/bs';
// import FeatureSection from './FeatureSection';

// const lorem = new LoremIpsum();

// const Home = () => {
//   const navigate = useNavigate();
//   const loremText = lorem.generateParagraphs(1);

//   const handleLoginClick = () => {
//     navigate('/choose-user');
//   };

//   return (
//     <>
//       <Navbar>
//         <Logo src={bg1} alt="Logo" />
//         <NavigationLinks>
//           <NavLink href="#">Features</NavLink>
//           <NavLink href="#">Pricing</NavLink>
//           <NavLink href="#">Request a Demo</NavLink>
//         </NavigationLinks>
//         <ButtonsContainer>
//           <LoginButton onClick={handleLoginClick}>Sign In</LoginButton>
//         </ButtonsContainer>
//       </Navbar>
//       <HomeContainer>
//         <SchoolInfo>
//           <Title>School Management System</Title>
//           <LoremTextContainer>
//             <p>{loremText}</p>
//           </LoremTextContainer>
//           <AdminRegisterLink to="/admin/register">Admin Register</AdminRegisterLink>
//         </SchoolInfo>
//         <SchoolImage src={bg} alt="pupils" />

//         {/* Feature Section */}
//         <FeatureSection />

//         {/* Offer Cards */}
//         <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
//           <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//           <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//           <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//           <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//           <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//           <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//           <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//           <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//           <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//           <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//           <OfferCard icon={<BsFillBookFill />} text="Creating digital lesson plans" />
//           <OfferCard icon={<BsFillBookFill />} text="Daily CBC assessments" />
//         </div>

//         {/* Request a Demo Form */}
//         <DemoForm />

//         {/* Pricing Section */}
//         <PricingSection />

//         {/* About Us Section */}
//         <AboutUsSection />

//         {/* Get In Touch Section */}
//         <GetInTouchSection />

//         {/* Footer Section */}
//         <Footer />
//       </HomeContainer>
//     </>
//   );
// };

// export default Home;
