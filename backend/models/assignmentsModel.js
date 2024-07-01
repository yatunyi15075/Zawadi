import { DataTypes } from 'sequelize';
import config from '../config.js';

const { sequelize } = config;

const Assignment = sequelize.define('Assignment', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  grade: {
    type: DataTypes.STRING(50),
  },
  deadline: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('Multiple Choice', 'Fill in the Blank'),
    allowNull: false,
  },
});

export default Assignment;
