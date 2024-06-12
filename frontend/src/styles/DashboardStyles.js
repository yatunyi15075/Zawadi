import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: ${({ isOpen }) => (isOpen ? '250px' : '80px')};
  transition: margin-left 0.3s ease;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 70px; /* Ensure content is not hidden under fixed header */
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const BottomContent = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Section = styled.section`
  margin-bottom: 40px;
  flex: 1;
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Card = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  flex: 1;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #007bff;
`;

export const CardContent = styled.p`
  font-size: 16px;
  color: #555555;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  padding-left: 240px;
`;
