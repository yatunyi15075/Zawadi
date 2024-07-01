import { DataTypes } from 'sequelize';
// import sequelize from '../config.js';
import Student from './studentModel.js'; // Ensure correct path to Student model
import config from '../config.js';

const { sequelize } = config;

const Attendance = sequelize.define('Attendance', {
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
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent'),
    allowNull: false,
  },
});

export default Attendance;
