import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home.jsx';
import ChooseUser from '../src/components/ChooseUser';

//Signin and Register
import AdminSignIn from '../src/components/AdminSignIn';
import StudentSignIn from '../src/components/StudentSignIn';
import TeacherSignIn from '../src/components/TeacherSignIn';

//dashboards
import AdminDashboard from '../src/pages/Admin/Dashboard';
import StudentDashboard from '../src/pages/Students/Dashboard';
import TeacherDashboard from '../src/pages/Teachers/Dashboard';
import ParentDashboard from './pages/Parents/ParentDashboard.jsx';
import SuperAdminDashboard from './pages/SuperAdminDashboard/SuperAdminDashboard.jsx';

// admin
import Classes from '../src/pages/Admin/Classes';
import Teachers from '../src/pages/Admin/Teachers';
import Announcement from '../src/pages/Admin/Announcement';
import SettingsProfile from '../src/pages/Admin/SettingsProfile';
import Analytics from './pages/Admin/Analytics.jsx';
import CurriculumManagement from './pages/Admin/CurriculumManagement.jsx';
import Reports from './pages/Admin/Reports.jsx';
import Students from './pages/Admin/Students.jsx';

//students
import StudentAssignments from '../src/pages/Students/Assignments';
import ProfileSection from '../src/pages/Students/Profile';
import Feedback from './pages/Students/Feedback.jsx';
import Grades from './pages/Students/Grades.jsx';
import LearningMaterials from './pages/Students/LearningMaterials.jsx';

//teachers
import AssignmentSection from '../src/pages/Teachers/Assignments';
import CheckAnnouncementSection from '../src/pages/Teachers/Announcement';
import TeacherProfileSection from '../src/pages/Teachers/Profile';
import CheckAttendanceSection from './pages/Teachers/Attendance.jsx';
import LessonPlans from './pages/Teachers/LessonPlans.jsx';
import StudentProgress from './pages/Teachers/StudentProgress.jsx';

//parents
import Attendance from './pages/Parents/Attendance.jsx';
import ChildProgress from './pages/Parents/ChildProgress.jsx';
import Communication from './pages/Parents/Communication.jsx';
import ChildGrades from './pages/Parents/Grades.jsx';


//super-admin
import AdvancedAnalytics from './pages/SuperAdminDashboard/AdvancedAnalytics.jsx';
import IntergrationOptions from './pages/SuperAdminDashboard/IntergrationOptions.jsx';
import SystemSettings from './pages/SuperAdminDashboard/SystemSettings.jsx';
import UserManagement from './pages/SuperAdminDashboard/UserManagement.jsx';

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
        <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
        <Route exact path="/teacher/dashboard" element={<TeacherDashboard />} />        
        <Route exact path="/student/dashboard" element={<StudentDashboard />} />
        <Route exact path="/parent/dashboard" element={<ParentDashboard />} />
        <Route exact path="/super-admin/dashboard" element={<SuperAdminDashboard />} />

        {/* Admin section routes */}
        <Route exact path="/admin/classes" element={<Classes />} />
        <Route exact path="/admin/teachers" element={<Teachers />} />
        <Route exact path="/admin/students" element={<Students />} />
        <Route exact path="/admin/communication" element={<Announcement />} />
        <Route exact path="/admin/analytics" element={<Analytics />} />
        <Route exact path="/admin/curriculum-management" element={<CurriculumManagement />} />
        <Route exact path="/admin/reports" element={<Reports />} />
        <Route exact path="/admin/settings" element={<SettingsProfile />} />


        {/* Student section routes */}
        <Route exact path="/student/assignments" element={<StudentAssignments />} />
        <Route exact path="/student/settings" element={<ProfileSection />} />
        <Route exact path="/student/feedback" element={<Feedback />} />
        <Route exact path="/student/grades" element={<Grades />} />
        <Route exact path="/student/learning-materials" element={<LearningMaterials />} />


        {/* Teacher section routes */}
        <Route exact path="/teacher/assignments" element={<AssignmentSection />} />
        <Route exact path="/teacher/communication" element={<CheckAnnouncementSection />} />
        <Route exact path="/teacher/settings" element={<TeacherProfileSection />} />
        <Route exact path="/teacher/attendance" element={<CheckAttendanceSection />} />
        <Route exact path="/teacher/lesson-plans" element={<LessonPlans />} />
        <Route exact path="/teacher/students-progress" element={<StudentProgress />} />

        {/* parents section routes */}
        <Route exact path="/parents/attendance" element={<Attendance />} />
        <Route exact path="/parents/child-progress" element={<ChildProgress />} />
        <Route exact path="/parents/communication" element={<Communication />} />
        <Route exact path="/parents/child-grades" element={<ChildGrades />} />

        {/* super-admin routes */}
        <Route exact path="/super-admin/advanced-analytics" element={<AdvancedAnalytics />} />
        <Route exact path="/super-admin/intergration-options" element={<IntergrationOptions />} />
        <Route exact path="/super-admin/system-settings" element={<SystemSettings />} />
        <Route exact path="/super-admin/user-management" element={<UserManagement />} />

      </Routes>
    </Router>
  );
};

export default App;
