import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import timetableRouter from './routers/timetableRouter.js';
import teachersRouter from './routers/teachersRouter.js';
import studentRouter from './routers/studentRouter.js';
import studentAssignmentsRouter from './routers/studentAssignmentsRouter.js';
import schoolRouter from './routers/schoolRouter.js';
import progressRouter from './routers/progressRouter.js';
import performanceRouter from './routers/performanceRouter.js';
import lessonPlansRouter from './routers/lessonPlansRouter.js';
import learningMaterialsRouter from './routers/learningMaterialsRouter.js';
import gradesRouter from './routers/gradesRouter.js';
import feedbackRouter from './routers/feedbackRouter.js';
import enteredMarksRouter from './routers/enteredMarksRouter.js';
import attendanceRouter from './routers/attendanceRouter.js';
import communicationRouter from './routers/communicationRouter.js';
import curriculumManagementRouter from './routers/curriculumManagementRouter.js';
import communicationController from './routers/communicationRouter.js';
import classRouter from './routers/classRouter.js';
import attendanceRecordRouter from './routers/attendanceRecordRouter.js';
import assignmentsRouter from './routers/assignmentsRouter.js';
import assessmentReportRouter from './routers/assessmentReportRouter.js';
import announcementRouter from './routers/announcementRouter.js';
import config from './config.js';

dotenv.config();

const app = express();
const PORT = config.port;
const { sequelize } = config;

app.use(express.json());
app.use(cors());

// middleware to log requests
app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request Headers:", req.headers);
  console.log("Request Body:", req.body);
  next();
});

// Routers
app.use('/api/users', userRouter);
app.use('/api/timetables', timetableRouter);
app.use('/api/teachers', teachersRouter);
app.use('/api/students', studentRouter);
app.use('/api/student-assignments', studentAssignmentsRouter);
app.use('/api/schools', schoolRouter);
app.use('/api/progress', progressRouter);
app.use('/api/performances', performanceRouter);
app.use('/api/lesson-plans', lessonPlansRouter);
app.use('/api/learning-materials', learningMaterialsRouter);
app.use('/api/grades', gradesRouter);
app.use('/api/feedbacks', feedbackRouter);
app.use('/api/entered-marks', enteredMarksRouter);
app.use('/api/attendance', attendanceRouter);
app.use('/api/communications', communicationRouter);
app.use('/api/curriculum-entries', curriculumManagementRouter);
app.use('/api/communications', communicationController);
app.use('/api/classes', classRouter);
app.use('/api/attendance-records', attendanceRecordRouter);
app.use('/api/assignments', assignmentsRouter);
app.use('/api/assessment-reports', assessmentReportRouter);
app.use('/api/announcements', announcementRouter);

// Sync database
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
