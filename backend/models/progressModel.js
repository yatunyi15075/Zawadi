import { DataTypes } from 'sequelize';
// import sequelize from '../config.js';
import Student from './studentModel.js'; // Assuming Student model is imported correctly
import config from '../config.js';

const { sequelize } = config;

const Progress = sequelize.define('Progress', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Student,
      key: 'id',
    },
  },
  subject: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  progress_data: {
    type: DataTypes.TEXT,
  },
});

export default Progress;
