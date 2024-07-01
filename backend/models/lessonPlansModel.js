import { DataTypes } from 'sequelize';
import Class from './classModel.js'; // Assuming Class model is imported correctly
import config from '../config.js';

const { sequelize } = config;

const LessonPlan = sequelize.define('LessonPlan', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  class_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Class,
      key: 'id',
    },
  },
});

export default LessonPlan;
