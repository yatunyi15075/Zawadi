import React from 'react';

const Attendance = () => {
  // Hardcoded attendance data
  const attendanceData = [
    { date: '2024-05-01', status: 'Present' },
    { date: '2024-05-02', status: 'Absent' },
    { date: '2024-05-03', status: 'Present' },
    { date: '2024-05-04', status: 'Present' },
    { date: '2024-05-05', status: 'Absent' },
    // Add more attendance entries as needed
  ];

  return (
    <div>
      <h2>Attendance</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
