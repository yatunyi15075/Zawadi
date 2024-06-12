import React from 'react';
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

const Reports = () => {
    return (
        <Container>
            <Sidebar />
            <Content>
                <Title>Individual Reports</Title>
                <AttendanceReportContainer>
                    <AttendanceReport />
                </AttendanceReportContainer>
                <StudentPerformanceReportContainer>
                    <StudentPerformanceReport />
                </StudentPerformanceReportContainer>
                <AssessmentReportContainer>
                    <AssessmentReport />
                </AssessmentReportContainer>
                <ProgressReportContainer>
                    <ProgressReport />
                </ProgressReportContainer>
            </Content>
        </Container>
    );
}

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

export default Reports;
