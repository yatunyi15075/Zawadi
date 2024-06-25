// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import ChooseUser from '../src/components/ChooseUser';

// Signin and Register
import AdminSignIn from '../src/auth/Admin/AdminSignIn.jsx';
import StudentSignIn from '../src/auth/Student/StudentSignIn.jsx';
import TeacherSignIn from '../src/auth/Teacher/TeacherSignIn.jsx';

// Dashboards
import AdminDashboard from '../src/pages/Admin/Dashboard';
import StudentDashboard from '../src/pages/Students/Dashboard';
import TeacherDashboard from '../src/pages/Teachers/Dashboard';
import ParentDashboard from './pages/Parents/ParentDashboard.jsx';
import SuperAdminDashboard from './pages/SuperAdminDashboard/SuperAdminDashboard.jsx';

// Admin
import Classes from '../src/pages/Admin/Classes';
import Teachers from '../src/pages/Admin/Teachers';
import Announcement from '../src/pages/Admin/Announcement';
import SettingsProfile from '../src/pages/Admin/SettingsProfile';
import Analytics from './pages/Admin/Analytics.jsx';
import CurriculumManagement from './pages/Admin/CurriculumManagement.jsx';
import Reports from './pages/Admin/Reports.jsx';
import Students from './pages/Admin/Students.jsx';

// Students
import StudentAssignments from '../src/pages/Students/Assignments';
import ProfileSection from '../src/pages/Students/Profile';
import Feedback from './pages/Students/Feedback.jsx';
import Grades from './pages/Students/Grades.jsx';
import LearningMaterials from './pages/Students/LearningMaterials.jsx';

// Teachers
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import TeacherProfileSection from '../src/pages/Teachers/Profile';
import CheckAttendanceSection from './pages/Teachers/Attendance.jsx';
import LessonPlans from './pages/Teachers/LessonPlans.jsx';
import StudentProgress from './pages/Teachers/StudentProgress.jsx';

// Parents
import Attendance from './pages/Parents/Attendance.jsx';
import ChildProgress from './pages/Parents/ChildProgress.jsx';
import Communication from './pages/Parents/Communication.jsx';
import ChildGrades from './pages/Parents/Grades.jsx';

// Super-admin
import AdvancedAnalytics from './pages/SuperAdminDashboard/AdvancedAnalytics.jsx';
import IntergrationOptions from './pages/SuperAdminDashboard/IntergrationOptions.jsx';
import SystemSettings from './pages/SuperAdminDashboard/SystemSettings.jsx';
import UserManagement from './pages/SuperAdminDashboard/UserManagement.jsx';

// Layout
import Layout from './Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} /> 

        {/* Sign-in routes */}
        <Route exact path="/admin-signIn" element={<AdminSignIn />} />
        <Route exact path="/student-signIn" element={<StudentSignIn />} />
        <Route exact path="/teacher-signIn" element={<TeacherSignIn />} />

        {/* Dashboard routes */}
        <Route exact path="/admin/dashboard" element={<Layout><AdminDashboard /></Layout>} />
        <Route exact path="/teacher/dashboard" element={<Layout><TeacherDashboard /></Layout>} />
        <Route exact path="/student/dashboard" element={<Layout><StudentDashboard /></Layout>} />
        <Route exact path="/parent/dashboard" element={<Layout><ParentDashboard /></Layout>} />
        <Route exact path="/super-admin/dashboard" element={<Layout><SuperAdminDashboard /></Layout>} />

        {/* Admin section routes */}
        <Route exact path="/admin/classes" element={<Layout><Classes /></Layout>} />
        <Route exact path="/admin/teachers" element={<Layout><Teachers /></Layout>} />
        <Route exact path="/admin/students" element={<Layout><Students /></Layout>} />
        <Route exact path="/admin/communication" element={<Layout><Announcement /></Layout>} />
        <Route exact path="/admin/analytics" element={<Layout><Analytics /></Layout>} />
        <Route exact path="/admin/curriculum-management" element={<Layout><CurriculumManagement /></Layout>} />
        <Route exact path="/admin/reports" element={<Layout><Reports /></Layout>} />
        <Route exact path="/admin/settings" element={<Layout><SettingsProfile /></Layout>} />

        {/* Student section routes */}
        <Route exact path="/student/assignments" element={<Layout><StudentAssignments /></Layout>} />
        <Route exact path="/student/settings" element={<Layout><ProfileSection /></Layout>} />
        <Route exact path="/student/feedback" element={<Layout><Feedback /></Layout>} />
        <Route exact path="/student/grades" element={<Layout><Grades /></Layout>} />
        <Route exact path="/student/learning-materials" element={<Layout><LearningMaterials /></Layout>} />

        {/* Teacher section routes */}
        <Route exact path="/teacher/assignments" element={<Layout><AssignmentSection /></Layout>} />
        <Route exact path="/teacher/communication" element={<Layout><CheckAnnouncementSection /></Layout>} />
        <Route exact path="/teacher/settings" element={<Layout><TeacherProfileSection /></Layout>} />
        <Route exact path="/teacher/attendance" element={<Layout><CheckAttendanceSection /></Layout>} />
        <Route exact path="/teacher/lesson-plans" element={<Layout><LessonPlans /></Layout>} />
        <Route exact path="/teacher/students-progress" element={<Layout><StudentProgress /></Layout>} />

        {/* Parents section routes */}
        <Route exact path="/parents/attendance" element={<Layout><Attendance /></Layout>} />
        <Route exact path="/parents/child-progress" element={<Layout><ChildProgress /></Layout>} />
        <Route exact path="/parents/communication" element={<Layout><Communication /></Layout>} />
        <Route exact path="/parents/child-grades" element={<Layout><ChildGrades /></Layout>} />

        {/* Super-admin routes */}
        <Route exact path="/super-admin/advanced-analytics" element={<Layout><AdvancedAnalytics /></Layout>} />
        <Route exact path="/super-admin/intergration-options" element={<Layout><IntergrationOptions /></Layout>} />
        <Route exact path="/super-admin/system-settings" element={<Layout><SystemSettings /></Layout>} />
        <Route exact path="/super-admin/user-management" element={<Layout><UserManagement /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
