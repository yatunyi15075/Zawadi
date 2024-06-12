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

const StudentPerformanceReport = () => {
    const studentReports = [
        { studentId: 1, name: 'John Doe', grade: 'A', attendance: 'Present', averageScore: 85 },
        { studentId: 2, name: 'Jane Smith', grade: 'B', attendance: 'Absent', averageScore: 75 },
        { studentId: 3, name: 'Alice Johnson', grade: 'C', attendance: 'Present', averageScore: 70 },
        { studentId: 4, name: 'Bob Brown', grade: 'B', attendance: 'Present', averageScore: 78 },
        { studentId: 5, name: 'Emily Davis', grade: 'A', attendance: 'Absent', averageScore: 92 },
    ];

    return (
        <div>
            <h2>Student Performance Report</h2>
            <Table>
                <thead>
                    <tr>
                        <Th>Student ID</Th>
                        <Th>Name</Th>
                        <Th>Grade</Th>
                        <Th>Attendance</Th>
                        <Th>Average Score</Th>
                    </tr>
                </thead>
                <tbody>
                    {studentReports.map((report, index) => (
                        <tr key={index}>
                            <Td>{report.studentId}</Td>
                            <Td>{report.name}</Td>
                            <Td>{report.grade}</Td>
                            <Td>{report.attendance}</Td>
                            <Td>{report.averageScore}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default StudentPerformanceReport;
