import styled from 'styled-components';

export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 40px 60px;
  background-color: #f7f9fc;
  min-height: 100vh;
`;

export const Section = styled.section`
  background: white;
  padding: 20px 30px;
  margin-bottom: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  border-bottom: 2px solid #4caf50;
  padding-bottom: 10px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #4caf50;
`;

export const CardContent = styled.p`
  font-size: 14px;
  color: #555;
`;

export const StudentDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TeacherDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
