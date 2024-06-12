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

const AttendanceReport = () => {
    const attendanceRecords = [
        { studentId: 1, name: 'John Doe', date: '2024-05-10', status: 'Present' },
        { studentId: 2, name: 'Jane Smith', date: '2024-05-10', status: 'Absent' },
        { studentId: 3, name: 'Alice Johnson', date: '2024-05-10', status: 'Present' },
        { studentId: 1, name: 'John Doe', date: '2024-05-15', status: 'Present' },
        { studentId: 2, name: 'Jane Smith', date: '2024-05-15', status: 'Present' },
        { studentId: 3, name: 'Alice Johnson', date: '2024-05-15', status: 'Absent' },
    ];

    return (
        <div>
            <h2>Attendance Report</h2>
            <Table>
                <thead>
                    <tr>
                        <Th>Student ID</Th>
                        <Th>Name</Th>
                        <Th>Date</Th>
                        <Th>Status</Th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map((record, index) => (
                        <tr key={index}>
                            <Td>{record.studentId}</Td>
                            <Td>{record.name}</Td>
                            <Td>{record.date}</Td>
                            <Td>{record.status}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default AttendanceReport;
