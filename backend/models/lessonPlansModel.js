import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Class from './Class.js'; // Assuming Class model is imported correctly

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
