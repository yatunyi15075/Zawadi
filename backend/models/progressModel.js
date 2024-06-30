import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Student from './Student.js'; // Assuming Student model is imported correctly

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
