import React from 'react';
import AttendanceReport from './AttendanceReport';
import StudentPerformanceReport from './StudentPerformanceReport';
import AssessmentReport from './AssessmentReport';
import ProgressReport from './ProgressReport';
import Sidebar from './Sidebar';

const Reports = () => {
    return (
        <div>
          <Sidebar />
            <h2>Individual Reports</h2>
            <AttendanceReport />
            <StudentPerformanceReport />
            <AssessmentReport />
            <ProgressReport />
        </div>
    );
}

export default Reports
