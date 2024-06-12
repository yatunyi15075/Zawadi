import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
`;

const Th = styled.th`
    background-color: #f2f2f2;
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const AssessmentReport = () => {
    const assessmentReports = [
        { assessmentId: 1, name: 'Midterm Exam', date: '2024-05-10', score: 85 },
        { assessmentId: 2, name: 'Quiz 1', date: '2024-05-15', score: 70 },
        { assessmentId: 3, name: 'Final Project', date: '2024-05-25', score: 92 },
    ];

    return (
        <div>
            <h2>Assessment Report</h2>
            <Table>
                <thead>
                    <tr>
                        <Th>Assessment ID</Th>
                        <Th>Name</Th>
                        <Th>Date</Th>
                        <Th>Score</Th>
                    </tr>
                </thead>
                <tbody>
                    {assessmentReports.map((report, index) => (
                        <tr key={index}>
                            <Td>{report.assessmentId}</Td>
                            <Td>{report.name}</Td>
                            <Td>{report.date}</Td>
                            <Td>{report.score}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AssessmentReport;
