import React from 'react';
import {
  Navbar,
  Logo,
  NavigationLinks,
  NavLink,
  ButtonsContainer,
  LoginButton,
  HomeContainer,
  SchoolInfo,
  SchoolImage,
  Title,
  LoremTextContainer,
  AdminRegisterLink
} from '../../styles/styles';
import bg from "../../assets/bg.png";
import bg1 from "../../assets/bg1.png";
import { useNavigate } from 'react-router-dom';

// Importing components for each section
import OfferCard from './OfferCard';
import DemoForm from './DemoForm';
import PricingSection from './PricingSection';
import AboutUsSection from './AboutUsSection';
import GetInTouchSection from './GetInTouchSection';
import Footer from './Footer';
import { BsFillBookFill, BsFillClipboardCheckFill, BsFillFileEarmarkTextFill, BsFillBarChartFill } from 'react-icons/bs';
import FeatureSection from './FeatureSection';
import EducationSection from './EducationSection'; // Import the new section here

const Home = () => {
  const navigate = useNavigate();

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
          <Title><strong>Simplify CBC Management</strong></Title>
          <LoremTextContainer>
            <p>Handling CBC grade books can be tiring and time-consuming, often only used at the end of the term. Our platform offers an easy and revolutionary way to manage CBC online. Teachers can fill out CBC assessments promptly, and parents receive weekly updates on their children's progress.</p>
          </LoremTextContainer>
        </SchoolInfo>
        <SchoolImage src={bg} alt="pupils" />

        {/* New Education Section */}
        <EducationSection />

        {/* Feature Section */}
        <FeatureSection />

        {/* Offer Cards */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          <OfferCard
            icon={<BsFillBookFill />}
            title="Create Digital Lesson Plans"
            description="Easy to use pre-filled CBC lesson plans with PCI’s, Key inquiry questions, and suggested learning experiences."
          />
          <OfferCard
            icon={<BsFillClipboardCheckFill />}
            title="Perform Daily CBC Assessments"
            description="Teachers can perform CBC assessments daily and upload evidence to the learner's profile."
          />
          <OfferCard
            icon={<BsFillFileEarmarkTextFill />}
            title="Generate Digital CBC Grade Books"
            description="Generate CBC grade book curated from entire term’s assessments. No more printing of grade books."
          />
          <OfferCard
            icon={<BsFillBarChartFill />}
            title="Weekly & Monthly Reports to Guardians"
            description="Keep guardians informed of their children’s progress more regularly."
          />
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
