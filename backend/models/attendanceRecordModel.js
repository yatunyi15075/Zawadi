import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const AttendanceRecord = sequelize.define('AttendanceRecord', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  student_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  student_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  attendance_date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Present', 'Absent'),
    allowNull: false,
  },
  school_id: {
    type: DataTypes.INTEGER,
  },
});

export default AttendanceRecord;
