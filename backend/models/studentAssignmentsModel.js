import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './studentsModel.js';
import Assignment from './assignmentsModel.js';

const StudentAssignment = sequelize.define('StudentAssignment', {
  studentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Student,
      key: 'student_id',
    },
    primaryKey: true,
  },
  assignmentId: {
    type: DataTypes.INTEGER,
    references: {
      model: Assignment,
      key: 'assignment_id',
    },
    primaryKey: true,
  },
  submissionDate: {
    type: DataTypes.DATEONLY,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Submitted', 'Graded'),
  },
  grade: {
    type: DataTypes.DECIMAL(5, 2),
  },
});

export default StudentAssignment;
