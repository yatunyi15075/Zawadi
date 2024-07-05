import { DataTypes } from 'sequelize';
import config from '../config.js';
import Class from './classModel.js'; // Import Class model

const { sequelize } = config;

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  registrationNumber: {
    type: DataTypes.STRING(50),
    allowNull: true, // Optional field
  },
  grade: {
    type: DataTypes.STRING(50),
    allowNull: true, // Optional field
  },
  parentName: {
    type: DataTypes.STRING(255),
    allowNull: true, // Optional field
  },
  parentEmail: {
    type: DataTypes.STRING(100),
    allowNull: true, // Optional field
  },
  parentPhone: {
    type: DataTypes.STRING(20),
    allowNull: true, // Optional field
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class, // Correct reference to the Class model
      key: 'id',
    },
  },
});

export default Student;
