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

const ProgressReport = () => {
    const progressData = [
        { studentId: 1, name: 'John Doe', grade: 'A', completion: '80%', remarks: 'Excellent progress' },
        { studentId: 2, name: 'Jane Smith', grade: 'B', completion: '65%', remarks: 'Good progress' },
        { studentId: 3, name: 'Alice Johnson', grade: 'C', completion: '50%', remarks: 'Average progress' },
        { studentId: 4, name: 'Bob Brown', grade: 'B', completion: '75%', remarks: 'Good progress' },
        { studentId: 5, name: 'Emily Davis', grade: 'A', completion: '90%', remarks: 'Excellent progress' },
    ];

    return (
        <div>
            <h2>Progress Report</h2>
            <Table>
                <thead>
                    <tr>
                        <Th>Student ID</Th>
                        <Th>Name</Th>
                        <Th>Grade</Th>
                        <Th>Completion</Th>
                        <Th>Remarks</Th>
                    </tr>
                </thead>
                <tbody>
                    {progressData.map((data, index) => (
                        <tr key={index}>
                            <Td>{data.studentId}</Td>
                            <Td>{data.name}</Td>
                            <Td>{data.grade}</Td>
                            <Td>{data.completion}</Td>
                            <Td>{data.remarks}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ProgressReport;
