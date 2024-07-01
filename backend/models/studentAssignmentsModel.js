import { DataTypes } from 'sequelize';
import config from '../config.js';
import Student from './studentModel.js'; // Import Student model
import Assignment from './assignmentsModel.js'; // Import Assignment model

const { sequelize } = config;

const StudentAssignment = sequelize.define('StudentAssignment', {
  studentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Student,
      key: 'id',
    },
  },
  assignmentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Assignment,
      key: 'id',
    },
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
}, {
  tableName: 'StudentAssignments', // Ensure the correct table name here
});

export default StudentAssignment;
