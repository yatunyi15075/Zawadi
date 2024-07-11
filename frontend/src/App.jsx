// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/components/Home/Home.jsx';
import ChooseUser from '../src/components/ChooseUser';

// ProtectedRoute
import ProtectedRoute from './auth/ProtectedRoute.jsx';

// Signin and Register
import Register from './auth/SuperAdmin/SuperAdminRegister.jsx'
import Login from './auth/SuperAdmin/SuperAdminSigin.jsx';
import AdminSignIn from '../src/auth/Admin/AdminSignIn.jsx';
import ParentSignIn from './auth/Parent/ParentSignIn.jsx';
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
import AllCurriculums from "./pages/Admin/AllCurriculums.jsx";

// Students
import StudentAssignments from '../src/pages/Students/Assignments';
import ProfileSection from '../src/pages/Students/Profile';
import Feedback from './pages/Students/Feedback.jsx';
import Grades from './pages/Students/Grades.jsx';
import LearningMaterials from './pages/Students/LearningMaterials.jsx';
import Attendance from './pages/Parents/Attendance.jsx';
import Communication from './pages/Parents/Communication.jsx';

// Teachers
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import TeacherProfileSection from '../src/pages/Teachers/Profile';
import CheckAttendanceSection from './pages/Teachers/Attendance.jsx';
import LessonPlans from './pages/Teachers/LessonPlans.jsx';
import StudentProgress from './pages/Teachers/StudentProgress.jsx';
import Assessments from './pages/Teachers/Assessments.jsx';
import Performance from './pages/Teachers/Performance.jsx';

// Super-admin
import AdvancedAnalytics from './pages/SuperAdminDashboard/AdvancedAnalytics.jsx';
import IntergrationOptions from './pages/SuperAdminDashboard/IntergrationOptions.jsx';
import SystemSettings from './pages/SuperAdminDashboard/SystemSettings.jsx';
import UserManagement from './pages/SuperAdminDashboard/UserManagement.jsx';
import AllSchools from './pages/SuperAdminDashboard/AllSchools.jsx';
import AddSchoolForm from './pages/SuperAdminDashboard/AddSchoolForm.jsx';
import AllSchoolsList from './pages/SuperAdminDashboard/AllSchoolsList.jsx';

// Layout
import Layout from './Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />

        {/* Sign-in and register routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/parent-signin" element={<ParentSignIn />} />
        <Route path="/teacher-signin" element={<TeacherSignIn />} />

        {/* Protected dashboard routes */}
        <Route path="/admin/*" element={<ProtectedRoute roles={['admin', 'super-admin']}><AdminDashboard /></ProtectedRoute>} />
        <Route path="/teacher/*" element={<ProtectedRoute roles={['teacher', 'super-admin']}><TeacherDashboard /></ProtectedRoute>} />
        <Route path="/student/*" element={<ProtectedRoute roles={['student', 'parent']}><StudentDashboard /></ProtectedRoute>} />
        <Route path="/parent/*" element={<ProtectedRoute roles={['parent']}><ParentDashboard /></ProtectedRoute>} />
        <Route path="/super-admin/*" element={<ProtectedRoute roles={['super-admin']}><SuperAdminDashboard /></ProtectedRoute>} />

        {/* Admin section routes */}
        <Route path="/admin/classes" element={<Layout><Classes /></Layout>} />
        <Route path="/admin/teachers" element={<Layout><Teachers /></Layout>} />
        <Route path="/admin/students" element={<Layout><Students /></Layout>} />
        <Route path="/admin/communication" element={<Layout><Announcement /></Layout>} />
        <Route path="/admin/analytics" element={<Layout><Analytics /></Layout>} />
        <Route path="/admin/curriculum-management" element={<Layout><CurriculumManagement /></Layout>} />
        <Route path="/admin/reports" element={<Layout><Reports /></Layout>} />
        <Route path="/admin/settings" element={<Layout><SettingsProfile /></Layout>} />
        <Route path="/admin/all-curriculums" element={<Layout><AllCurriculums /></Layout>} />

        {/* Student section routes */}
        <Route path="/student/assignments" element={<Layout><StudentAssignments /></Layout>} />
        <Route path="/student/settings" element={<Layout><ProfileSection /></Layout>} />
        <Route path="/student/feedback" element={<Layout><Feedback /></Layout>} />
        <Route path="/student/grades" element={<Layout><Grades /></Layout>} />
        <Route path="/student/learning-materials" element={<Layout><LearningMaterials /></Layout>} />
        <Route path="/student/attendance" element={<Layout><Attendance /></Layout>} />
        <Route path="/student/communication" element={<Layout><Communication /></Layout>} />

        {/* Teacher section routes */}
        <Route path="/teacher/assignments" element={<Layout><AssignmentSection /></Layout>} />
        <Route path="/teacher/communication" element={<Layout><CheckAnnouncementSection /></Layout>} />
        <Route path="/teacher/settings" element={<Layout><TeacherProfileSection /></Layout>} />
        <Route path="/teacher/attendance" element={<Layout><CheckAttendanceSection /></Layout>} />
        <Route path="/teacher/lesson-plans" element={<Layout><LessonPlans /></Layout>} />
        <Route path="/teacher/student-progress" element={<Layout><StudentProgress /></Layout>} />
        <Route path="/teacher/assessments" element={<Layout><Assessments /></Layout>} />
        <Route path="/teacher/performance" element={<Layout><Performance /></Layout>} />

        {/* Super-admin routes */}
        <Route path="/super-admin/advanced-analytics" element={<Layout><AdvancedAnalytics /></Layout>} />
        <Route path="/super-admin/integration-options" element={<Layout><IntergrationOptions /></Layout>} />
        <Route path="/super-admin/system-settings" element={<Layout><SystemSettings /></Layout>} />
        <Route path="/super-admin/user-management" element={<Layout><UserManagement /></Layout>} />
        <Route path="/super-admin/schools" element={<Layout><AllSchools /></Layout>} />
        <Route path="/super-admin/schools/add-school" element={<Layout><AddSchoolForm /></Layout>} />
        <Route path="/super-admin/schools/all-schools" element={<Layout><AllSchoolsList /></Layout>} />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router> 
  );
};

export default App;
