import { DataTypes } from 'sequelize';
// import sequelize from '../config.js';
import Student from './studentModel.js'; // Assuming Student model is imported correctly
import config from '../config.js';

const { sequelize } = config;

const Grade = sequelize.define('Grade', {
  grade_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'student_id',
    },
  },
  subject: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  grade: {
    type: DataTypes.DECIMAL(5, 2),
  },
  performance_level: {
    type: DataTypes.STRING(50),
  },
});

export default Grade;
