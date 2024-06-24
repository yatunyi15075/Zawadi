import React, { useState } from 'react';
import styled from 'styled-components';
import AttendanceReport from './AttendanceReport';
import StudentPerformanceReport from './StudentPerformanceReport';
import AssessmentReport from './AssessmentReport';
import ProgressReport from './ProgressReport';
import Sidebar from './Sidebar';

// Styled components
const Container = styled.div`
    display: flex;
`;

const Content = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h2`
    margin-bottom: 20px;
`;

const ButtonGroup = styled.div`
    margin-bottom: 20px;
`;

const Button = styled.button`
    margin-right: 10px;
    padding: 10px 20px;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #0056b3;
    }
`;

// Styled components for individual reports
const ReportContainer = styled.div`
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
`;

const AttendanceReportContainer = styled(ReportContainer)`
    background-color: #f8f9fa;
`;

const StudentPerformanceReportContainer = styled(ReportContainer)`
    background-color: #e9ecef;
`;

const AssessmentReportContainer = styled(ReportContainer)`
    background-color: #d4edda;
`;

const ProgressReportContainer = styled(ReportContainer)`
    background-color: #cce5ff;
`;

const Reports = () => {
    const [selectedSection, setSelectedSection] = useState('Early Years');

    return (
        <Container>
            <Sidebar />
            <Content>
                <Title>Individual Reports</Title>
                <ButtonGroup>
                    <Button onClick={() => setSelectedSection('Early Years')}>Early Years</Button>
                    <Button onClick={() => setSelectedSection('Middle School')}>Middle School</Button>
                    <Button onClick={() => setSelectedSection('Junior Secondary')}>Junior Secondary</Button>
                </ButtonGroup>
                <h3>{selectedSection} Reports</h3>
                <AttendanceReportContainer>
                    <AttendanceReport section={selectedSection} />
                </AttendanceReportContainer>
                <StudentPerformanceReportContainer>
                    <StudentPerformanceReport section={selectedSection} />
                </StudentPerformanceReportContainer>
                <AssessmentReportContainer>
                    <AssessmentReport section={selectedSection} />
                </AssessmentReportContainer>
                <ProgressReportContainer>
                    <ProgressReport section={selectedSection} />
                </ProgressReportContainer>
            </Content>
        </Container>
    );
}

export default Reports;
